<template>
  <transition name="fade">
    <div class="modal" v-if="show">
      <div class="modal__backdrop" @click="closeModal()" />

      <div class="modal__wrapper">
        <div class="modal__dialog">
          <div class="modal__header">
            <slot name="header" />
            <button type="button" class="modal__close " @click="closeModal()">
              <img
                src="@/assets/icons/solid-cross.svg"
                alt="close"
                width="24"
                height="24"
                class="object-contain"
              />
            </button>
          </div>

          <div class="modal__body">
            <slot name="body" />
          </div>

          <div class="modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.show = false;
      this.$emit("hidden");
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal() {
      this.show = true;
      this.$emit("shown");
      document.querySelector("body").classList.add("overflow-hidden");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  @apply fixed top-0 right-0 bottom-0 left-0 flex justify-center z-50 overflow-x-hidden overflow-y-auto h-full;

  &__wrapper {
    @apply flex items-center overflow-x-hidden overflow-y-auto rounded-2xl;
  }

  &__backdrop {
    @apply fixed top-0 right-0 bottom-0 left-0 z-40;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(15px);
  }

  &__dialog {
    @apply relative max-w-5xl rounded-2xl mx-auto flex items-center flex-col z-50;
    max-height: calc(100vh - 64px);
    background: #18181b;
  }

  &__header {
    @apply w-full;
  }

  // &__body {
  //   @apply p-5;
  // }

  &__close {
    @apply absolute top-5 right-5;
  }

  // &__footer {
  //   @apply flex;
  // }
}

// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.2s;
// }
// .fade-enter,
// .fade-leave-to {
//   opacity: 0;
// }
</style>
