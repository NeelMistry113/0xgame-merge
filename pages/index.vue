<template>
  <div :class="[' bg-black text-white', $style.container]">
    <div :class="['z-10 relative', $style.heroBg]">
      <master-header />

      <hero-header />
    </div>

    <hr class="border-gray-800" />

    <tabs :options="{ useUrlFragment: false }">
      <tab name="Open">
        <div class="grid gap-7 container">
          <card v-for="(item, index) in 4" :key="index" :open="true" />
          <!-- <loading-card v-for="(item, index) in 4" :key="index" /> -->
        </div>

        <!-- card called from smart contract -->
          <div
              v-if="poolsAddresses.length"
              class="grid grid-cols-3 gap-6 container mx-auto"
            >
              <card
                v-for="(address, index) in poolsAddresses"
                :address="address"
                :pool-registry-contract-instance="poolRegistryContractInstance"
                :key="index"
              />
          </div>
        <!-- card call -->


        <div class="flex justify-center mt-10">
          <button type="button" class="btn btn-secondary btn-lg">
            Load more
          </button>
        </div>
      </tab>
      <tab name="Pending">
        <div class="grid gap-7 container">
          <card />
          <!-- <loading-card v-for="(item, index) in 4" :key="index" /> -->
        </div>
        <div class="flex justify-center mt-10">
          <button type="button" class="btn btn-secondary btn-lg">
            Load more
          </button>
        </div>
      </tab>
      <tab name="Resolved">
        <div class="grid gap-7 container">
          <card v-for="(item, index) in 4" :key="index" :resolved="true" />
          <!-- <loading-card v-for="(item, index) in 4" :key="index" /> -->
        </div>
        <div class="flex justify-center mt-10">
          <button type="button" class="btn btn-secondary btn-lg">
            Load more
          </button>
        </div>
      </tab>
      <tab name="My Bets">
        <div
          class="grid grid-cols-3 container md:grid-cols-3 sm:grid-cols-1 gap-7 md:gap-5 sm:gap-5 mb-10 md:mb-8 sm:mb-8"
        >
          <statistics v-for="item in 3" :key="item" />
        </div>

        <div class="grid gap-7 container">
          <card v-for="(item, index) in 4" :key="index" :my-bets="true" />
          <!-- <loading-card v-for="(item, index) in 4" :key="index" /> -->
        </div>
        <div class="flex justify-center mt-10">
          <button type="button" class="btn btn-secondary btn-lg">
            Load more
          </button>
        </div></tab
      >
    </tabs>
    <footer-large class="mt-13" />
  </div>
</template>

<script>
import PoolRegistryABI from "@/contracts/PoolRegistry.json";

import Web3 from "web3";

import { Tabs, Tab } from "vue-tabs-component";
import MasterHeader from "@/components/common/Header";
import HeroHeader from "@/components/home/HeroHeader";
import LoadingCard from "@/components/skeletons/Card";
import Card from "@/components/common/Card";
import Statistics from "@/components/home/Statistics";
import FooterLarge from "@/components/common/Footer";

export default {
  components: {
    Tabs,
    Tab,
    MasterHeader,
    Statistics,
    HeroHeader,
    LoadingCard,
    Card,
    FooterLarge,
  },

  head: {
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=La+Belle+Aurore&display=swap",
      },
    ],
  },

  data() {
    return {
      poolRegistryContractInstance: null,
      poolsAddresses: [],

      isLoading: false,
    };
  },

  async mounted() {
    this.isLoading = true;
    //  Init Metamask
    // Message from neel--> // This metamask Init code is not required here, becuse inside components/common/Header.vue metamsk init function run on btn click event for conect the metamsk//
    // if (window.ethereum) {
    //   window.web3 = new Web3(window.ethereum);
    //   await window.ethereum.enable();
    // } else if (window.web3) {
    //   window.web3 = new Web3(window.web3.currentProvider);
    // } else {
    //   window.alert(
    //     "Non-Ethereum browser detected. You should consider trying MetaMask!"
    //   );
    // }

    // Init User
    const Web3 = require('web3');
    const web3 = new Web3(window.ethereum);
    if (!this.isLoggedIn) {
      const accounts = await web3.eth.getAccounts();
      this.$store.commit("user/setUser", accounts[0]);
    }

    // Load Contract
    this.poolRegistryContractInstance = new web3.eth.Contract(
      PoolRegistryABI.abi,
      // process.env.NUXT_ENV_CONTRACT_ADDRESS
      "0x702D53A1039b2D44Bdb91ff757c7EFB4e5cD8bC9"
    );

    // Load ative pools
    const page = 1;
    const perPage = 10;

    this.poolsAddresses = await this.poolRegistryContractInstance.methods
      .getPoolsPaginatedReverse(page, perPage)
      .call();

    this.isLoading = false;
  },  
};
</script>

<style lang="scss" module>
@import "../assets/scss/components/_customTabs.scss";

.container {
  .heroBg {
    background-image: url("~assets/images/hero-bg.png");
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>
