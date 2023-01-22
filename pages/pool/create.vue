<template>
    <div class="bg-[#18181B] text-white p-5 container mx-auto mt-24 rounded-lg">

      <master-header />

      <h1 class="mb-3">Create New Pool</h1>
      <form @submit.prevent="OnSubmit">
        <input
          type="text"
          v-model="form.question"
          class="text-black"
          placeholder="Question?"
        />
        <input
          type="text"
          v-model="form.description"
          class="text-black"
          placeholder="Description"
        />
        <input
          type="text"
          v-model="form.note"
          class="text-black"
          placeholder="Note"
        />
  
        <button class="m-2" type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import PoolRegistryABI from "@/contracts/PoolRegistry.json";
  import MasterHeader from "@/components/common/Header";
  
  // import Web3 from "web3";
  
  export default {
    components: {
      MasterHeader
    },
    data() {
      return {
        form: {
          question: null,
          description: null,
          note: null,
        },
      };
    },
  
    async mounted() {
      this.isLoading = true;
  
      // load blockchain data
      const Web3 = require('web3');
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      this.account = accounts[0];
  
      // Contract
      const poolRegistry = new web3.eth.Contract(
        PoolRegistryABI.abi,
        // process.env.NUXT_ENV_CONTRACT_ADDRESS
        "0x702D53A1039b2D44Bdb91ff757c7EFB4e5cD8bC9"
      );
      console.log(poolRegistry);
      this.poolRegistry = poolRegistry;
      this.isLoading = false;
    },
  
    methods: {
      async OnSubmit() {
        const res = await this.poolRegistry.methods
          .createPool(
            this.form.question,
            this.form.description,
            this.form.description
          )
          .send({ from: this.account });
        console.log(res,"Neel");
      },
    },
  };
  </script>
  