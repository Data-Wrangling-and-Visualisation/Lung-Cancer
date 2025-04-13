<template>
  <!-- Root container: sets up a vertical layout with centered content and gradient background -->
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center py-12 px-4">

    <!-- Header Section: Contains main title and subtitle describing the project purpose -->
    <div class="text-center max-w-3xl mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        <!-- Main title with a colorful gradient effect for visual emphasis -->
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800">
          Lung Cancer Visualizations
        </span>
      </h1>
      <!-- Subtitle that summarizes the goal of the application -->
      <p class="text-xl text-gray-600">
        Transforming medical data into actionable insights
      </p>
    </div>

    <!-- Main Content Card: Describes the motivation and goals of the project -->
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full mb-12">
      <div class="p-8 md:p-10">
        <div class="prose max-w-none">
          <!-- Project introduction and problem statement -->
          <p class="text-lg text-gray-700 mb-6">
            <span class="font-bold text-blue-600">Lung cancer is one of the most pressing health challenges of our time.</span>
            What if we could make sense of it through data? In this project, we transform complex medical datasets
            into <span class="font-semibold text-indigo-600">interactive visualizations</span> that make it easier to spot and understand patterns.
          </p>

          <!-- Project mission and tools overview -->
          <p class="text-lg text-gray-700 mb-6">
            <span class="font-bold text-blue-600">Our goal is simple:</span> to raise awareness and support early detection by showcasing how
            symptoms vary across age groups, genders, and diagnoses. From heatmaps to parallel coordinate charts,
            radar plots, and even 3D models — we present data in ways that are both
            <span class="font-semibold text-indigo-600">informative</span> and <span class="font-semibold text-indigo-600">engaging</span>.
          </p>
        </div>
      </div>
    </div>

    <!-- White Box Section: Highlights key research questions and the methodology behind the project -->
    <div class="bg-white rounded-2xl shadow-xl p-8 max-w-4xl w-full">
      <div class="flex flex-col md:flex-row gap-8">

        <!-- Left Column: Lists key research questions to guide data exploration -->
        <div class="md:w-1/2">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <!-- Decorative bullet to visually enhance the heading -->
            <span class="w-6 h-6 bg-blue-500 rounded-full mr-3"></span>
            Key Questions We Explore
          </h2>

          <!-- Unordered list of specific questions the project aims to answer -->
          <ul class="space-y-4 text-gray-700">
            <li class="flex items-start">
              <span class="flex-shrink-0 mt-1 mr-3 text-blue-500">
                <!-- Icon checkmark indicating a complete or significant item -->
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="..." clip-rule="evenodd" />
                </svg>
              </span>
              <span>What symptoms most commonly appear together in lung cancer patients?</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 mt-1 mr-3 text-blue-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="..." clip-rule="evenodd" />
                </svg>
              </span>
              <span>Do warning signs vary across different age groups?</span>
            </li>
            <li class="flex items-start">
              <span class="flex-shrink-0 mt-1 mr-3 text-blue-500">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="..." clip-rule="evenodd" />
                </svg>
              </span>
              <span>Can visualization help guide earlier diagnosis and prevention?</span>
            </li>
          </ul>
        </div>

        <!-- Right Column: Explains the overall strategy and design principles of the visualizations -->
        <div class="md:w-1/2">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <!-- Decorative bullet in a different color to distinguish this section -->
            <span class="w-6 h-6 bg-indigo-500 rounded-full mr-3"></span>
            Our Approach
          </h2>

          <!-- Brief explanation of the technical and design philosophy of the project -->
          <p class="text-gray-700 mb-6">
            Behind every chart is a story — of data wrangling, thoughtful design, and a passion for making health information more accessible.
          </p>

          <!-- Motivational quote to encourage user interaction -->
          <div class="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <p class="text-blue-800 italic">
              "Dive in, explore, and discover insights that could save lives."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Component metadata
export default {
  name: 'LandingPage' // Unique identifier used for Vue component naming and reuse
}
</script>

<style>
/* Animation applied to each paragraph for a fade-in effect */
.prose p {
  animation: fadeIn 0.8s ease-out forwards;
}

/* Keyframe definition for the fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Staggered delays for a more polished appearance during loading */
.prose p:nth-child(1) { animation-delay: 0.1s; }
.prose p:nth-child(2) { animation-delay: 0.3s; }
</style>
