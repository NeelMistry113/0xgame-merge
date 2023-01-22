<template>
    <div class="bg-black text-white">
      <master-header />
  
      <h1 v-if="isLoading">Loading....</h1>
      <div
        v-else
        class="bg-[#18181B] text-white p-5 container mx-auto mt-24 rounded-lg"
      >
        <div class="flex justify-between">
          <img
            alt="team"
            class="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="https://wallpaperaccess.com/full/3746298.jpg"
          />
        </div>
        <h4 class="text-2xl font-bold mt-5">
          <strong>Question: </strong> {{ question }}
        </h4>
        <div class="text-lg text-gray-400 mt-1">
          <strong>Description: </strong> {{ description }}
        </div>
        <div class="text-lg text-gray-400 mt-1">
          <strong>Note: </strong> {{ note }}
        </div>
        <div class="text-base text-gray-400 mt-5 flex">
          <span v-if="createdAt" class="mr-3"
            ><strong>Created at:</strong> {{ humanReadableDate(createdAt) }}</span
          >
          <span v-if="publishedAt" class="mr-3"
            ><strong>Published at:</strong>
            {{ humanReadableDate(publishedAt) }}</span
          >
          <span v-if="resolvedAt" class="mr-3"
            ><strong>Resolved at:</strong>
            {{ humanReadableDate(resolvedAt) }}</span
          >
        </div>
  
        <div v-if="status === 'LIVE'" class="flex mt-10">
          <button
            class="inline-flex mr-5 items-center bg-[#14B8A6] text-white border-0 py-3 px-8 focus:outline-none rounded-full text-base mt-4 md:mt-0"
            type="button"
            @click="bet('YES')"
          >
            <strong class="mr-2">Yes</strong> 1 Matic
          </button>
          <button
            class="inline-flex items-center bg-[#EF4444] text-white border-0 py-3 px-8 focus:outline-none rounded-full text-base mt-4 md:mt-0"
            type="button"
            @click="bet('NO')"
          >
            <strong class="mr-2">NO</strong> 1 Matic
          </button>
        </div>
        <div v-else><strong class="mr-2">Status:</strong> DRAFT</div>
      </div>
  
      <div
        v-if="isAdmin"
        class="bg-[#18181B] text-white p-5 container mx-auto mt-24 rounded-lg"
      >
        <button
          class="inline-flex items-center bg-[#EF4444] text-white border-0 py-3 px-8 focus:outline-none rounded-full text-base mt-4 md:mt-0"
          type="button"
          @click="publish"
        >
          Publish
        </button>
        <button
          class="inline-flex items-center bg-[#EF4444] text-white border-0 py-3 px-8 focus:outline-none rounded-full text-base mt-4 md:mt-0"
          type="button"
        >
          Resolve
        </button>
        <button
          class="inline-flex items-center bg-[#EF4444] text-white border-0 py-3 px-8 focus:outline-none rounded-full text-base mt-4 md:mt-0"
          type="button"
        >
          Cancel
        </button>
      </div>
  
      <div
        v-if="bets.length"
        class="bg-[#18181B] text-white p-5 container mx-auto mt-24 rounded-lg"
      >
        <h1 v-if="balance" class="mb-5">
          <strong>Pool balance:</strong> {{ balance }}
        </h1>
        <table>
          <tr>
            <th>Answer</th>
            <th>Bet Amount</th>
            <th>Bet placed at</th>
            <th>Status</th>
          </tr>
          <tr v-for="(bet, index) in bets" :key="index">
            <td>{{ humanReadableAnswerStatus(bet.answer) }}</td>
            <td>{{ bet.value }}</td>
            <td>{{ humanReadableDate(bet.created_at) }}</td>
            <td>{{ humanReadableBetStatus(bet.status) }}</td>
          </tr>
        </table>
      </div>
  
      <master-footer class="mt-24" />
    </div>
  </template>
  
  <script>
  import { format } from "date-fns";
  
  import MasterHeader from "@/components/common/Header";
  import MasterFooter from "@/components/common/Footer";
  
  import AuthMixin from "@/components/mixins/auth";
  
  import PoolABI from "@/contracts/Pool.json";
  import PoolRegistryABI from "@/contracts/PoolRegistry.json";
  
  import Web3 from "web3";
  
  const POOL_ENUMS = ["DRAFT", "LIVE", "RESOLVING", "RESOLVED", "CANCELED"];
  const ANSWER_ENUMS = ["NO", "YES"];
  const BETSTATUSES_ENUMS = ["PROCESSING", "CONFRIMED", "CANCELED"];
  
  export default {
    components: {
      MasterHeader,
      MasterFooter,
    },
  
    data() {
      return {
        status: null,
        question: null,
        description: null,
        note: null,
        createdAt: null,
        publishedAt: null,
        resolvedAt: null,
        balance: null,
  
        poolRegistryContractInstance: null,
        poolContractInstance: null,
  
        bets: [],
        isLoading: false,

        // addressa: "0x702D53A1039b2D44Bdb91ff757c7EFB4e5cD8bC9",
      };
    },
  
    mixins: [AuthMixin],
  
    async mounted() {
      this.isLoading = true;
  
      // getAccounnt for metamsk provider
      const Web3 = require('web3');
      const web3 = new Web3(window.ethereum);
      if (!this.isLoggedIn) {
        const accounts = await web3.eth.getAccounts();
        this.$store.commit("user/setUser", accounts[0]);
      }
  
      // Load Pool Registry Contract
      this.poolRegistryContractInstance = new web3.eth.Contract(
        PoolRegistryABI.abi,
        // process.env.NUXT_ENV_CONTRACT_ADDRESS
        "0x702D53A1039b2D44Bdb91ff757c7EFB4e5cD8bC9"
      );
  
      const res = await this.poolRegistryContractInstance.methods
        .getPoolByAddress(this.$route.params.slug)
        .call();
      this.question = res.question;
      this.description = res.description;
      this.note = res.note;
      this.status = POOL_ENUMS[parseInt(res.status)];
      this.createdAt = parseInt(res._created_at);
      this.publishedAt = parseInt(res.published_at);
      this.resolvedAt = parseInt(res.resolved_at);
      this.balance = parseInt(res.balance);
  
      // Load Pool Contract & and get bets
      this.poolContractInstance = new web3.eth.Contract(
        PoolABI.abi,
        // "0x702D53A1039b2D44Bdb91ff757c7EFB4e5cD8bC9"
        this.$route.params.slug
      );
      this.bets = await this.poolContractInstance.methods
        .getBetsPaginatedReverse(1, 3)
        .call();
      this.isLoading = false;
    },
  
    methods: {
      async bet(answer) {
        try {
          const ans = answer === "YES" ? 1 : 0;
          const res = await this.poolContractInstance.methods.bet(ans).send({
            from: this.$store.state.user.address,
            value: 20000000000000000,
          });
          console.log(res);
        } catch (e) {
          console.log(e);
        }
      },
  
      async publish() {
        const res = await this.poolRegistryContractInstance.methods
          .publishPoolByAddress(this.$route.params.slug)
          .send({ from: this.$store.state.user.address });
      },
  
      humanReadableDate(date) {
        return format(new Date(date * 1000), "MMMM d, yyyy");
      },
  
      humanReadableBetStatus(index) {
        return BETSTATUSES_ENUMS[parseInt(index)];
      },
  
      humanReadableAnswerStatus(index) {
        return ANSWER_ENUMS[parseInt(index)];
      },
    },
  };
  </script>
  
  <style scoped>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td,
  th {
    border: 1px solid #262626;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #1b1b1b;
  }
  </style>
  

