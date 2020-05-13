export default {
  namespaced: true,
  state: {
    funds: 0
  },
  getters: {
    funds: state => {
      return state.funds
    }
  },
  actions: {
  },
  mutations: {
    SET_JOKES (state, jokes) {
      state.jokes = jokes
    },
    ADD_JOKE (state, joke) {
      state.jokes.jokes.push(joke)
      console.log('added', state.jokes)
    }
  }
}
