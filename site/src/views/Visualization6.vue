<template>
  <div class="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12 px-4">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-800"
          >
            Sankey Diagram Analysis
          </span>
        </h1>
        <p class="text-xl text-gray-600">
          Visualizing probability of having lung cancer based on symptoms
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <!-- Sankey Diagram -->
        <div class="lg:w-2/3 w-full bg-white rounded-2xl shadow-xl p-4">
          <iframe
            src="/sankey/sankey.html"
            class="w-full h-[680px] border-none rounded-lg"
            title="Lung Cancer Sankey Diagram"
          ></iframe>
        </div>

        <!-- Explanation Panel -->
        <div class="lg:w-1/3 w-full bg-white rounded-2xl shadow-xl p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span class="w-6 h-6 bg-purple-400 rounded-full mr-3"></span>
            How to Read the Diagram
          </h2>

          <div class="space-y-6 text-gray-700">
            <p>
              The
              <strong class="text-purple-500">Sankey Diagram</strong> visualizes
              the relationship between <strong>age</strong>,
              <strong>symptoms</strong>, and
              <strong>lung cancer probability</strong>. On the left side of the
              diagram, age groups and symptoms are represented. They connect to
              each other through flow lines.
            </p>

            <p>
              These <strong class="text-purple-500">flows</strong> indicate
              symptom prevalence across ages, while the
              <strong class="text-purple-600">intersections</strong> show the
              probability of lung cancer based on combinations of factors.
            </p>

            <div>
              <h3 class="font-semibold text-lg mb-2">Interactive Features:</h3>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span
                    class="inline-block w-4 h-4 bg-[#9370DB] rounded-sm mr-2 mt-1"
                  ></span>
                  <span
                    >Clicking a flow line filters the data to show detailed
                    probabilities</span
                  >
                </li>
              </ul>
            </div>

            <!-- <div
              class="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r"
            >
              <p class="italic">
                <strong>Example:</strong> An individual aged 45–55 who smokes
                and has allergies may have a lung cancer probability ranging
                from <strong>50% to 80%</strong>.
              </p>
            </div> -->

            <div>
              <h3 class="text-purple-500 font-bold text-lg mb-2">Insights:</h3>
              <ul class="text-left list-disc pl-5 space-y-2">
                <li>
                  Explore how different symptoms are distributed across age
                  groups
                </li>
                <li>Identify high-risk symptom combinations</li>
                <li>Gain better understanding of conditional probabilities</li>
              </ul>
            </div>
            <!-- Utility Section: Why this Sankey diagram is useful -->
            <div>
              <h3 class="font-semibold text-lg mb-2 mt-4 text-gray-700">Why is it useful?</h3>
              <p class="text-left text-gray-700">
                This Sankey diagram enables researchers and practitioners to:
              </p>
              <ul class="text-left list-disc pl-5 space-y-2 mt-2 text-gray-700">
                <li>Understand how age and symptoms combine to influence risk</li>
                <li>Identify symptom paths leading to higher probabilities of lung cancer</li>
                <li>Focus attention on the most impactful health patterns for early intervention</li>
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
