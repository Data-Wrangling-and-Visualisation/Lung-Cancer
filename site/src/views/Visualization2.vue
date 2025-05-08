<template xmlns="http://www.w3.org/1999/html">
  <!-- Root wrapper with gradient background and padding to give visual depth and spacing -->
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
    <!-- Centered container to constrain layout width and center content -->
    <div class="container mx-auto">

      <!-- =======================
           Header Section
           =======================
           Displays the page title and subtitle explaining the visualization purpose
      -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold mb-4">
          <!-- Gradient text effect for visual emphasis -->
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
            Parallel Coordinates Analysis
          </span>
        </h1>
        <!-- Subtitle providing context to the user -->
        <div class="mx-auto mt-12 w-full max-w-4xl">
          <div class="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-md">
            <h3 class="text-2xl text-gray-1200 mb-4">Want to explore how symptoms appear together <span class="font-semibold text-indigo-700"> across patients</span>?</h3>
            <p class="text-gray-700 mb-4">
              Our <span class="font-semibold text-blue-700">Parallel Coordinate Chart</span> allows you to view each patient as a line intersecting across symptoms. You can easily identify which symptoms appear together, who shows more of them, and how they differ by age. This chart makes it easy to detect complex relationships across individuals.
            </p>
          </div>
        </div>
      </div>

      <!-- =======================
           Main Content Area
           =======================
           Organized using a responsive flex layout that adapts for large screens (horizontal split) or stacks on small screens
      -->
      <div class="flex flex-col gap-8 items-start">

        <!-- ===========================================
             Interactive Visualization (Left Panel)
             ===========================================
             Embeds a D3.js-based parallel coordinates chart via an iframe.
             Each line represents a patient, and each axis corresponds to a symptom.
        -->
        <div class="w-full bg-white rounded-2xl shadow-xl p-4">
          <iframe
              src="/parallel/parallel_d3.html"
              class="w-full h-[800px] border-none rounded-lg"
              title="Parallel Coordinates Visualization"
          ></iframe>
        </div>

        <!-- ===========================================
             Description & Guidance Panel
             ===========================================
             Provides users with instructions, interpretation tips, and key takeaways
             to support comprehension and deeper analysis of the visualization.
        -->

        <div class="flex flex-row gap-8 items-stretch">
          <div class="w-full lg:w-2/3 bg-white rounded-2xl shadow-xl p-8 mt-8 lg:mt-0">
            <!-- Section header with icon for visual hierarchy -->
            <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span class="w-6 h-6 bg-indigo-500 rounded-full mr-3"></span>
              How to Read This Visualization
            </h2>

            <!-- Text blocks organized with spacing and color cues to enhance readability -->
            <div class="space-y-6 text-gray-700">

              <!-- Introductory explanation of what the chart represents -->
              <p>
                This <strong class="text-indigo-600">parallel coordinates chart</strong> displays individual patient profiles where each
                <strong class="text-indigo-600">colored line represents one patient's</strong> symptom pattern across multiple dimensions.
              </p>

              <!-- =======================
                   Legend / Feature Guide
                   ======================= -->
              <div>
                <h3 class="font-semibold text-lg mb-3">Key Features:</h3>
                <ul class="text-left space-y-4">
                  <!-- Explains top vs bottom axis intersection -->
                  <li class="flex items-start">
                    <span class="flex-shrink-0 mt-1 mr-3 text-indigo-500">
                      <!-- Checkmark icon -->
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      <strong>Top intersection</strong> on an axis = symptom <strong class="text-green-600">present</strong>
                    </span>
                  </li>

                  <li class="flex items-start">
                    <span class="flex-shrink-0 mt-1 mr-3 text-indigo-500">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      <strong>Bottom intersection</strong> = symptom <strong class="text-red-600">absent</strong>
                    </span>
                  </li>

                  <li class="flex items-start">
                    <span class="flex-shrink-0 mt-1 mr-3 text-indigo-500">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      <strong>Color-coding</strong> represents different age groups
                    </span>
                  </li>

                  <li class="flex items-start">
                    <span class="flex-shrink-0 mt-1 mr-3 text-indigo-500">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span>
                      <strong>Click lines</strong> to view detailed patient information
                    </span>
                  </li>
                </ul>
              </div>

              <!-- Helpful hint block to assist users in interpreting data clusters -->
              <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r">
                <p class="italic text-indigo-800">
                  <strong>Interactive Features:</strong> Hover on the lines to the whole information of that demographic. Click on the line to see the whole path.
                </p>
              </div>

              <!-- Summary of the analytical goals this visualization supports -->
              <div>
                <h3 class="font-semibold text-lg mb-3">Analytical Value:</h3>
                <ul class="list-disc pl-5 space-y-2 text-left">
                  <li>Compare symptom profiles across patients</li>
                  <li>Identify atypical symptom combinations</li>
                  <li>Detect correlations between symptoms</li>
                </ul>
              </div>
            </div>
            <!-- Utility Section: Describes practical use and value of this chart -->
            <div>
              <h3 class="font-semibold text-lg mb-2 mt-4 text-gray-700">Why is it useful?</h3>
              <p class="text-left text-gray-700">
                The parallel coordinate chart helps:
              </p>
              <ul class="text-left list-disc pl-5 space-y-2 mt-2 text-gray-700">
                <li>Clinicians identify symptom combinations that appear in high-risk profiles</li>
                <li>Compare individual symptom journeys side by side</li>
                <li>Reveal age-related clustering of complex symptom patterns</li>
              </ul>
            </div>
          </div>


            <!-- Utility Section: Demonstrates how parallel coordinates can guide diagnosis through pattern recognition -->
            <div class="lg:w-1/3 bg-indigo-50 p-6 rounded-lg border border-indigo-100 mt-8">
              <h3 class="font-semibold text-lg mb-3 text-indigo-800 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd" />
                </svg>
                How is it useful?
              </h3>

              <div class="space-y-4 text-gray-700">
                <div>
                  <h4 class="font-medium text-indigo-700 mb-1">Case 1: Symptoms for one patient</h4>
                  <p class="text-sm">
                    Each line represents a unique patient. By hovering over it, you reveal detailed symptom data.
                  </p>
                </div>

                <div>
                  <h4 class="font-medium text-indigo-700 mb-1">Case 2: Absence of symptoms helps rule out conditions</h4>
                  <p class="text-sm">
                    On hover, a patient line reveals that while “smoking” and “yellow fingers” are present, “shortness of breath” and “peer pressure” are absent. This absence can be just as informative—quickly ruling out respiratory or cardiac issues and guiding toward neurological evaluation.
                  </p>
                </div>

                <div>
                  <h4 class="font-medium text-indigo-700 mb-1">Case 3: Comparing individual trajectories across a cohort</h4>
                  <p class="text-sm">
                    You notice multiple patients in the same demographic group (e.g., males 40–50) showing a similar arc through “fatigue”, “chest pain”, and “wheezing”. Parallel coordinate visualization allows for quick pattern recognition across these cases, helping to detect emerging trends or shared underlying conditions.
                  </p>
                </div>

                <div class="bg-blue-50 p-4 rounded-lg text-sm">
                  <p class="font-medium text-blue-800 mb-1">Quick Reference:</p>
                  <ul class="text-left list-disc pl-5 space-y-1">
                    <li>Each line = one patient</li>
                    <li>Top of axis = symptom <span class="font-bold text-green-600">present</span>, bottom = <span class="font-bold text-red-600">absent</span></li>
                    <li>Hover to explore individual symptom profiles</li>
                    <li>Helps reveal full-case narratives at a glance</li>
                    <li>Outliers and common paths can guide differential diagnosis</li>
                  </ul>
                </div>
              </div>
        </div>


        </div> <!-- End of Description Panel -->
      </div> <!-- End of Main Content -->
    </div>
  </div>
</template>

<script setup>
// No JavaScript logic needed in this component. Visualization is loaded from external iframe.
</script>

<style>
/* Sets a maximum width to prevent the container from becoming too wide on large screens */
.container {
  max-width: 1400px;
}

/* Adds a smooth fade-in animation when the white containers render */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.bg-white {
  animation: fadeIn 0.6s ease-out forwards;
}
</style>
