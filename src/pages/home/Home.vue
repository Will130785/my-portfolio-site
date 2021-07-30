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
import Hero from '../../components/home/Hero.vue'
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
  },
  mounted () {
    // Test API call
    this.getTest()
  },
  methods: {
    // Test method
    async getTest () {
      const result = await TestService.getTest()
      console.log(result)
    }
  }
}
</script>

<style scoped>

</style>