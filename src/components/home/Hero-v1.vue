<template>
  <section :style="{ backgroundImage: 'url(' + image + ')' }" class="hero">
    <h1>Hero Section</h1>
  </section>
</template>

<script>
import image from '../../assets/Web-Header-Background.svg'
export default {
  data () {
    return {
      image: image
    }
  },
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

  h1 {
    color: #000;
    font-size: 3rem;
  }
}
</style>