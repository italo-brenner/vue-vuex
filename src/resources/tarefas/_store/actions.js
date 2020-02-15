import TarefasService from './../_services/TarefasService'

import {
  LISTAR_TAREFAS,
  CRIAR_TAREFA,
  EDITAR_TAREFA,
  DELETAR_TAREFA,
  SELECIONAR_TAREFA,
  SETAR_ERRO
} from './mutation-types'

export default {
  concluirTarefa: async ({ dispatch }, payload) => {
    const tarefa = Object.assign({}, payload.tarefa)
    tarefa.concluido = ! tarefa.concluido
    dispatch('editarTarefa', { tarefa })
  },
  criarTarefa: async ({ commit }, { tarefa }) => {
    try {
      const response = await TarefasService.postTarefa(tarefa)
      commit(CRIAR_TAREFA, { tarefa: response.data })
    } catch(erro) {
      commit(SETAR_ERRO, { erro })
    }
  },
  editarTarefa: async ({ commit }, { tarefa }) => {
    try {
      const response = await TarefasService.putTarefa(tarefa)
      commit(EDITAR_TAREFA, { tarefa: response.data })
    } catch(erro) {
      commit(SETAR_ERRO, { erro })
    }
  },
  deletarTarefa: async ({ commit }, { tarefa }) => {
    try {
      await TarefasService.deleteTarefa(tarefa.id)
      commit(DELETAR_TAREFA, { tarefa })
    } catch(erro) {
      commit(SETAR_ERRO, { erro })
    }
  },
  listarTarefas: async ({ commit }) => {
    try {
      const response = await TarefasService.getTarefas()
      commit(LISTAR_TAREFAS, { tarefas: response.data })
    } catch(erro) {
      commit(SETAR_ERRO, { erro })
    }
  },
  selecionarTarefa: ({ commit }, payload) => {
    commit(SELECIONAR_TAREFA, payload)
  },
  resetarTarefaSelecionada: ({ commit }) => {
    commit(SELECIONAR_TAREFA, { tarefa: undefined })
  }
}