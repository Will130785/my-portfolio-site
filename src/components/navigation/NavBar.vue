<template>
  <nav class="navbar">
    <div @click="toggleSidebar" class="toggle" :class="{ 'toggle-active': getSidebarStatus }">
      <div></div>
    </div>
    <ul v-for="(link, index) in getLinks" :key="index" class="navbar-links">
      <li class="navbar-link">
        <router-link :to="{ name: link.name }">{{ link.link }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getLinks', 'getSidebarStatus'])
  },
  methods: {
    ...mapActions(['sidebarStatusAction']),
    toggleSidebar () {
      this.sidebarStatusAction()
    }
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

// Hamburger button
.toggle {
  margin: 1rem;
  width: 3rem;
  cursor: pointer;
}

.toggle::after,
.toggle::before,
.toggle div {
  background-color: #fff;
  border-radius: .3rem;
  content: '';
  display: block;
  height: .4rem;
  margin: .7rem 0;
  transition: all .2s ease-in-out;
}

.toggle-active::before {
  transform: translateY(1rem) rotate(135deg);
}

.toggle-active::after {
  transform: translateY(-1.2rem) rotate(-135deg);
}

.toggle-active div {
  transform: scale(0)
}
</style>
