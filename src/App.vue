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
import NavBar from './components/navigation/NavBar.vue'
import SideBar from './components/navigation/SideBar.vue'
import Footer from './components/layout/Footer.vue'
export default {
  components: {
    NavBar,
    SideBar,
    Footer
  },
  metaInfo: {
    titleTemplate: 'Will Constable | %s'
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