import stocksData from '../../data/stocks'

export default {
  namespaced: true,
  state: () => ({
    stocks: 0,
  }),
  getters: {
    stocks: state => {
      return state.stocks
    },
  },
  mutations: {
    SET_STOCKS(state, stocks) {
      state.stocks = stocks
    },
    RND_STOCKS() {},
  },
  actions: {
    // eslint-disable-next-line no-unused-vars
    buyStock({ commit }, order) {
      commit()
    },
    initStocks({ commit }) {
      commit('SET_STOCKS', stocksData)
    },
    randomizeStocks({ commit }) {
      commit('RND_STOCKS')
    },
  },
}
