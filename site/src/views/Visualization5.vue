<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800"
          >
            Symptom Radar Chart
          </span>
        </h1>
        <p class="text-xl text-gray-600">
          Visualizing symptom patterns by age group
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Radar Chart -->
        <div class="lg:w-2/3 w-full bg-white rounded-2xl shadow-xl p-4">
          <iframe
            src="/radarchart.html"
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
