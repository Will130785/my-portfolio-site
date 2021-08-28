<template>
  <section class="hero">
    <!-- Info -->
    <div class="hero__info">
      <div class="hero__info--heading">
        <h1><span class="myname">Will Constable</span>, a software engineer <span class="based">based</span> in London</h1>
      </div>
      <font-awesome-icon :icon="['fab', 'vuejs']" />
      <font-awesome-icon :icon="['fab', 'js-square']" />
      <font-awesome-icon :icon="['fab', 'node-js']" />
      <font-awesome-icon :icon="['fab', 'html5']" />
      <font-awesome-icon :icon="['fab', 'css3-alt']" />
    </div>
    <!-- Image -->
    <figure class="hero__image">
      <img class="hero__image--pic" :src="image" />
    </figure>
  </section>
</template>

<script>
import image from '../../assets/Mathematics-bro2.svg'
export default {
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

    @media only screen and (min-width: 992px) {
      width: 50%;
    }

    &--heading {
      width: 70%;

      @media only screen and (min-width: 992px) {
        width: 100%;
      }
    }
  }

  &__image {
    display: none;

    @media only screen and (min-width: 992px) {
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
      border-bottom: 4px solid #B8D20B;
    }

.based {
      display: inline-block;
      background-color: #B8D20B;
    }

.svg-inline--fa {
  font-size: 5rem;
  color: #f0ede8;
}
</style>