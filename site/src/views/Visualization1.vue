<template>
  <!--
    Full-page container with vertical padding and a subtle top-to-bottom blue-to-white gradient background.
    Creates a clean and visually engaging canvas for the visualization content.
  -->
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
    <!--
      Constrains the inner content to a max width and centers it horizontally for better readability on large screens.
    -->
    <div class="container mx-auto">

      <!--
        Header section introducing the current visualization topic.
        Includes a title with gradient-styled text and a supporting subtitle for context.
      -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
            Symptom Heatmap Analysis
          </span>
        </h1>
        <p class="text-xl text-gray-600">
          Visualizing symptom prevalence across age groups
        </p>
      </div>

      <!--
        Main content section split into two parts:
        1. A D3.js heatmap visualization embedded via iframe.
        2. A right-hand panel that describes how to interpret the heatmap.
      -->
      <div class="flex flex-col lg:flex-row gap-8 items-start">

        <!--
          Heatmap Container:
          Contains the iframe that embeds the interactive heatmap built with D3.
          The heatmap allows users to explore symptom frequency across age groups.
        -->
        <div class="lg:w-2/3 w-full bg-white rounded-2xl shadow-xl p-4">
          <iframe
              src="/heatmap/heatmap_d3.html"
              class="w-full h-[500px] border-none rounded-lg"
              title="Symptom Heatmap Visualization"
          ></iframe>
        </div>

        <!--
          Description Panel:
          Provides guidance on how to read and interpret the heatmap, including color coding,
          usage tips, and key insights the user can derive from the visualization.
        -->
        <div class="lg:w-1/3 w-full bg-white rounded-2xl shadow-xl p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="w-6 h-6 bg-blue-500 rounded-full mr-3"></span>
            Understanding the Heatmap
          </h2>

          <div class="space-y-6 text-gray-700">
            <!-- Introductory explanation of the heatmap purpose -->
            <p>
              This <strong class="text-blue-600">interactive heatmap</strong> reveals how symptoms distribute across
              different <strong class="text-blue-600">age groups</strong> in lung cancer patients.
            </p>

            <!-- Explanation of the heatmap’s color legend -->
            <div>
              <h3 class="font-semibold text-lg mb-2">Color Coding:</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="inline-block w-4 h-4 bg-red-500 rounded-sm mr-2 mt-1"></span>
                  <span><strong>Red</strong> indicates high symptom prevalence</span>
                </li>
                <li class="flex items-start">
                  <span class="inline-block w-4 h-4 bg-green-500 rounded-sm mr-2 mt-1"></span>
                  <span><strong>Green</strong> indicates low prevalence</span>
                </li>
              </ul>
            </div>

            <!-- User tip for interacting with the heatmap -->
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
              <p class="italic">
                <strong>Tip:</strong> Hover over cells to see exact prevalence rates and case numbers.
              </p>
            </div>

            <!-- Key takeaways the user can gain from analyzing the heatmap -->
            <div>
              <h3 class="font-semibold text-lg mb-2">Key Insights:</h3>
              <ul class="text-left list-disc pl-5 space-y-2">
                <li>Identify age-specific symptom patterns</li>
                <li>Compare symptom severity across groups</li>
                <li>Detect unusual prevalence clusters</li>
              </ul>
            </div>

            <!-- Utility Section: Describes practical use and value of this heatmap -->
            <div>
              <h3 class="font-semibold text-lg mb-2 text-gray-800">Why is it useful?</h3>
              <p class="text-left text-gray-700">
                This heatmap enables doctors and researchers to:
              </p>
              <ul class="text-left list-disc pl-5 space-y-2 mt-2 text-gray-700">
                <li>Quickly spot unusual symptom trends in younger vs older patients</li>
                <li>Prioritize symptoms that frequently co-occur in critical age ranges</li>
                <li>Support early detection by highlighting emerging patterns</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed here at this stage — the component only renders static structure and embedded content.
</script>

<style>
/*
  Container width constraint for consistent layout across screen sizes.
  This class matches typical Tailwind container settings.
*/
.container {
  max-width: 1200px;
}

/*
  Fade-in animation to gently reveal the white background content blocks on load.
  Enhances perceived smoothness and user experience.
*/
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.bg-white {
  animation: fadeIn 0.6s ease-out forwards;
}
</style>
