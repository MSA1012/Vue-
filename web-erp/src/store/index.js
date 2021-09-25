import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nav:[]
  },
  mutations: {
    SETNAV(state,data){
      state.nav = data;
    }
  },
  actions: {  //管理mutations
    SETNAV({commit},data){
      commit('SETNAV',data)
    }
  },
  modules: {
  }
})

