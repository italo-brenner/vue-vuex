<template>
    <div>

        <div class="row">
            <div class="col-sm-10">
                <h1 class="font-weight-light">Lista de Tarefas</h1>
            </div>
            <div class="col-sm-2">
                <button 
                    class="btn btn-primary float-right" 
                    @click="exibirFormularioCriarTarefa">
                        <i class="fa fa-plus mr-2"></i>
                        <span>Criar</span>
                </button>
            </div>
        </div>
        
        <h3 class="font-weight-light mt-4">A Fazer ({{ tarefasAFazer.length }})</h3>

        <ul class="list-group" v-if="tarefasAFazer.length > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasAFazer"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao"
                @concluir="concluirTarefa({ tarefa: $event})"
                @deletar="confirmarRemocaoTarefa" />
        </ul>

        <p v-else>Nenhuma tarefa foi concluída.</p>

        <h3 class="font-weight-light mt-4">A Concluídas ({{ totalDeTarefasConcluidas }})</h3>

        <ul class="list-group" v-if="totalDeTarefasConcluidas > 0">
            <TarefasListaIten
                v-for="tarefa in tarefasConcluidas"
                :key="tarefa.id"
                :tarefa="tarefa"
                @editar="selecionarTarefaParaEdicao"
                @concluir="concluirTarefa({ tarefa: $event})"
                @deletar="confirmarRemocaoTarefa" />
        </ul>

        <p v-else>Nenhuma tarefa a fazer.</p>

        <TarefaSalvar
            v-if="exibirFormulario"
            :tarefa="tarefaSelecionada" />


    </div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex'

import register from './../_store/register'
import TarefaSalvar from './TarefaSalvar.vue'
import TarefasListaIten from './TarefasListaIten.vue'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('tarefas')

export default {
    components: {
        TarefaSalvar,
        TarefasListaIten
    },
    data() {
        return {
            exibirFormulario: false,
            tarefaSelecionada: undefined
        }
    },
    computed: {
      ...mapState(['tarefas']),
      ...mapGetters([
        'tarefasAFazer',
        'tarefasConcluidas',
        'totalDeTarefasConcluidas',
        'boasVindas'
      ])
    },
    created() {
      register(this.$store)
      
      this.listarTarefas()
    },
    methods: {
      ...mapActions([
        'concluirTarefa',
        'deletarTarefa',
        'listarTarefas'
      ]),
      confirmarRemocaoTarefa(tarefa) {
        const confirmar = window.confirm(`Deseja deletar a tarefa "${tarefa.titulo}"?`)
        if (confirmar) {
          this.deletarTarefa({ tarefa });
        }
      },
      exibirFormularioCriarTarefa(event) {
        if (this.tarefaSelecionada) {
            this.tarefaSelecionada = undefined
            return
        }
        this.exibirFormulario = !this.exibirFormulario
      },
      selecionarTarefaParaEdicao(tarefa) {
          this.exibirFormulario = true
          this.tarefaSelecionada = tarefa
      },
      resetar() {
          this.exibirFormulario = false
          this.tarefaSelecionada = undefined
      }
    }
}
</script>
