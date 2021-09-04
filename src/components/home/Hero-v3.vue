<template>
  <section class="hero">
    <!-- Info -->
    <div class="hero__info">
      <!-- Heading -->
      <div class="hero__info--heading">
        <h1><span class="myname">Will Constable</span>, a software engineer <span class="based">based</span> in London</h1>
      </div>
      <!-- Call to action -->
      <div class="hero__info--cta">
        <Button text="Let's get started" btnClass="cta-btn"/>
      </div>
      <!-- Logos -->
      <div class="hero__info--logos">
        <font-awesome-icon :icon="['fab', 'vuejs']" />
        <font-awesome-icon :icon="['fab', 'js-square']" />
        <font-awesome-icon :icon="['fab', 'node-js']" />
        <font-awesome-icon :icon="['fab', 'html5']" />
        <font-awesome-icon :icon="['fab', 'css3-alt']" />
      </div>
    </div>
    <!-- Image -->
    <figure class="hero__image">
      <img class="hero__image--pic" :src="image" />
    </figure>
  </section>
</template>

<script>
import image from '../../assets/Mathematics-bro3.svg'
import Button from '../../components/buttons/Button.vue'
export default {
  components: {
    Button
  },
  data () {
    return {
      image: image
    }
  }
}
</script>

<style scoped lang="scss">
// Main hero homepage
.hero {
  min-height: 60rem;
  width: 100%;
  display: flex;
  padding: 0 2rem;

  &__info {
    width: 100%;
    padding: 5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (min-width: 700px) {
      width: 50%;
    }

    &--heading {
      width: 70%;

      @media only screen and (min-width: 700px) {
        width: 100%;
      }

      @media only screen and (min-width: 1300px) {
        width: 80%;
      }
      
    }

    &--cta {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    &--logos {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  &__image {
    display: none;

    @media only screen and (min-width: 700px) {
      display: block;
      width: 50%;
    }

    &--pic {
      width: 100%;
    }
  }

  h1 {
    color: #000;
    font-size: 3rem;
    line-height: 1.5;
    letter-spacing: .5rem;

    @media only screen and (min-width: 992px) {
      font-size: 6rem;
    }
  }
}

.myname {
      display: inline-block;
      border-bottom: 4px solid #CB0000;
    }

.based {
      display: inline-block;
      background-color: #CB0000;
    }

.svg-inline--fa {
  font-size: 5rem;
  color: #f0ede8;
}
</style>