import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, tasks){
      state.tasks.push(tasks);
    }
  },
  actions: {

  }
})
