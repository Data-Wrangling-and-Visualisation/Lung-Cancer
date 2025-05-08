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
        <div class="mx-auto mt-12 w-full max-w-4xl">
          <div class="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 shadow-md">
            <p class="text-2xl text-gray-1200 mb-4">Curious how <span class="font-semibold text-indigo-700">age</span> impacts <span class="font-semibold text-indigo-700">symptoms</span>?</p>
            <p class="text-gray-700 mb-4">
              Our <span class="font-semibold text-indigo-700">heatmap visualization</span> reveals how common symptoms vary across different age groups. Each colored cell shows how frequently a symptom appears for a specific age range — darker shades mean higher frequency.
            </p>
          </div>
        </div>
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

            <!-- Utility Section: Provides concrete examples of how to interpret the chart in the context of real patient diagnoses-->
            <div class="bg-indigo-50 p-6 rounded-lg border border-indigo-100">
              <h3 class="font-semibold text-lg mb-3 text-indigo-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
                </svg>
                How is it useful?
              </h3>

              <div class="space-y-4">
                <div>
                  <h4 class="font-medium text-indigo-700 mb-1">Case 1: Young patient with persistent cough</h4>
                  <p class="text-sm text-gray-700">
                    Imagine a 85-year-old patient who has been coughing for 3 months and had shortness of breath. On the map, we look at their age group (80-89 years) and the "coughing" symptom. If this cell is <span class="font-bold text-green-600">yellow/green</span>, it means this symptom is rarely associated with serious conditions at this age. The doctor might first check for allergies or asthma rather than immediately ordering complex tests.
                  </p>
                </div>

                <div>
                  <h4 class="font-medium text-indigo-700 mb-1">Case 2: Elderly patient with severe fatigue</h4>
                  <p class="text-sm text-gray-700">
                    For a 70-year-old complaining of constant fatigue, we check their age group. If the "yellow fingers" cell is <span class="font-bold text-red-600">red</span> and nearby cells for "coughing" and "shortness of breath" are also red, this is a warning sign. It means this combination often appears with serious conditions. The doctor will ask follow-up questions and may order tests.
                  </p>
                </div>

                <div>
                  <h4 class="font-medium text-indigo-700 mb-1">Case 3: 50-year-old male smoker with chest pain</h4>
                  <p class="text-sm text-gray-700">
                    For a 50-year-old smoker with chest pain, the map will show: if pain combines with <span class="font-bold text-red-600">red</span> "chronic disease" or "coughing", this is alarming. But if the pain cell is <span class="font-bold text-yellow-500">yellow</span> and other symptoms are <span class="font-bold text-green-600">green</span>, the cause might be less dangerous (like stomach issues).
                  </p>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg text-sm">
                  <p class="font-medium text-blue-800 mb-1">Quick Reference:</p>
                  <ul class="text-left list-disc pl-5 space-y-1">
                    <li><span class="font-bold text-red-600">Red</span> = "Warning! Often indicates serious conditions in this age group"</li>
                    <li><span class="font-bold text-green-600">Green</span> = "Typically not associated with dangerous conditions"</li>
                    <li>Always check neighboring symptoms, not just individual cells</li>
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
