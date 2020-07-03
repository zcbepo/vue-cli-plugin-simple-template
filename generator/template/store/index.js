import Vue from 'vue'
import Vuex from 'vuex'
import fakeMenus from '../utils/mock'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: []
  },
  mutations: {
    GET_MENU(state, menus) {
      state.menus = menus
    }
  },
  actions: {
    getMenus(context) {
      context.commit('GET_MENU', fakeMenus)
    }
  },
  modules: {
  }
})
