<template>
  <div class="home">
    <!-- Hero Section -->
    <Hero />
    <!-- Projects Section -->
    <ProjectsHome />
    <!-- Professional Section -->
    <ProfessionalHome />
    <!-- Blogs section -->
    <BlogsHome />
  </div>
</template>

<script>
import Hero from '../../components/home/Hero-v2.vue'
import ProjectsHome from '../../components/home/ProjectsHome.vue'
import ProfessionalHome from '../../components/home/ProfessionalHome.vue'
import BlogsHome from '../../components/home/BlogsHome.vue'
import TestService from '../../services/testService.js'
export default {
  components: {
    Hero,
    ProjectsHome,
    ProfessionalHome,
    BlogsHome
  },
  metaInfo: {
    title: 'Home',
    meta: [
      { vmid: 'description', name: 'description', content: 'Portfolio website for Will Constable, software engineer and web developer based in London.' }
    ]
  }
}
</script>

<style scoped lang="scss">
.home {
  margin: 0 2rem;

  @media only screen and (min-width: 700px) {
    margin: 0 4rem
  }

  @media only screen and (min-width: 992px) {
    margin: 0 6rem;
  }
}
</style>