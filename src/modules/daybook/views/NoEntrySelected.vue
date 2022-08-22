<template>
  <div class="d-flex justify-content-center">
      <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>

  <FActionBtn />
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components:{
        FActionBtn: defineAsyncComponent(() => import('../components/FActionBtn.vue'))
    }
}
</script>

<style lang="scss" scoped>
div {
    height: 100%;
}
</style>