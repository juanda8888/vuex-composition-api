<template>
  <div class="row">
    <div
      class="col-12"
      v-for="pais in paises"
      :key="pais.id"
    >
      <card
        v-if="pais"
        :pais="pais" />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  components: { Card },
  setup() {
    const store = useStore()
    const paises = computed(() => {
      return store.getters.topPaisesPobalcion
    })
    onMounted(async() => {
      await store.dispatch('getPaises')
      await store.dispatch('filtrarRegion', 'Americas')
    })

    return {paises}
  }
}
</script>
