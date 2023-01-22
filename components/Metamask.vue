<template>
    <div
        @click="$emit('connect')">
        Connect Metamask
    </div>
</template>

<script>
export default {
  name: 'Metamask',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
</style>

<!-- src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg" alt="Metamask" -->
<!-- class=" flex flex-row justify-center items-center p-3 border-2 text-blue-600 border-blue-600 font-bold hover:text-white hover:bg-blue-600"> -->