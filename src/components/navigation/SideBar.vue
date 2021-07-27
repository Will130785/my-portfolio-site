<template>
  <nav class="sidebar" :class="{'sidebar-active': getSidebarStatus}">

  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getSidebarStatus'])
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  width: 40%;
  height: 100%;
  background-color: orange;
  position: absolute;
  left: -40%;
  transition: all .3s ease;
}

.sidebar-active {
  left: 0;
}

</style>