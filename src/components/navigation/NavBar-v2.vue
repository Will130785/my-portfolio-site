<template>
  <nav class="navbar" :class="{ 'sidebar-open': getSidebarStatus }">
    <div class="toggle"
      :class="{ 'toggle-active': getSidebarStatus }"
      @click="toggleSidebar">
      <div></div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Search from '../../components/inputs/Search.vue'
export default {
  components: {
    Search
  },
  computed: {
    ...mapGetters(['getSidebarStatus'])
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
// Main navbar
.navbar {
  height: 5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
  transition: all 1s;

  h2 {
    font-size: 3rem;
    color: #000;
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
  background-color: #4d85bd;
  border-radius: .3rem;
  content: '';
  display: block;
  height: .4rem;
  margin: .7rem 0;
  transition: all .2s ease-in-out;
  -webkit-transition: all .2s ease-in-out;
}

.toggle-active::before {
  transform: translateY(1rem) rotate(135deg);
  -webkit-transform: translateY(1rem) rotate(135deg);
  background-color: #fff;
}

.toggle-active::after {
  transform: translateY(-1.2rem) rotate(-135deg);
  -webkit-transform: translateY(-1.2rem) rotate(-135deg);
  background-color: #fff;
}

.toggle-active div {
  transform: scale(0);
  -webkit-transform: scale(0);
}

.toggle-active div {
  background-color: #fff;
}

.sidebar-open {
  background-color: #ffdb5c;
}
</style>
