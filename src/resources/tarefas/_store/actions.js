import {
  LISTAR_TAREFAS
} from './mutation-types'

export default {
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
    commit(LISTAR_TAREFAS, { tarefas })
    commit('logar', 'Plinio Naves', { root: true })
    dispatch('logar', 'Plinio Naves', { root: true })
  }
}