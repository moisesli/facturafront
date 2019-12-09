import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    usuario: false,
    plantilla: false
  },
  mutations: {
    generaPlantilla(state, plantilla) {
      state.plantilla = plantilla;
    },
    logearUsuario(state){
      state.usuario = true;
    },
    logoutUsuario(state){
      state.usuario = false;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
