<template>
  

  <nuxt-link
    :to="{ name: 'pool-slug', params: { slug: address } }"
    class="bg-[#18181B] text-white p-5 rounded-lg"
  >
  <div
    class="bg-gray-900/[.7] border border-gray-800 rounded-4xl md:rounded-2xl sm:rounded-2xl overflow-hidden"
  >
    <div class="px-8 md:px-6 sm:px-6 pt-8 md:pt-6 sm:pt-6 pb-9 md:pb-8 sm:pb-8">
      <div class="flex md:flex-wrap sm:flex-wrap justify-between">
        <div>
          <section class="mb-5 md:mb-3 sm:mb-3 flex items-center">
            <div class="py-[6px] mr-4 text-gray-300 flex items-center">
              <span class="capital mr-3">Ind vs Aus</span>
              <img
                src="@/assets/images/demo.svg"
                alt="demo"
                class="object-contain"
                width="32"
                height="20"
              />
            </div>
            <span class="capital text-gray-500">Published - 19 July 2022</span>
          </section>
          <h3
            class="h5 lg:text-xl md:text-lg sm:text-lg md:mb-7 sm:mb-6 font-semibold max-w-[676px] lg:max-w-[400px] flex-grow"
          >
            <!-- Will Mumbai indians can win their first match against Royal -->
            <!-- challenger bangalore? -->
            <!-- {{ question }} -->
          </h3>
        </div>
      

        <!-- Yes and no action -->
        <vote-actions v-if="open" />

        <!-- Claim reward action (resolved tab) -->
        <div
          v-if="resolved"
          class="text-center md:flex md:items-start md:justify-between md:text-left md:w-full sm:text-left sm:w-full"
        >
          <div class="label-xl">200 Matic</div>
          <button type="button" class="btn btn-primary btn-lg mt-4 sm:w-full">
            Claim Reward
          </button>
        </div>

        <div v-if="false">
          <span class="label-lg py-2 px-4 rounded-full bg-gray-800">
            200 Matic
          </span>
        </div>

        <!-- Result amount (mybets tab) -->
        <div v-if="myBets" class="text-center">
          <span class="label-lg block mb-3 py-2 px-4 rounded-full bg-success-500/[0.2]">
            Won 120 Matic
          </span>
          <span
            class="label-lg block mb-3 py-2 px-4 rounded-full bg-error-500/[0.2]"
          >
            Loss 120 Matic
          </span>
          <span class="label-md">
            Your BET is on
            <span class="text-primary-500">NO</span>
          </span>
        </div>
      </div>
    </div>
    <section
      class="px-8 md:px-6 sm:px-6 py-6 md:py-5 sm:py-5 flex md:flex-wrap sm:flex-wrap justify-between items-center bg-gray-900 rounded-b-4xl sm:rounded-xl"
    >
      <div class="text-gray-400 flex items-center">
        <span class="label-xs mr-5">
          <span class="mr-3 w-3 h-3 rounded-full inline-block bg-error-600" />
          <span>Ends in 03:09:54</span>
        </span>
        <span class="label-xs flex items-center mr-5 md:hidden sm:hidden">
          <img
            src="@/assets/icons/users.svg"
            alt="users"
            class="mr-3 object-contain"
            width="16"
            height="16"
          />
          <span>232 participants</span>
        </span>
        <a
          href="https://oxgames.co"
          class="label-xs flex items-center hover:text-white"
          aria-label="https://oxgames.co"
          data-balloon-pos="up"
        >
          <img
            src="@/assets/icons/secure.svg"
            alt="users"
            class="mr-3 object-contain"
            width="16"
            height="16"
          />
          <span>Source of truth</span>
        </a>
      </div>
      <div class="flex items-center">
        <span
          v-if="resolved || myBets"
          class="text-gray-400 label-sm mr-3 flex items-center sm:mt-5"
        >
          Resolved as:
          <span class="text-primary-500 uppercase ml-2">YES</span>
          <img
            src="@/assets/icons/solid-tick.svg"
            alt="tick"
            width="16"
            height="16"
            class="ml-2 object-contain"
          />
        </span>
        <span class="text-gray-400 label-sm sm:hidden"
          >Pool Size:
          <span class="text-primary-500 ml-2">20000 Matic</span></span
        >
      </div>
    </section>
  </div>

</nuxt-link>
</template>

<script>
import VoteActions from "@/components/common/VoteActions";

export default {
  components: {
    VoteActions,
  },

  props: {
    open: {
      type: Boolean,
      default: false,
    },
    pending: {
      type: Boolean,
      default: false,
    },
    resolved: {
      type: Boolean,
      default: false,
    },
    myBets: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      default: null,
    },
    poolRegistryContractInstance: {
      type: Object,
      default: () => {},
    },
  },

  // data() {
  //   return {
  //     question: null,
  //     description: null,
  //   };
  // },

  // async mounted() {
  //   const { question, description } =
  //     await this.poolRegistryContractInstance.methods
  //       .getPoolByAddress(this.address)
  //       .call();

  //   this.question = question;
  //   this.description = description;
  // },
};
</script>

<style lang="scss" module>
// @import "~balloon-css/src/balloon";
</style>
