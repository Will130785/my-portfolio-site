<template>
  <section :style="{ backgroundImage: 'url(https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=60)' }" class="hero">
    <div class="hero__heading">
      <h1>WILL CONSTABLE</h1>
    </div>
    <div class="hero__select">
      <GoTo />
    </div>
    <!-- <div class="hero__desc">
      <h2>Software Engineer based in London</h2>
    </div> -->
  </section>
</template>

<script>
import GoTo from '../../components/inputs/GoTo.vue'
export default {
  components: {
    GoTo
  }
}
</script>

<style scoped lang="scss">
// Main hero homepage
.hero {
  min-height: 60rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;
  background-position: center;

  h1 {
    margin-top: 5rem;
    color: #f70025;
    font-size: 5rem;
    font-family: 'Alfa Slab One', cursive;
    text-align: center;

    @media only screen and (min-width: 992px) {
      font-size: 8rem;
    }
  }

  &__select {
    margin-top: 10rem;

    p {
      margin-bottom: 4rem;
      font-size: 3rem;
      color: #F9A603;
    }
  }

  &__desc {
    margin-top: 10rem;
  }
}
</style>