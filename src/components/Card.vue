<template>
  <div class="card mb-2">
      <div class="card-body">
          <h5 class="text-center">{{ pais.name.official }}</h5>
          <p class="text-center">
              <img :src="pais.flags[1]" :alt="pais.name.official" class="img-fluid w-50">
          </p>
          <p class="card-text">
              <span class="badge bg-info text-dark d-block mb-1">Native name: {{pais.name.official}}</span>
              <span class="badge bg-info text-dark d-block mb-1">Name: {{pais.name.official}}</span>
              <span class="badge bg-success text-dark p-3 d-block mb-1">Area: {{numeroFormato(pais.area)}}</span>
              <span class="badge bg-info text-dark d-block mb-1">Region: {{pais.region}}</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['pais'],
    setup() {
        const numeroFormato = (num) => {
            return new Intl.NumberFormat("de-DE").format(num)
        }

        return {numeroFormato}
    }
}
</script>
