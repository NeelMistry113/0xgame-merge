export default {
    computed: {
      isLoggedIn() {
        return !!this.$store.state.user.address;
      },
      isAdmin() {
        return (
          this.isLoggedIn &&
          // this.$store.state.user.address === process.env.NUXT_ENV_DEPLOYER_ADDRESS
          this.$store.state.user.address === "0xbE9489B9a6F031c299bb98925d656964C8fF4618"
        );
      },
    },
  };
  