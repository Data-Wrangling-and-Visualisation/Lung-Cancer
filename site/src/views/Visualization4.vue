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
        <div class="mx-auto mt-12 w-full max-w-4xl">
          <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-md">
            <h3 class="text-2xl text-gray-1200 mb-4">Want to see how <span class="font-semibold text-indigo-700">gender, age, and symptoms</span> are connected?</h3>
            <p class="text-gray-700 mb-4">
              The <span class="font-semibold text-blue-700">Circular Treemap</span> groups data by gender, age, and symptoms in a concentric layout. It gives you a quick overview of how many people fall into each category. Click on any segment to reveal deeper statistics — a great way to dig into patterns.
            </p>
          </div>
        </div>
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
              This <strong class="text-purple-600">interactive circular treemap</strong>  visualizes lung cancer symptom distribution across gender and age groups.
            </p>

            <div class="space-y-4">
              <!-- Gender -->
              <div class="flex items-start">
                <span class="flex-shrink-0 mt-1 mr-3 text-purple-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold">Left/Right Split - Gender:</h3>
                  <div class="flex items-center mt-2">
                    <span class="w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                    <span class="text-sm">Male patients</span>
                  </div>
                  <div class="flex items-center mt-1">
                    <span class="w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                    <span class="text-sm">Female patients</span>
                  </div>
                </div>
              </div>

              <!-- Age Group -->
              <div class="flex items-start">
                <span class="flex-shrink-0 mt-1 mr-3 text-purple-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold">Color Shade - Age Group:</h3>
                  <p class="text-sm mt-2">
                    Lighter shades represent younger patients, while darker shades indicate older ones.
                  </p>
                </div>
              </div>

              <!-- Symptoms -->
              <div class="flex items-start">
                <span class="flex-shrink-0 mt-1 mr-3 text-purple-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 class="font-semibold">Inner Cells - Symptoms:</h3>
                  <p class="text-sm mt-2">
                    Each cell represents a specific symptom. The larger the cell, the more patients reported it within that demographic group.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r">
              <p class="italic text-purple-800">
                <strong>Interactive Feature:</strong> Hover on any segment to view patient counts for each symptom.
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
            <!-- Utility Section -->
            <div>
              <h3 class="font-semibold text-lg mb-2 mt-4 text-gray-700">Why is it useful?</h3>
              <p class="text-left text-gray-700">
                This treemap is especially valuable for:
              </p>
              <ul class="text-left list-disc pl-5 space-y-2 mt-2 text-gray-700">
                <li>Getting a quick overview of the population breakdown</li>
                <li>Spotting demographic groups with high symptom density</li>
              </ul>
            </div>

            <!-- How is it useful? -->
            <div class="bg-purple-50 p-6 rounded-lg border border-purple-100">
              <h3 class="font-semibold text-lg mb-3 text-purple-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
                </svg>
                How is it useful?
              </h3>

              <div class="space-y-4">
                <div>
                  <h4 class="font-medium text-purple-700 mb-1">Case 1: Gender-specific symptom clusters</h4>
                  <p class="text-sm text-gray-700">
                    When "anxiety" appears as a large segment in the <span class="font-bold text-blue-500">male</span> (blue) section but is nearly absent in <span class="font-bold text-red-500">female</span> (red), this suggests gender-specific manifestation needing different diagnostic approaches.
                  </p>
                </div>

                <div>
                  <h4 class="font-medium text-purple-700 mb-1">Case 2: Age-related symptom progression</h4>
                  <p class="text-sm text-gray-700">
                    If "fatigue" dominates light-shaded (young) segments while "wheezing" appears in dark-shaded (elderly) areas, this visual progression helps clinicians anticipate symptom evolution with aging.
                  </p>
                </div>

                <div class="bg-indigo-50 p-4 rounded-lg text-sm">
                  <p class="font-medium text-indigo-800 mb-1">Interpretation Guide:</p>
                  <ul class="text-left list-disc pl-5 space-y-1">
                    <li>Blue/Red comparison shows gender differences</li>
                    <li>Color intensity reveals age distribution</li>
                  </ul>
                </div>
              </div>
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