<template>
  <div id="app">
    <!-- Navbar and SideBar to be displayed on every page -->
    <NavBar />
    <SideBar />
    <!-- Main site content -->
      <router-view />
      <!-- Footer -->
      <Footer />
  </div>
</template>

<script>
import NavBar from './components/navigation/NavBar-v1.vue'
import SideBar from './components/navigation/SideBar-v1.vue'
import Footer from './components/layout/Footer.vue'
import { mapActions } from 'vuex'
export default {
  components: {
    NavBar,
    SideBar,
    Footer
  },
  metaInfo: {
    titleTemplate: 'Will Constable | %s'
  },
  mounted () {
    // Populate vuex store with data
    this.setBlogsAction()
    this.setCurrentAction()
    this.setFreelanceAction()
    this.setProjectAction()
  },
  methods: {
    ...mapActions([
      'setBlogsAction',
      'setCurrentAction',
      'setFreelanceAction',
      'setProjectAction'
    ])
  }
}
</script>

<style lang="scss">
// Global reset
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  height: 100%;
}

body {
  font-family:Arial, Helvetica, sans-serif;
  height: 100%;
}
</style>