import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene, camera, renderer, controls, bubbleGroup;
const symptoms = ["COUGHING", "FATIGUE", "WHEEZING", "SHORTNESS_OF_BREATH", "CHEST_PAIN"];

init();

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfefeff);

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 200;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("canvas-container").appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 20, 10);
  scene.add(light);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;

  controls.zoomSpeed = 0.4;
  controls.rotateSpeed = 0.5;
  controls.panSpeed = 0.5;
  controls.minDistance = 50;
  controls.maxDistance = 800; 
  bubbleGroup = new THREE.Group();
  scene.add(bubbleGroup);

  animate();
  loadData();
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

function loadData() {
  fetch("cleaned_data.json")
    .then((res) => res.json())
    .then((data) => {
      setupUI(data);
      updateBubbles(data);
    })
    .catch((err) => {
      alert("Failed to load data");
      console.error(err);
    });
}

function setupUI(data) {
  const slider = document.getElementById("ageSlider");
  const ageLabel = document.getElementById("ageValue");

  slider.addEventListener("input", () => {
    ageLabel.textContent = slider.value;
    updateBubbles(data);
  });

  document.getElementById("maleCheckbox").addEventListener("change", () => updateBubbles(data));
  document.getElementById("femaleCheckbox").addEventListener("change", () => updateBubbles(data));
}

function updateBubbles(data) {
  const age = parseInt(document.getElementById("ageSlider").value);
  const male = document.getElementById("maleCheckbox").checked;
  const female = document.getElementById("femaleCheckbox").checked;

  const filtered = data.filter((entry) => {
    const genderMatch = (entry.GENDER === 1 && male) || (entry.GENDER === 2 && female);
    return genderMatch && Math.abs(entry.AGE - age) <= 10;
  });

  const counts = {};
  for (let symptom of symptoms) {
    counts[symptom] = filtered.reduce((acc, item) => acc + (item[symptom] || 0), 0);
  }

  drawBubbles(counts);
}

function drawBubbles(counts) {
  bubbleGroup.clear();

  const values = Object.values(counts);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const total = symptoms.length;

  let i = 0;
  for (const [symptom, count] of Object.entries(counts)) {
    const norm = (count - min) / (max - min || 1); // normalize 0-1
    const radius = 4 + Math.pow(norm, 2.5) * 60;    // BIG drama scaling

    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(`hsl(${i * 72}, 70%, 65%)`),
      roughness: 0.4,
      metalness: 0.3,
    });

    const bubble = new THREE.Mesh(geometry, material);

    // Radial layout with dynamic offset
    const angle = (i / total) * Math.PI * 2;
    const radialDist = 30 + radius * 2.2;
    const x = Math.cos(angle) * radialDist;
    const y = Math.sin(angle) * radialDist;

    bubble.position.set(x, y, 0);
    bubble.userData = { symptom, count };
    bubbleGroup.add(bubble);
    i++;
  }
}

// Tooltip logic
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

window.addEventListener("mousemove", (event) => {
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(bubbleGroup.children);

  if (intersects.length > 0) {
    const obj = intersects[0].object;
    const { symptom, count } = obj.userData;
    tooltip.style.display = "block";
    tooltip.innerHTML = `<strong>${symptom}</strong><br/>Count: ${count}`;
    tooltip.style.left = event.clientX + 10 + "px";
    tooltip.style.top = event.clientY + 10 + "px";
  } else {
    tooltip.style.display = "none";
  }
});
