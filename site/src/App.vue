<template>
  <div class="bg-gray-100 min-h-screen text-gray-900">
    <!-- Navbar -->
    <nav class="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <!-- Home Button with Icon -->
      <router-link to="/" class="flex items-center space-x-2 text-white text-lg font-semibold hover:text-gray-400">
        <span class="text-2xl">🏠︎</span> 
        <span class="hidden sm:inline">Home</span>
      </router-link>

      <!-- Visualization Buttons -->
      <div class="flex space-x-4">
        <router-link to="/visualizations/1" class="px-4 py-2 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-500 transition-all shadow-md">Vis 1</router-link>
        <router-link to="/visualizations/2" class="px-4 py-2 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-500 transition-all shadow-md">Vis 2</router-link>
        <router-link to="/visualizations/3" class="px-4 py-2 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-500 transition-all shadow-md">Vis 3</router-link>
        <router-link to="/visualizations/4" class="px-4 py-2 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-500 transition-all shadow-md">Vis 4</router-link>
        <router-link to="/visualizations/5" class="px-4 py-2 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-500 transition-all shadow-md">Vis 5</router-link>
        <router-link to="/visualizations/6" class="px-4 py-2 bg-gray-700 rounded-lg text-white font-medium hover:bg-gray-500 transition-all shadow-md">Vis 6</router-link>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mx-auto p-6 text-center">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white text-center p-4 mt-10">
      &copy; {{ new Date().getFullYear() }} Lung Cancer Visualization
    </footer>
  </div>
</template>
