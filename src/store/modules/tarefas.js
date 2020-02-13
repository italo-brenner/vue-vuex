const state = {
  tarefas: []
}

const getters = {
  tarefasConcluidas: (state) => state.tarefas.filter(t => t.concluido),
  tarefasAFazer: state => state.tarefas.filter(t => ! t.concluido),
  totalDeTarefasConcluidas: (state, getters) => getters.tarefasConcluidas.length,
  buscarTarefaPorId: state => (id) =>  state.tarefas.find(t => t.id === id),
  boasVindas: (state, getters, rootState, rootGetters) => rootGetters.mensagemBoasVindas
}

const mutations = {
  listarTarefas: (state, { tarefas }) => {
    state.tarefas = tarefas
  }
}

const actions = {
  buscarTarefas: (context, payload) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, titulo: 'Aprender Vue', concluido: true },
          { id: 2, titulo: 'Aprender Vue Router', concluido: true },
          { id: 3, titulo: 'Aprender Vuex', concluido: false }
        ])
      }, 2000)
    })
  },
  listarTarefas: async ({ commit, dispatch, state, rootState, getters, rootGetters }, payload) => {
    const tarefas = await dispatch('buscarTarefas')
    commit('listarTarefas', { tarefas })
    commit('logar', 'Plinio Naves', { root: true })
    dispatch('logar', 'Plinio Naves', { root: true })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}