<template>
  <section class="current-work">
    <!-- Projects container -->
    <div class="current-work__container">
      <!-- Individual Projects -->
      <div class="current-work__work"
        v-for="(work, index) in getWorkCurrent" 
        :key="index">
          <p>{{ work.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getWorkCurrent'])
  }
}
</script>

<style scoped lang="scss">
// Main current work
.current-work {
  min-height: 60rem;
  width: 100%;
  border: 1px solid #000;
  background-color: #fff;

  // Projects container
  &__container {
    width: 100%;
    padding: 2rem 1rem;
    

    @media only screen and (min-width: 750px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60rem;
  }
  }
  
  // Individual project
  &__work {
    height: 30rem;
    width: 100%;
    border: 1px solid #000;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    p {
      font-size: 2rem;
    }

    @media only screen and (min-width: 750px) {
      height: 30rem;
      width: 30rem;
    }
  }
}
</style>