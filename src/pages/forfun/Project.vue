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
import ProjectService from '../../services/ProjectService.js'
import { mapActions } from 'vuex'
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
  },
  async mounted () {
    const res = await ProjectService.getProject(this.$route.params.id)
    this.setSingleProjectAction(res.data)
    
  },
  methods: {
    ...mapActions(['setSingleProjectAction'])
  }
}
</script>