<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
            3D Bubble Visualization
          </span>
        </h1>
        <p class="text-xl text-gray-600">
          Exploring symptom prevalence across demographics
        </p>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Visualization -->
        <div class="w-full lg:w-2/3 bg-white rounded-2xl shadow-xl p-4">
          <div ref="canvasContainer" class="w-full h-[500px] rounded-lg"></div>
          <div class="mt-4 flex gap-4 items-center">
            <label>
              Age: <span>{{ age }}</span>
              <input id="ageSlider" type="range" min="0" max="100" v-model="age" />
            </label>
            <label class="ml-4">
              <input id="maleCheckbox" type="checkbox" v-model="male" />
              Male
            </label>
            <label class="ml-2">
              <input id="femaleCheckbox" type="checkbox" v-model="female" />
              Female
            </label>
          </div>
        </div>

        <!-- Description Panel -->
        <div class="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="w-6 h-6 bg-blue-500 rounded-full mr-3"></span>
            Diagram Interpretation
          </h2>

          <div class="space-y-6 text-gray-700">
            <p>
              This <strong class="text-blue-600">interactive 3D bubble chart</strong> visualizes symptom prevalence.
            </p>
            <ul class="space-y-2">
              <li>Bubble size = symptom prevalence</li>
              <li>Filter by age and gender</li>
              <li>Tooltip on hover: symptom + count</li>
              <li>Drag to rotate, scroll to zoom</li>
            </ul>
          </div>
          <!-- Utility Section -->
          <div>
            <h3 class="font-semibold text-lg mb-2 mt-4 text-gray-700">Why is it useful?</h3>
            <p class="text-left text-gray-700">
              This 3D chart allows researchers and clinicians to:
            </p>
            <ul class="text-left list-disc pl-5 space-y-2 mt-2 text-gray-700">
              <li>Visually compare symptom intensity in different demographics</li>
              <li>Quickly identify symptoms with high concentration in certain age groups</li>
              <li>Interactively explore how gender influences symptom distribution</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const canvasContainer = ref(null)
const age = ref(50)
const male = ref(true)
const female = ref(true)

const symptoms = ["COUGHING", "FATIGUE", "WHEEZING", "SHORTNESS_OF_BREATH", "CHEST_PAIN"]
let scene, camera, renderer, controls, bubbleGroup, jsonData
let raycaster, mouse, tooltip

onMounted(() => {
  initScene()
  fetch("/bubble/cleaned_data.json")
      .then(res => res.json())
      .then(data => {
        jsonData = data
        updateBubbles()
      })

  // Tooltip
  raycaster = new THREE.Raycaster()
  mouse = new THREE.Vector2()
  tooltip = document.createElement("div")
  tooltip.style.position = "absolute"
  tooltip.style.padding = "6px 10px"
  tooltip.style.background = "#333"
  tooltip.style.color = "#fff"
  tooltip.style.borderRadius = "6px"
  tooltip.style.fontSize = "14px"
  tooltip.style.pointerEvents = "none"
  tooltip.style.display = "none"
  document.body.appendChild(tooltip)

  window.addEventListener("mousemove", handleMouseMove)
})

watch([age, male, female], updateBubbles)

function initScene() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xfefeff)

  camera = new THREE.PerspectiveCamera(70, 2, 1, 5000)
  camera.position.z = 200

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(canvasContainer.value.clientWidth, canvasContainer.value.clientHeight)
  canvasContainer.value.appendChild(renderer.domElement)

  scene.add(new THREE.AmbientLight(0xffffff, 0.6))
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(10, 20, 10)
  scene.add(light)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.08
  controls.zoomSpeed = 0.4
  controls.rotateSpeed = 0.5
  controls.panSpeed = 0.5
  controls.minDistance = 50
  controls.maxDistance = 800

  bubbleGroup = new THREE.Group()
  scene.add(bubbleGroup)

  animate()
}

function animate() {
  requestAnimationFrame(animate)
  controls.update()
  renderer.render(scene, camera)
}

function updateBubbles() {
  if (!jsonData) return

  const filtered = jsonData.filter(entry => {
    const genderMatch = (entry.GENDER === 1 && male.value) || (entry.GENDER === 2 && female.value)
    return genderMatch && Math.abs(entry.AGE - age.value) <= 10
  })

  const counts = {}
  for (const symptom of symptoms) {
    counts[symptom] = filtered.reduce((acc, item) => acc + (item[symptom] || 0), 0)
  }

  drawBubbles(counts)
}

function drawBubbles(counts) {
  bubbleGroup.clear()

  const values = Object.values(counts)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  const total = symptoms.length
  let index = 0

  for (const [symptom, count] of Object.entries(counts)) {
    const norm = (count - min) / range
    const radius = 5 + norm * 30
    const geometry = new THREE.SphereGeometry(radius, 32, 32)
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(`hsl(${index * 60}, 70%, 60%)`),
      roughness: 0.3,
      metalness: 0.1,
    })
    const bubble = new THREE.Mesh(geometry, material)
    bubble.userData = { symptom, count } // 🔍 used for tooltip

    const angle = (index / total) * Math.PI * 2
    bubble.position.set(Math.cos(angle) * 60, Math.sin(angle) * 60, (Math.random() - 0.5) * 50)
    bubbleGroup.add(bubble)
    index++
  }
}

function handleMouseMove(event) {
  if (!renderer || !bubbleGroup) return

  const rect = renderer.domElement.getBoundingClientRect()
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

  raycaster.setFromCamera(mouse, camera)
  const intersects = raycaster.intersectObjects(bubbleGroup.children)

  if (intersects.length > 0) {
    const obj = intersects[0].object
    const { symptom, count } = obj.userData
    tooltip.style.display = "block"
    tooltip.innerHTML = `<strong>${symptom}</strong><br/>Count: ${count}`
    tooltip.style.left = event.clientX + 10 + "px"
    tooltip.style.top = event.clientY + 10 + "px"
  } else {
    tooltip.style.display = "none"
  }
}
</script>

<style scoped>
input[type="range"] {
  width: 150px;
}
</style>
