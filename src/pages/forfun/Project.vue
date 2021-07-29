<template>
  <div class="project">
    <!-- Project head section -->
    <SingleProjectHead />
    <!-- Project content section -->
    <SingleProjectContent />
  </div>
</template>

<script>
import SingleProjectHead from '../../components/forfun/SingleProjectHead.vue'
import SingleProjectContent from '../../components/forfun/SingleProjectContent.vue'
export default {
  components: {
    SingleProjectHead,
    SingleProjectContent
  },
  metaInfo: {
    title: 'Project',
    meta: [
      { vmid: 'description', name: 'description', content: 'A fun project by software engineer and web developer Will Constable, based in London' }
    ]
  }
}
</script>