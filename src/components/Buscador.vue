<template>
  <input
    type="text"
    v-model="texto"
    placeholder="ingrese país"
    class="form-control my-3"
    @keyup="buscarPais"
  >
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const texto = ref('')

    const buscarPais = () => {
      store.dispatch('filtroNombre', texto.value)
    }

    return { texto, buscarPais }
  }
}
</script>
