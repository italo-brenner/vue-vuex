import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contador: 0,
    tarefas: []
  },
  getters: {
    tarefasConcluidas: state => state.tarefas.filter(t => t.concluido),
    tarefasAFazer: state => state.tarefas.filter(t => ! t.concluido),
    totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
    buscarTarefaPorId: state => (id) =>  state.tarefas.find(t => t.id === id)
  },
  mutations: {
    listarTarefas: (state, { tarefas }) => {
      state.tarefas = tarefas
    }
  },
  actions: {
    listarTarefas: ({ commit }, payload) => {
      setTimeout(() => {
        commit('listarTarefas', payload)
      }, 2000)
    }
  }
})