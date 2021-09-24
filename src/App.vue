<template>
  <div
    class="container"
  >
    <h1 class="text-center">Países api</h1>
    <Continentes/>
    <CardList/>
  </div>
</template>

<script>
import Continentes from './components/Continentes.vue'
import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    CardList,
    Continentes
  }
}
</script>

    Continentes