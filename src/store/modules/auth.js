export default {
  namespaced: true,
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null
  }),
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    logout(state) {
      state.user = null
      state.token = null
      localStorage.removeItem('token')
    }
  },
  actions: {
    logout({ commit }) {
      commit('logout')
    }
  }
}
