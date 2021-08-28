<template>
  <nav class="sidebar"
    :class="{'sidebar-active': getSidebarStatus}">
    <!-- Nav links -->
    <ul class="sidebar__links">
      <li @click="handleLinkClick"
        class="siderbar__links--link" 
        v-for="(link, index) in getLinks"
        :key="index">
        <router-link :to="{ 'name': link.name }">{{ link.link }}</router-link>
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
    handleLinkClick () {
      // Close sidebar after link is clicked
      this.sidebarStatusAction()
    }
  }
}
</script>

<style scoped lang="scss">
// Main sidebar
.sidebar {
  width: 100%;
  height: 100%;
  background-color: #B8D20B;
  position: fixed;
  top: 5rem;
  left: -100%;
  opacity: 0;
  transition: all .5s ease;
  z-index: 1;

  @media only screen and (min-width: 800px) {
    width: 40%;
  }
  
  // Links container
  &__links {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    list-style: none;
    padding-top: 3rem;
    padding-bottom: 10rem;

      // Individual links
      &--link {
        width: 100%;

      }

      a {
        display: block;
        width: 100%;
        color: #fff;
        text-decoration: none;
        font-size: 1.6rem;
      }

      a:hover {
        text-decoration: none;
      }
  }
}

// Active class that will be bound to sidebar when user clicks hamburger
.sidebar-active {
  left: 0;
  opacity: 1;
}

</style>