<template>
  <div class="blog">
    <!-- Blog head section -->
    <SingleBlogHead />
    <!-- Blog content section -->
    <SingleBlogContent />
  </div>
</template>

<script>
import SingleBlogHead from '../../components/blogs/SingleBlogHead.vue'
import SingleBlogContent from '../../components/blogs/SingleBlogContent.vue'
export default {
  components: {
    SingleBlogHead,
    SingleBlogContent
  },
  metaInfo: {
    title: 'Blog',
    meta: [
      { vmid: 'description', name: 'description', content: 'A blog by software engineer and web developer Will Constable, based in London' }
    ]
  }
}
</script>