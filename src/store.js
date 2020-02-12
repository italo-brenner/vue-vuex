import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contadorModule = {
  namespaced: true,
  state: {
    contador: 0
  },
  getters: {
    contadorAtual: state => state.contador
  }
}

const tarefaModule = {
  namespaced: true,
  state: {
    tarefas: []
  },
  getters: {
    tarefasConcluidas: (state, getters, rootState, rootGetters) => {
      console.log('Getters: state: ', state, rootState)
      return state.tarefas.filter(t => t.concluido)
    },
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
      return commit('listarTarefas', { tarefas })
    }
  }
}

const store =  new Vuex.Store({
  state: {
    usuario: 'Ítalo Brenner'
  },
  modules: {
    contador: contadorModule,
    tarefas: tarefaModule
  }
})

console.log('Store: ', store)

export default store