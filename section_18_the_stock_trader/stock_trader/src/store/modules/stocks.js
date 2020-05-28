import stocksData from '../../data/stocks'

export default {
  namespaced: true,
  state: () => ({
    stocks: [],
  }),
  mutations: {
    SET_STOCKS(state, stocks) {
      state.stocks = stocks
    },
    RND_STOCKS(state) {
      state.stocks.forEach(stock => {
        stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
      })
    },
  },
  getters: {
    stocks: state => {
      return state.stocks
    },
  },
  actions: {
    buyStock({ commit }, order) {
      commit('portfolio/BUY_STOCK', order, { root: true })
    },
    initStocks({ commit }) {
      commit('SET_STOCKS', stocksData)
    },
    randomizeStocks({ commit }) {
      commit('RND_STOCKS')
    },
  },
}
