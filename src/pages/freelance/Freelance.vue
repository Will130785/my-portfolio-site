<template>
  <div class="freelance">
    <!-- Hero section -->
    <HeroFreelance />
    <!-- Description section -->
    <Description />
    <!-- Freelance work section -->
    <FreelanceWork />
  </div>
</template>

<script>
import HeroFreelance from '../../components/freelance/HeroFreelance.vue'
import Description from '../../components/freelance/Description.vue'
import FreelanceWork from '../../components/freelance/FreelanceWork.vue'
export default {
  components: {
    HeroFreelance,
    Description,
    FreelanceWork
  },
  metaInfo: {
    title: 'Freelance',
    meta: [
      { vmid: 'description', name: 'description', content: 'The freelance page for software engineer and web developer Will Constable, based in London' }
    ]
  }
}
</script>