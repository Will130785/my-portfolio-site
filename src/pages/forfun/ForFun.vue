<template>
  <div class="for-fun">
    <!-- Hero section -->
    <HeroForFun />
    <!-- For fun project section -->
    <ForFunProjects />
    
  </div>
</template>

<script>
import HeroForFun from '../../components/forfun/HeroForFun.vue'
import ForFunProjects from '../../components/forfun/ForFunProjects.vue'
export default {
  components: {
    HeroForFun,
    ForFunProjects
  },
  metaInfo: {
    title: 'For Fun',
    meta: [
      { vmid: 'description', name: 'description', content: 'A selection of fun projects by software engineer and web developer Will Constable, based in London' }
    ]
  }
}
</script>