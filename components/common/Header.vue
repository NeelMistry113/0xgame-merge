<template>
  <header
    :class="[
      'container py-7 flex justify-between items-center',
      $style.container,
    ]"
  >
    <img
      src="@/assets/brand/logo.svg"
      alt="0xgames"
      width="168"
      height="44"
      class="object-contain sm:h-9"
    />

    <div class="flex items-center">
      <a
        href="#"
        class="body-md mr-7 sm:hidden block"
        rel="nofollow noopner"
        target="_blank"
        >Faq</a
      >
      <button slot="trigger" class="btn btn-primary mr-6" >
        <Metamask @connect="initWeb3" />
        <!-- <span class="sm:hidden">Connect Wallet</span> -->
        <!-- <span class="hidden sm:block">Connect</span> -->
      </button>


      <!-- Neel new -->
        <button
          v-if="isAdmin"
          class=" btn btn-primary inline-flex items-center bg-[#E1FC68] text-black border-0 mr-4 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0"
          @click="onCreate"
        >
          Add New Pool
        </button>
      <!-- Neel new -->
      <dropdown-menu>
        <a
          slot="trigger"
          href="#"
          class="flex items-center bg-black border overflow-hidden border-gray-800 rounded-lg"
        >
          <div class="flex items-center p-4 bg-gray-900 sm:hidden">
            <span class="mr-3 body-sm">{{web3.balance}}</span>
            <img
              src="@/assets/icons/matic.png"
              alt="matic"
              class="object-contain"
              width="20"
              height="20"
            />
          </div>
          <div class="p-4 body-sm">Account: {{web3.coinbase}}</div>
        </a>
        <ul slot="body">
          <li class="flex w-full">
            <a
              href="#"
              class="py-[6px] px-3 bg-gray-900 body-sm hover:bg-gray-800 rounded-md w-full"
              target="_blank"
              rel="nofollow noopner"
            >
              <span class="sm:hidden">View on polyscan</span>
              <span class="hidden sm:block">polyscan</span>
            </a>
          </li>
          <li class="hidden w-full sm:flex">
            <a
              href="#"
              class="py-[6px] px-3 bg-gray-900 body-sm hover:bg-gray-800 rounded-md w-full"
              target="_blank"
              rel="nofollow noopner"
            >
              Faq
            </a>
          </li>
          <li class="flex w-full">
            <a
              href="/"
              class="py-[6px] px-3 bg-gray-900 body-sm text-error-500 hover:bg-gray-800 rounded-md w-full"
            >
              Disconnect
            </a>  
          </li>
        </ul>
      </dropdown-menu>


    </div>
  </header>
</template>

<script>
import DropdownMenu from "v-dropdown-menu";
import Web3 from 'web3'
import AuthMixin from "@/components/mixins/auth";

import { mapGetters, mapMutations } from 'vuex'

export default {
  mixins: [AuthMixin],

  components: {
    DropdownMenu,
  },
  data () {
    return{
      errorMessage: '',
      login: false
    }
  },

  computed: {
    ...mapGetters('web3', ['getInstance']),
    web3 () {
      return this.getInstance
    }
  },

  methods: {
    ...mapMutations('web3', ['registerWeb3Instance']),
    async initWeb3 () {

      // chechk for web3 provider
      if (typeof window.ethereum !== 'undefined') {
        try {
          // Ask to connect
          await window.ethereum.send('eth_requestAccounts');
          const instance = new Web3(window.ethereum)

          // const chainID = 8001; 

          // Get necessary info on your node
           const networkId = await instance.eth.net.getId();
           const coinbase = await instance.eth.getCoinbase();
           const balance =  await instance.eth.getBalance(coinbase);

          //  Save it to store
          this.registerWeb3Instance({
              networkId,
              coinbase,
              balance
            });
            this.errorMessage = '';
        } catch (error) {
          // user denied accounts  aceest

          
          console.error( 'user denied web3 access', error);
          window.alert("User denie to connect Metamask Wallet! Reconnect the Metamsk Wallet.")
          this.errorMessage = 'Please connect to your Ethereum address on Metamask before connecting to this website';
          return;
        }
      }
      // No web3 Provider
      else {
        console.log("error");
        console.error('No Web3 provider detected');
        this.errorMessage = "No web3 provider detected. Did you install the Metamask extension on this browser?";
        return;
      }
    },

    async desconectWeb3 () {

      if(initWeb3.close) {
        await initWeb3.close();
        
        await initWeb3.clearCachedProvider();
        initWeb3 = null
      }
      console.log("desconected")
    },

    onCreate() {
      this.$router.push({ name: "pool-create" });
    },

    // login: true,

  }
};
</script>

<style lang="scss" module>
.container {
  :global {
    .v-dropdown-menu__container {
      @apply bg-gray-900 border-gray-800 rounded-lg mt-3 min-w-max sm:min-w-0 p-3 w-full;
    }
  }
}
</style>
