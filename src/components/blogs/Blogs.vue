<template>
  <section class="blogs">
    <!-- Projects container -->
    <div class="blogs__container">
      <!-- Individual Projects -->
      <div class="blogs__blog"
        v-for="(blog, index) in getBlogPageBlogs" 
        :key="index">
          <router-link :to="'/blogs/' + blog._id">{{ blog.title}}</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getBlogPageBlogs'])
  }
}
</script>

<style scoped lang="scss">
// Main component
.blogs {
  min-height: 60rem;
  width: 100%;
  border: 1px solid #000;
  background-color: #fff;
  
  // Blogs container
  &__container {
    width: 100%;
    padding: 2rem 1rem;
    

    @media only screen and (min-width: 750px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-height: 60rem;
    justify-items: center;
  }
  }

  // Inidividual blogs
  &__blog {
    height: 30rem;
    width: 100%;
    border: 1px solid #000;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    a {
      font-size: 2rem;
      color: #000;
      text-decoration: none;
    }

    @media only screen and (min-width: 750px) {
      height: 30rem;
      width: 30rem;
    }
  }
}
</style>