<template>
  <!-- remove class this is just for demo -->
  <div
    :class="['grid grid-flow-col sm:w-full gap-6 sm:gap-4 ', $style.container]" 
  >
    <button
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
      @click="$refs.waitlist.openModal()"
    >
      <div class="h4 sm:text-xl mb-6 sm:mb-4">No</div>
      <div class="body-xs flex sm:block justify-between items-center">
        <div>323 MATIC</div>
        <div>ROI 1.5x</div>
      </div>
    </button>
    <modal ref="waitlist" class="sm:px-6">
      <template v-if="true" v-slot:header>
        <div
          class="w-full flex justify-between items-center py-5 px-7 bg-gray-800/[0.4]"
        >
          <h6 class="label-lg">Confirm Tranaction</h6>
        </div>
      </template>
      <template v-if="true" v-slot:body>
        <div class="pt-6 px-7 pb-7">
          <label for="" class="body-sm flex justify-between items-center">
            <span>Bet Amount</span>
            <span class="text-error-500">Min 1 matic</span>
          </label>
          <div class="relative mt-3">
            <input
              type="text"
              placeholder="Amount..."
              class="pl-5 pr-14 py-4 text-lg font-semibold bg-gray-900 border border-gray-700 outline-none shadow-none focus:border-gray-600 w-full rounded-md"
            />
            <div
              class="flex items-center absolute right-7 top-0 bottom-0 my-auto"
            >
              <img
                src="@/assets/icons/matic.png"
                alt="matic"
                width="20"
                height="20"
                class="object-contain"
              />
              <span class="label-md ml-[6px]">Matic</span>
            </div>
          </div>
          <ul class="mt-5 grid gap-4">
            <li class="flex items-center">
              <span class="text-gray-500">Predection</span>
              <hr class="border-gray-700 border-dashed flex-grow mx-3" />
              <span class="text-primary-500 font-semibold">Yes</span>
            </li>
            <li class="flex items-center">
              <span class="text-gray-500">Poll Value</span>
              <hr class="border-gray-700 border-dashed flex-grow mx-3" />
              <span class="text-white font-semibold">300 Matic</span>
            </li>
          </ul>
          <button class="btn btn-primary btn-lg w-full mt-7">
            Confirm Transaction
          </button>
          <!-- <button class="btn btn-secondary btn-lg w-full mt-7">
            Switch to polygon netwrok
          </button> -->
        </div>
      </template>
      <template v-else v-slot:body>
        <div class="p-10 flex flex-col items-center text-center">
          <img
            src="@/assets/images/success.png"
            alt="success"
            width="120"
            height="120"
            class="object-contain"
          />
          <h5 class="mt-5">You have made a Bet</h5>
          <div class="mt-2 label-md text-gray-500">
            check your claims when the bet is over here 👇🏻
          </div>
          <button class="btn btn-primary my-6">Show my Bets</button>
          <a
            href="#"
            class="block text-[#0083B4] text-center text-md"
            target="_blank"
            rel="nofollow noopner"
            >Follow @0xgames_ on Twitter</a
          >
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/modals/Modal";

export default {
  components: {
    Modal,
  },
};
</script>

<style lang="scss" module>
.container {
  :global {
    .modal__dialog {
      width: 414px;
      overflow: hidden;
    }

    .modal__body {
      @apply w-full;
    }

    .modal__close {
      @apply absolute top-6 right-6;
    }
  }
}
</style>
