<template>
  <section class="for-fun">
    <!-- Projects container -->
    <div class="for-fun__container">
      <!-- Individual Projects -->
      <div class="for-fun__project"
        v-for="(project, index) in getFunProjects" 
        :key="index">
          <p>{{ project.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getFunProjects'])
  }
}
</script>

<style scoped lang="scss">
.for-fun {
  min-height: 60rem;
  width: 100%;
  background-color:cornflowerblue;

  &__container {
    width: 100%;
    padding: 2rem 1rem;
    

    @media only screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-height: 60rem;
    justify-items: center;
  }
  }

  &__project {
    height: 30rem;
    width: 100%;
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