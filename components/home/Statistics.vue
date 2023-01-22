<template>
  <div
    :class="[
      'border border-gray-700 rounded-2xl md:rounded-lg sm:rounded-lg flex flex-col p-10 md:p-5 sm:p-5 justify-center items-center',
      $style.container,
    ]"
  >
    <h3 class="h2 md:text-2xl sm:text-2xl">20</h3>
    <div class="label-xl mt-2 md:text-lg sm:text-base font-normal opacity-70">
      Bets Played
    </div>
  </div>
</template>

<style lang="scss" module>
.container {
  background: linear-gradient(180deg, #27272a -26.88%, #000000 100%);
}
</style>
