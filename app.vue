<script setup>
const darkMode = ref(false)
</script>
  
<template>
  <div :class="{'dark': darkMode}">
    <div class="min-h-full">
      <div class="bg-white dark:bg-dim-900">
        <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-10">
          <!-- Left Sidebar -->
          <div class="hidden md:block xs:col-span-1 xl:col-span-2">
            <div class="sticky top-0">
              <SidebarsLeft />
            </div>
          </div>
          <!-- End Left Sidebar -->

          <!-- Main Content -->
          <main class="col-span-12 bg-red-500 md:col-span-8 xl:col-span-6">
              <h1>Main Content</h1>
            </main>
          <!-- End Main Content -->


          <!-- Right Sidebar -->
          <div class="col-span-12 md:block xl:col-span-4 md:col-span-3 hidden">
            <div class="sticky top-0">
              <SidebarsRight />
            </div>
          </div>
          <!-- End Right Sidebar -->
        </div>
      </div>
    </div>
  </div>
</template>
  