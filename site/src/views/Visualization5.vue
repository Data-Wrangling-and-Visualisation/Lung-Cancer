<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800"
          >
            Radar Chart Analysis
          </span>
        </h1>
        <div class="mx-auto mt-12 w-full max-w-4xl">
          <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow-md">
            <h3 class="text-2xl text-gray-1200 mb-4"> Want to track symptom changes as people <span class="font-semibold text-indigo-700">get older</span>?</h3>
            <p class="text-gray-700 mb-4">
              The <span class="font-semibold text-indigo-700">Radar Chart</span> places symptoms around a circle and shows how common each one is depending on the selected age. It’s an excellent way to see which symptoms become more or less common over time.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Radar Chart -->
        <div class="lg:w-2/3 w-full bg-white rounded-2xl shadow-xl p-4">
          <iframe
            src="/radarchart/radarchart.html"
            class="w-full h-[600px] border-none rounded-lg"
            title="Symptom Radar Chart"
          ></iframe>
        </div>

        <!-- Explanation Panel -->
        <div class="lg:w-1/3 w-full bg-white rounded-2xl shadow-xl p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="w-6 h-6 bg-blue-500 rounded-full mr-3"></span>
            How to Read the Chart
          </h2>

          <div class="space-y-6 text-gray-700">
            <p>
              The <strong class="text-blue-600">radar chart</strong> displays
              prevalence of each symptom across
              <strong class="text-blue-600">different age groups</strong>. Use
              the slider below the chart to switch between groups.
            </p>

            <div>
              <h3 class="font-semibold text-lg mb-2">Chart Details:</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span
                    class="inline-block w-4 h-4 bg-[#4682B4] rounded-sm mr-2 mt-1"
                  ></span>
                  <span
                    >Steel Blue lines and fill represent symptom strength</span
                  >
                </li>
              </ul>
            </div>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
              <p class="italic">
                <strong>Tip:</strong> Hover over symptoms to see their labels
                more clearly. Use the slider to explore.
              </p>
            </div>

            <div>
              <h3 class="font-semibold text-lg mb-2">Insights:</h3>
              <ul class="text-left list-disc pl-5 space-y-2">
                <li>Understand which symptoms dominate in each age range</li>
                <li>Compare prevalence of specific conditions</li>
                <li>Spot patterns in patient-reported outcomes</li>
              </ul>
            </div>
            <!-- Utility Section: Why this radar chart is useful -->
            <div>
              <h3 class="font-semibold text-lg mb-2 mt-4 text-gray-700">Why is it useful?</h3>
              <p class="text-left text-gray-700">
                This radar chart supports medical analysis by helping to:
              </p>
              <ul class="text-left list-disc pl-5 space-y-2 mt-2 text-gray-700">
                <li>Track how symptom patterns change with age progression</li>
                <li>Spot unusual spikes or drops in symptom frequency</li>
              </ul>
            </div>

            <!-- How is it useful? -->
            <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 class="font-semibold text-lg mb-3 text-indigo-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
                </svg>
                How is it useful?
              </h3>

              <div class="space-y-4">
                <div>
                  <h4 class="font-medium text-indigo-700 mb-1">Case 1: Evaluating middle-aged smokers</h4>
                  <p class="text-sm text-gray-700">
                    For a 40-year-old person, the radar chart might show prominent spikes in "allergy", "chronic disease" and "coughing" compared to other symptoms. This visual pattern helps clinicians prioritize these symptoms during examination and consider early screening, even if other complaints seem minor.
                  </p>
                </div>

                <div>
                  <h4 class="font-medium text-indigo-700 mb-1">Case 2: Assessing geriatric patients</h4>
                  <p class="text-sm text-gray-700">
                    When evaluating an 80-year-old, the chart may reveal that "yellow fingers", "fatigue" and "allergy" dominate their symptom profile while "chest pain" is less pronounced. This helps explain why lung cancer often goes undiagnosed in elderly patients - their symptoms differ from textbook cases.
                  </p>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg text-sm">
                  <p class="font-medium text-blue-800 mb-1">Key Features:</p>
                  <ul class=" text-left list-disc pl-5 space-y-1">
                    <li>Each axis represents a different symptom</li>
                    <li>The further the point from center, the more prevalent</li>
                    <li>Compare shapes across age groups</li>
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
// Нет JS-логики, просто отображаем embedded chart
</script>

<style>
.container {
  max-width: 1200px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-white {
  animation: fadeIn 0.6s ease-out forwards;
}
</style>
