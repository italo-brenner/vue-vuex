import TarefasService from './../_services/TarefasService'

import {
  LISTAR_TAREFAS,
  CRIAR_TAREFA,
  EDITAR_TAREFA,
  DELETAR_TAREFA
} from './mutation-types'

export default {
  concluirTarefa: async ({ dispatch }, payload) => {
    const tarefa = Object.assign({}, payload.tarefa)
    tarefa.concluido = ! tarefa.concluido
    dispatch('editarTarefa', { tarefa })
  },
  criarTarefa: async ({ commit }, { tarefa }) => {
    const response = await TarefasService.postTarefa(tarefa)
    commit(CRIAR_TAREFA, { tarefa: response.data })
  },
  editarTarefa: async ({ commit }, { tarefa }) => {
    const response = await TarefasService.putTarefa(tarefa)
    commit(EDITAR_TAREFA, { tarefa: response.data })
  },
  deletarTarefa: async ({ commit }, { tarefa }) => {
    await TarefasService.deleteTarefa(tarefa.id)
    commit(DELETAR_TAREFA, { tarefa })
  },
  listarTarefas: async ({ commit }) => {
    const response = await TarefasService.getTarefas()
    commit(LISTAR_TAREFAS, { tarefas: response.data })
  }
}