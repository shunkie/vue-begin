import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions
  })
}
