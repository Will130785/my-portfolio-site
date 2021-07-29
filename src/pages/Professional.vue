<template>
  <div class="professional">
    <!-- Hero section -->
    <HeroProfessional />
    <!-- Work experience section -->
    <ExperienceProfessional />
    <!-- Current Role section -->
    <CurrentProfessional />
    <!-- Freelance section -->
    <FreelanceProfessional />
    

  </div>
</template>

<script>
import HeroProfessional from '../components/professional/HeroProfessional.vue'
import ExperienceProfessional from '../components/professional/ExperienceProfessional.vue'
import CurrentProfessional from '../components/professional/CurrentProfessional.vue'
import FreelanceProfessional from '../components/professional/FreelanceProfessional.vue'
export default {
  components: {
    HeroProfessional,
    ExperienceProfessional,
    CurrentProfessional,
    FreelanceProfessional
  },
  metaInfo: {
    title: 'Professional'
  }
}
</script>