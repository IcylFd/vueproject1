import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nowIndex:-1,
    listLength:0
  },
  mutations: {
    changeIndex(state,index){
      state.nowIndex = index;
    },
    changeLength(state,length) {
      state.listLength = length
    }
  },
  actions: {

  }
})
