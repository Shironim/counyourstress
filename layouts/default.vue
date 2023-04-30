<template>
  <div>
    <div class="max-w-screen-sm mx-auto border-2 h-screen">
      <div class="w-full shadow-md">
        <div class="flex justify-between mx-8 py-4">
          <h1 class="italic text-lg sm:text-2xl self-center font-bold">StressLevel</h1>
         <div class="flex">
          <div class="self-center mr-2 text-end">
            <p class="text-sm sm:text-lg">Hi,</p>
            <p class="text-sm sm:text-lg">Dimas Seto</p>
          </div>
          <div class="w-10 h-10 self-center rounded-full bg-fuchsia-500"></div> 
         </div>
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>