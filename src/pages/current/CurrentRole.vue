<template>
  <div class="current">
    <!-- Hero section -->
    <HeroCurrent />
    <!-- Description section -->
    <Description />
    <!-- Current work section -->
    <CurrentWork />
    
  </div>
</template>

<script>
import HeroCurrent from '../../components/current/HeroCurrent.vue'
import Description from '../../components/current/Description.vue'
import CurrentWork from '../../components/current/CurrentWork.vue'
export default {
  components: {
    HeroCurrent,
    Description,
    CurrentWork
  },
  metaInfo: {
    title: 'Current Role',
    meta: [
      { vmid: 'description', name: 'description', content: 'The current role page for software engineer and web developer Will Constable, based in London' }
    ]
  }
}
</script>