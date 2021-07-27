<template>
  <div id="app">
    <!-- Navbar to be displayed on every page -->
    <NavBar />
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/navigation/NavBar.vue'
import SideBar from './components/navigation/SideBar.vue'
export default {
  components: {
    NavBar,
    SideBar
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
  height: 100%;
}

body {
  font-family:Arial, Helvetica, sans-serif;
  height: 100%;
}

#app {
  height: 100%;
}
</style>