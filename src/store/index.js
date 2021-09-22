import { createStore } from 'vuex'

export default createStore({
  state: {
    paises: [],
    paisesFiltrados: []
  },
  mutations: {
    setPaises(state, payload) {
      state.paises = payload
    },
    setPaisesFiltrados(state, payload) {
      state.paisesFiltrados = payload
    }
  },
  actions: {
    async getPaises({ commit }) {
      try {
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setPaises', data)
      } catch (error) {
        
      }
    }
  },
  getters: {
    topPaisesPobalcion(state) {
      return state.paises.sort((a, b) => 
        a.area < b.area ? 1 : -1
      )
    }
  },
  modules: {
  }
})
