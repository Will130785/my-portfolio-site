<template>
  <div class="blogs">
    <!-- Hero section -->
    <HeroBlogs />
    <!-- Blogs section -->
    <Blogs />
  </div>
</template>

<script>
import HeroBlogs from '../../components/blogs/HeroBlogs.vue'
import Blogs from '../../components/blogs/Blogs.vue'
export default {
  components: {
    HeroBlogs,
    Blogs
  },
  metaInfo: {
    title: 'Blogs',
    meta: [
      { vmid: 'description', name: 'description', content: 'Blogs by Will Constable, software engineer and web developer based in London.' }
    ]
  }
}
</script>