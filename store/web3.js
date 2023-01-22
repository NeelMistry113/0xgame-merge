import {ethers} from 'ethers';

const web3 = {
    namespaced: true,
    state: () => ({
        web3: {
            networkId: null,
            coinbase: null,
            balance: null
        },
    }),
    getters: {
        getInstance: (state) =>{
            return state.web3
        },
    },

    mutations: {
        registerWeb3Instance(state, payload) {
            console.log('registerWeb3instance Mutation being executed', payload)
            let result = payload
            let web3Copy = state.web3
            web3Copy.coinbase = (result.coinbase.slice(0,5))+'...'+(result.coinbase.slice(38))
            web3Copy.networkId = result.networkId
            web3Copy.balance = ethers.utils.formatEther(result.balance).slice(0,8)
            // web3Copy.balance = parseInt(ethers.utils.formatEther(result.balance,))
            state.web3 = web3Copy
        },
    },
    actions: {

    }
}

    export default web3
  