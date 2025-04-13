<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
    <div class="container mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
            Circular Treemap Analysis
          </span>
        </h1>
        <p class="text-xl text-gray-600">
          Hierarchical visualization of patient demographics and symptoms
        </p>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Visualization Container -->
        <div class="w-full bg-white rounded-2xl shadow-xl p-4">
          <iframe
              src="/circular/index.html"
              class="w-full h-[830px] border-none rounded-lg"
              title="Circular Treemap Visualization"
          ></iframe>
        </div>

        <!-- Description Panel -->
        <div class="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl p-8 mt-8 lg:mt-0">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="w-6 h-6 bg-purple-500 rounded-full mr-3"></span>
            Understanding the Treemap
          </h2>

          <div class="space-y-6 text-gray-700">
            <p>
              This <strong class="text-purple-600">interactive circular treemap</strong> displays hierarchical patient data with three levels of categorization:
            </p>

            <div class="space-y-4">
              <div class="flex items-start">
                <span class="flex-shrink-0 mt-1 mr-3 text-purple-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold">Outer Ring - Gender:</h3>
                  <div class="flex items-center mt-2">
                    <span class="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                    <span class="text-sm">Male patients</span>
                  </div>
                  <div class="flex items-center mt-1">
                    <span class="w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                    <span class="text-sm">Female patients</span>
                  </div>
                </div>
              </div>

              <div class="flex items-start">
                <span class="flex-shrink-0 mt-1 mr-3 text-purple-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold">Middle Ring - Age Groups:</h3>
                  <p class="text-sm mt-2">Segment size corresponds to patient count in each age range</p>
                </div>
              </div>

              <div class="flex items-start">
                <span class="flex-shrink-0 mt-1 mr-3 text-purple-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold">Inner Segments - Symptoms:</h3>
                  <p class="text-sm mt-2">Detailed breakdown of symptom prevalence within each demographic</p>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r">
              <p class="italic text-purple-800">
                <strong>Interactive Feature:</strong> Click any segment to view detailed patient counts and percentages.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg mb-3">Analytical Value:</h3>
              <ul class=" text-left list-disc pl-5 space-y-2 text-sm">
                <li>Compare gender distribution across symptoms</li>
                <li>Identify age-specific symptom patterns</li>
                <li>Detect demographic clusters in symptom prevalence</li>
                <li>Understand hierarchical relationships in patient data</li>
              </ul>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.container {
  max-width: 1400px;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.bg-white {
  animation: fadeIn 0.6s ease-out forwards;
}
</style>