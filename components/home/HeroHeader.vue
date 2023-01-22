<template>
  <div
    :class="[
      'container flex justify-center items-center pt-14 sm:py-12 pb-[124px]',
      $style.container,
    ]"
  >
    <div class="text-center">
      <h2 class="max-w-[681px] sm:max-w-full mx-auto sm:text-3xl leading-4">
        Web 3 Decentralized Sport
        <span :class="['text-primary-500 font-normal', $style.bet]"
          >Betting</span
        >
        platform
      </h2>
      <p class="label-lg mt-7 sm:mt-5">
        <span class="opacity-40">Building on</span> <span>Polygon</span>
      </p>
    </div>

    <img
      src="@/assets/images/bull.png"
      alt="bull"
      width="350"
      height="350"
      class="object-contain absolute left-0 bottom-0 mix-blend-luminosity lg:hidden md:hidden sm:hidden"
    />
    <img
      src="@/assets/images/bull.png"
      alt="bull"
      width="350"
      height="350"
      :class="[
        'object-contain absolute right-0 bottom-0 mix-blend-luminosity lg:hidden md:hidden sm:hidden',
        $style.bull,
      ]"
    />
  </div>
</template>

<style lang="scss" module>
.container {
  // &:before {
  //   @apply absolute left-0 top-0 w-full h-screen;
  //   content: "";
  //   background-image: url("@/assets/images/noise.png");
  //   background-size: cover;
  //   background-position: center;
  //   z-index: 1;
  // }
  // &:after {
  //   @apply absolute left-0 top-0 w-full h-full;
  //   z-index: -1;
  //   content: "";
  //   background-image: url("~assets/images/pattern.png");
  //   background-size: cover;
  //   background-position: center;
  // }
  .bull {
    transform: matrix(-1, 0, 0, 1, 0, 0);
  }

  .bet {
    font-family: "La Belle Aurore", cursive;
  }
}
</style>
