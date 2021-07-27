<template>
  <div id="app">
    <!-- Navbar to be displayed on every page -->
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/navigation/NavBar.vue'
export default {
  components: {
    NavBar
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
  font-size: 62.5%; // 1rem === 10px
}

body {
  font-family:Arial, Helvetica, sans-serif;
}
</style>