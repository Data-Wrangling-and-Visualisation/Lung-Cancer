let data = {};
let symptoms = [];
let ageSlider;
let ageGroups = [];
let currentGroupIndex = 0;
let ageLabel;
let isDataLoaded = false;
const URL = 'http://127.0.0.1:5000/api';

function setup() {
    createCanvas(700, 580);
    angleMode(DEGREES);

    fetch(`radarchart_data`)
        .then(res => res.json())
        .then(json => {
            data = json;
            let indexes = Object.keys(data);

            for (let i in indexes) {
                ageGroups.push(data[indexes[i]]['age_group']);
            }

            symptoms = Object.keys(data[indexes[0]]).filter(key => key !== "age_group");

            ageSlider = createSlider(0, ageGroups.length - 1, 0, 1);
            ageSlider.position(width / 2 - 100, height - 50);
            ageSlider.style('width', '200px');

            ageLabel = createDiv();
            ageLabel.position(width / 2 - 100, height - 80);
            ageLabel.style('font-size', '16px');
            ageLabel.style('text-align', 'center');
            ageLabel.style('width', '200px');

            isDataLoaded = true;
        });
}

function draw() {
    background(255);

    if (!isDataLoaded) {
        textAlign(CENTER, CENTER);
        textSize(20);
        fill(100);
        text("Loading data...", width / 2, height / 2);
        return;
    }

    currentGroupIndex = ageSlider.value();
    let currentGroup = ageGroups[currentGroupIndex];
    let values = data[currentGroupIndex];
    if (!values) return;

    ageLabel.html("Age Group: <b>" + currentGroup + "</b>");

    translate(width / 2, height / 2 - 50);
    stroke(200);
    noFill();
    let levels = 5;
    let radius = 160;

    let steelBlue = color(70, 130, 180);
    let steelBlueTransparent = color(70, 130, 180, 80);
    let gridColor = color(200);

    // Сетка
    stroke(gridColor);
    for (let l = 1; l <= levels; l++) {
        beginShape();
        for (let i = 0; i < symptoms.length; i++) {
            let angle = map(i, 0, symptoms.length, 0, 360);
            let r = (radius / levels) * l;
            let x = cos(angle) * r;
            let y = sin(angle) * r;
            vertex(x, y);
        }
        endShape(CLOSE);
    }

    // Лучи
    for (let i = 0; i < symptoms.length; i++) {
        let angle = map(i, 0, symptoms.length, 0, 360);
        let x = cos(angle) * radius;
        let y = sin(angle) * radius;
        line(0, 0, x, y);
    }

    // Подписи
    textAlign(CENTER, CENTER);
    fill(50);
    noStroke();
    textSize(12);
    for (let i = 0; i < symptoms.length; i++) {
        let angle = map(i, 0, symptoms.length, 0, 360);
        let x = cos(angle) * (radius + 25);
        let y = sin(angle) * (radius + 25);
        text(symptoms[i].replace("_", "\n"), x, y);
    }

    // Полигон значений
    fill(steelBlueTransparent);
    stroke(steelBlue);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < symptoms.length; i++) {
        let angle = map(i, 0, symptoms.length, 0, 360);
        let value = values[symptoms[i]] || 0;
        let r = value * radius;
        let x = cos(angle) * r;
        let y = sin(angle) * r;
        vertex(x, y);
    }
    endShape(CLOSE);
}
