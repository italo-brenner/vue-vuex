<template>
  <div id="app">
    
    <div class="jumbotron jumbrotron-fluid">
      <div class="container">
        <h1 class="display-4">Requisições HTTP no Vue</h1>
        <p class="lead">Usando biblioteca Axios para fazer chamada Ajax à uma API REST</p>
      </div>
    </div>

    <div class="container">

      <div class="row">
        <div class="col-sm-9 border-right">
          <TarefasLista />
        </div>
        <div class="col-sm-3">
          <Contador />
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import Contador from '@/resources/contador/_components/Contador'
import TarefasLista from '@/resources/tarefas/_components/TarefasLista'

export default {
  components: {
    Contador,
    TarefasLista
  }
}
</script>