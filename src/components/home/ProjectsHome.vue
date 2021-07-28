<template>
  <section class="projects">
    <!-- Projects container -->
    <div class="projects__container">
      <!-- Individual Projects -->
      <div class="projects__project"
        v-for="(project, index) in getProjects" 
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
    ...mapGetters(['getProjects'])
  }
}
</script>

<style scoped lang="scss">
.projects {
  min-height: 60rem;
  width: 100%;
  background-color: greenyellow;

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