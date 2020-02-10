<template>
  <div>
    <h2 class="font-weight-light">Contador: {{ contador }}</h2>
    <button class="btn btn-lg btn-danger mr-1" @click="decrementar">-</button>
    <button class="btn btn-lg btn-success" @click="incrementar">+</button>
  </div>
</template>

<script>
export default {
  computed: {
    contador() {
      return this.$store.state.contador
    }
  },
  methods: {
    decrementar() {
      this.$store.state.contador--
    },
    incrementar() {
      this.$store.state.contador++
    }
  }
}
</script>