<template>
  <div class="sm:w-full">
    <!-- class="grid grid-flow-col sm:w-full gap-6 sm:gap-4" -->
    <!-- <button
      class="bg-primary-500/[0.05] hover:bg-primary-500/[0.1] border border-primary-900 rounded-lg text-left min-w-[200px] sm:min-w-0 p-5"
      @click="$refs.waitlist.openModal()"
    >
      <div class="h4 sm:text-xl mb-6 sm:mb-4">Yes</div>
      <div class="body-xs flex sm:block justify-between items-center">
        <div>323 MATIC</div>
        <div>ROI 1.5x</div>
      </div>
    </button>
    <button
      class="bg-primary-500/[0.05] hover:bg-primary-500/[0.1] border border-primary-900 rounded-lg text-left min-w-[200px] sm:min-w-0 p-5"
    >
      <div class="h4 sm:text-xl mb-6 sm:mb-4">No</div>
      <div class="body-xs flex sm:block justify-between items-center">
        <div>323 MATIC</div>
        <div>ROI 1.5x</div>
      </div>
    </button> -->

    <confirm-vote />
  </div>
</template>

<script>
import ConfirmVote from "@/components/modals/ConfirmVote";

export default {
  components: {
    ConfirmVote,
  },
};
</script>
