<template>
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
        <p class="text-xl text-gray-600">
          Multidimensional visualization of patient symptom patterns
        </p>
      </div>

      <!-- =======================
           Main Content Area
           =======================
           Organized using a responsive flex layout that adapts for large screens (horizontal split) or stacks on small screens
      -->
      <div class="flex flex-col lg:flex-row gap-8 items-start">

        <!-- ===========================================
             Interactive Visualization (Left Panel)
             ===========================================
             Embeds a D3.js-based parallel coordinates chart via an iframe.
             Each line represents a patient, and each axis corresponds to a symptom.
        -->
        <div class="w-full bg-white rounded-2xl shadow-xl p-4">
          <iframe
              src="/parallel_d3.html"
              class="w-full h-[800px] border-none rounded-lg"
              title="Parallel Coordinates Visualization"
          ></iframe>
        </div>

        <!-- ===========================================
             Description & Guidance Panel (Right Panel)
             ===========================================
             Provides users with instructions, interpretation tips, and key takeaways
             to support comprehension and deeper analysis of the visualization.
        -->
        <div class="w-full lg:w-1/3 bg-white rounded-2xl shadow-xl p-8 mt-8 lg:mt-0">
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
                <strong>Pro Tip:</strong> Look for clusters of similar lines to identify common symptom patterns.
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
