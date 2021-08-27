<template>
  <section :style="{ backgroundImage: 'url(' + image + ')' }" class="hero">
    <!-- Title -->
    <div class="hero__title">
      <h1>Will Constable</h1>
    </div>
    <!-- Description -->
    <div class="hero__desc">
      <p>Software engineer based in London</p>
      <p>Got something you want to have a chat about? enter your email address below and I will get back to you ASAP</p>
    </div>
    <!-- Get in contact -->
    <div class="hero__contact">
      <input type="text" placeholder="Enter your email address" />
      <button>Contact me</button>
    </div>
  </section>
</template>

<script>
import image from '../../assets/Web-Header-Background.svg'
export default {
  data () {
    return {
      image: image
    }
  },
  mounted () {
    console.log(this.image)
  }
}
</script>

<style scoped lang="scss">
// Main hero homepage
.hero {
  min-height: 60rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    margin-top: 10rem;
  }

  h1 {
    color: #fff;
    font-size: 3rem;
  }

  p {
    color: #fff;
    font-size: 2rem;
  }

  &__desc {
    text-align: center;
  }

  &__contact {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    width: 100%;

    input {
      border: none;
      padding: 2rem;
      border-top-left-radius: .5rem;
      border-bottom-left-radius: .5rem;
      width: 60%;

      @media only screen and (min-width: 992px) {
        width: 40%;
      }
    }

    button {
      border: none;
      border-top-right-radius: .5rem;
      border-bottom-right-radius: .5rem;
      width: 30%;
      background-color: #3F6C45;
      color: #fff;
      cursor: pointer;

      @media only screen and (min-width: 992px) {
        width: 10%;
      }
    }
  }
}
</style>