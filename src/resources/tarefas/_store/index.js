import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  tarefas: []
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}