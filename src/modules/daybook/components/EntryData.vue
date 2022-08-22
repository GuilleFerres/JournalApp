<template>
  <div 
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 }})">
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">22</span>
        <span class="mx-1 fs-5">Agosto</span>
        <span class="mx-2 fw-light">2022, lunes</span>
    </div>
    <div class="entry-description">
        Laboris cillum incididunt labore velit aute incididunt ex Lorem sunt. Id veniam non deserunt excepteur enim minim dolore quis est Lorem eiusmod et irure. Consectetur non consectetur elit mollit labore ut magna amet enim id officia cillum. Cupidatat laboris Lorem ex nulla magna ipsum dolor Lorem et cupidatat aliquip velit. Nulla do amet sint ex qui excepteur id. Ex irure eu commodo nostrud deserunt amet excepteur. Tempor aliqua proident enim elit.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 12px;
  }
}
</style>