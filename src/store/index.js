import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
  }
})
