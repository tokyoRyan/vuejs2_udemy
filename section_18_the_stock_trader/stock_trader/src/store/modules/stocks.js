export default {
  namespaced: true,
  state: () => ({
    funds: 0,
  }),
  getters: {
    funds: (state) => {
      return state.funds;
    },
  },
  mutations: {
    SET_FUNDS: (state, funds) => {
      state.funds = funds;
    },
  },
  actions: {
    initStore: ({ commit }) => {
      console.log("inside of stocks.initStore()");
      commit("SET_FUNDS", 42);
    },
  },
};
