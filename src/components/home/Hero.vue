<template>
  <section class="hero">
    <h1>Hero Section</h1>
  </section>
</template>

<script>
export default {
  mounted () {
    console.log(this.image)
  }
}
</script>

<style scoped lang="scss">
// Main hero homepage
.hero {
  min-height: 60rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;

  h1 {
    color: #000;
    font-size: 3rem;
  }
}
</style>