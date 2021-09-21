<template>
  <section class="hero">
    <img :src="getSingleProject.image" :alt="getSingleProject.title" />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getSingleProject'])
  }
}
</script>

<style scoped lang="scss">
// Main project head
.hero {
  min-height: 60rem;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  img {
    width: 100%;
  }

  h1 {
    color: #000;
    font-size: 3rem;
  }
}
</style>