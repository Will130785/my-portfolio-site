<template>
  <nav class="navbar">
    <ul v-for="(link, index) in getLinks" :key="index" class="navbar-links">
      <li class="navbar-link">
        <router-link :to="{ name: link.name }">{{ link.link }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getLinks'])
  }    
}
</script>

<style scoped lang="scss">
.navbar {
  height: 5rem;
  background-color: orange;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: #fff;
  }
}
</style>
