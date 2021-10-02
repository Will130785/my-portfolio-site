<template>
  <section class="projects">
    <!-- Projects container -->
    <div class="projects__container">
      <!-- Individual Projects -->
      <div class="projects__project"
        v-for="(project, index) in getFunProjects" 
        :key="index">
          <!-- image -->
          <router-link :to="'/for-fun/' + project._id">
            <img :src="image" :alt="project.projectTitle" />
          </router-link>
          <!-- Text -->
          <div>
            <h2>{{ project.projectTitle }}</h2>
          </div>
      </div>
    </div>
  </section>
</template>

<script>
import image from '../../assets/project.svg'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getFunProjects']),
    firstThreeProjects () {
      const firstThree = []
      for (let i = 0; i <= 2; i++) {
        firstThree.push(this.getFunProjects[i])
      }

      return firstThree
    }
  },
  data () {
    return {
      image: image
    }
  }
}
</script>

<style scoped lang="scss">
// Main home projects
.projects {
  min-height: 60rem;
  width: 100%;
  background-color: #fff;
  
  // home projects container
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
  &__project {
    height: 30rem;
    width: 100%;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.21);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0;

    a {
      font-size: 2rem;
      text-decoration: none;
      color: #000;
      display: inline-block;
    }

    img {
      width: 100%;
      height: 100%;
    }

    @media only screen and (min-width: 750px) {
      height: 30rem;
      width: 30rem;
    }
  }
}
</style>