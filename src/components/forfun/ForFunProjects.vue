<template>
  <section class="for-fun">
    <!-- Projects container -->
    <div class="for-fun__container">
      <!-- Individual Projects -->
      <div class="for-fun__project"
        v-for="(project, index) in getFunProjects" 
        :key="index">
          <router-link :to="'/for-fun/' + project._id">
            <img :src="project.image" :alt="project.title" />
          </router-link>
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
// Main for fun
.for-fun {
  min-height: 60rem;
  width: 100%;
  border: 1px solid #000;
  background-color: #fff;
  
  // Projects container
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
  
  // Individual project
  &__project {
    height: 30rem;
    width: 100%;
    border: 1px solid #000;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    img {
      width: 100%;
    }

    a {
      font-size: 2rem;
      color: #000;
      text-decoration: none;
    }

    @media only screen and (min-width: 750px) {
      height: 30rem;
      width: 30rem;
    }
  }
}
</style>