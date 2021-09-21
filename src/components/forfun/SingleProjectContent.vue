<template>
  <section class="project-content">
    <h2>{{ getSingleProject.projectTitle }}</h2>
    <p>{{ getSingleProject.shortDesc }}</p>
    <p>{{ getSingleProject.desc }}</p>
    <ul>
      <li v-for="(item, index) in getSingleProject.features" :key="index">{{ item }}</li>
    </ul>
    <p>{{ getSingleProject.github }}</p>
    <p>{{ getSingleProject.project }}</p>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getSingleProject'])
  }
}
</script>

<style scoped lang="scss">
// Main project content
.project-content {
  width: 100%;
  min-height: 70rem;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3rem;
    color: #000;
  }
}
</style>