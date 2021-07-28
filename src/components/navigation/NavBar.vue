<template>
  <nav class="navbar">
    <div class="toggle"
      :class="{ 'toggle-active': getSidebarStatus }"
      @click="toggleSidebar">
      <div></div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
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
  background-color: orange;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
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
