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
        const countryData = data.map((item, index) => ({...item, id: index}))
        commit('setPaises', countryData)
      } catch (error) {
        console.log(error)
      }
    },
    filtrarRegion({ commit, state }, region) {
      const filtro = state.paises.filter(pais => pais.region.includes(region))
      commit('setPaisesFiltrados', filtro)
    },
    filtroNombre({ commit, state }, texto) {
      const textoCliente = texto.toLowerCase()
      const filtro = state.paises.filter(pais => {
        const textoApi = pais.name.official.toLowerCase()
        if (textoApi.includes(textoCliente)) {
          return pais
        }
      })
      commit('setPaisesFiltrados', filtro)
    },
  },
  getters: {
    topPaisesPobalcion(state) {
      return state.paisesFiltrados.sort((a, b) => 
        a.area < b.area ? 1 : -1
      )
    }
  },
  modules: {
  }
})
