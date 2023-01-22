export const state = () => ({
  address: null,
});

export const mutations = {
  setUser(state, value) {
    state.address = value;
  },
};
