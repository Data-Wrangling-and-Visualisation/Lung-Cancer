// Importing core Three.js library and orbit controls so I can move the camera around
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js";
import { OrbitControls } from "./lib/OrbitControls.js";

// Declaring global variables: scene, camera, renderer, controls, and a group for all bubbles
let scene, camera, renderer, controls, bubbleGroup;

// These are the symptoms I’ll visualize — each will become a bubble
const symptoms = ["COUGHING", "FATIGUE", "WHEEZING", "SHORTNESS_OF_BREATH", "CHEST_PAIN"];

// Start the visualization
init();

// This function sets up the whole 3D scene and camera
function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xfefeff); // light neutral background

  // Perspective camera so things feel 3D
  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 200; // start a bit further back so bubbles aren’t in our face

  // Renderer handles all the drawing — and I make sure it fits the screen
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("canvas-container").appendChild(renderer.domElement);

  // Adding lighting so the bubbles look shiny and nice
  scene.add(new THREE.AmbientLight(0xffffff, 0.6));
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(10, 20, 10);
  scene.add(light);

  // Letting user move the view with mouse (zoom, rotate, etc.)
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.zoomSpeed = 0.4;
  controls.rotateSpeed = 0.5;
  controls.panSpeed = 0.5;
  controls.minDistance = 50;
  controls.maxDistance = 800;

  // I’ll put all bubbles into this group so I can clear and redraw them easily
  bubbleGroup = new THREE.Group();
  scene.add(bubbleGroup);

  animate();   // Start the animation loop
  loadData();  // Fetch and visualize the dataset
}

// Keeps rendering the scene on every frame and updates camera movement
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Loads the cleaned dataset (JSON format) and updates the UI and visualization
function loadData() {
  fetch("../cleaned-lung-cancer-dataset/cleaned_data.json")
    .then((res) => res.json())
    .then((data) => {
      setupUI(data);     // Hook up the age slider and gender checkboxes
      updateBubbles(data); // Draw bubbles based on current settings
    })
    .catch((err) => {
      alert("Failed to load data");
      console.error(err);
    });
}

// Attaches event listeners to UI controls and triggers redraws on input
function setupUI(data) {
  const slider = document.getElementById("ageSlider");
  const ageLabel = document.getElementById("ageValue");

  // Updates label and bubbles when slider moves
  slider.addEventListener("input", () => {
    ageLabel.textContent = slider.value;
    updateBubbles(data);
  });

  // Redraw bubbles when gender filters change
  document.getElementById("maleCheckbox").addEventListener("change", () => updateBubbles(data));
  document.getElementById("femaleCheckbox").addEventListener("change", () => updateBubbles(data));
}

// Filters dataset by age + gender, then counts each symptom
function updateBubbles(data) {
  const age = parseInt(document.getElementById("ageSlider").value);
  const male = document.getElementById("maleCheckbox").checked;
  const female = document.getElementById("femaleCheckbox").checked;

  // Keep only entries matching selected gender and within 10 years of selected age
  const filtered = data.filter((entry) => {
    const genderMatch = (entry.GENDER === 1 && male) || (entry.GENDER === 2 && female);
    return genderMatch && Math.abs(entry.AGE - age) <= 10;
  });

  // Count how many people in this group had each symptom
  const counts = {};
  for (let symptom of symptoms) {
    counts[symptom] = filtered.reduce((acc, item) => acc + (item[symptom] || 0), 0);
  }

  drawBubbles(counts); // Draw bubbles based on these counts
}

// Actually creates and positions the bubble spheres based on symptom counts
function drawBubbles(counts) {
  bubbleGroup.clear(); // Remove old bubbles

  const values = Object.values(counts);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const total = symptoms.length;

  let i = 0;
  for (const [symptom, count] of Object.entries(counts)) {
    // Normalize count to 0–1 range
    const norm = (count - min) / (max - min || 1);
    
    // Calculate bubble size using dramatic exponential scaling
    const radius = 4 + Math.pow(norm, 2.5) * 60;

    // Bubble material (color based on symptom index)
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(`hsl(${i * 72}, 70%, 65%)`), // different hue for each
      roughness: 0.4,
      metalness: 0.3,
    });

    const bubble = new THREE.Mesh(geometry, material);

    // Place bubble in a radial circle layout
    const angle = (i / total) * Math.PI * 2;
    const radialDist = 30 + radius * 2.2;
    const x = Math.cos(angle) * radialDist;
    const y = Math.sin(angle) * radialDist;

    bubble.position.set(x, y, 0);
    bubble.userData = { symptom, count }; // Save info for tooltip later
    bubbleGroup.add(bubble);
    i++;
  }
}

// 🧠 TOOLTIP logic: shows symptom + count when hovering bubbles

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.appendChild(tooltip);

window.addEventListener("mousemove", (event) => {
  // Convert mouse position to normalized -1 to 1 for raycasting
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(bubbleGroup.children);

  // If hovering a bubble, show tooltip with its info
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
