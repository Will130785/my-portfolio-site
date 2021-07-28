<template>
  <section class="hero">
    <!-- Top of hero / left on desktop -->
    <div class="hero__top">

    </div>
    <!-- Bottom of hero / right on desktop -->
    <div class="hero__bottom">

    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  min-height: 60rem;
  width: 100%;
  background-color: #000;

  @media only screen and (min-width: 750px) {
    display: flex;
  }

  &__top {
    width: 100%;
    height: 60rem;
    background-color: yellow;

    @media only screen and (min-width: 750px) {
      width: 50%;
    }
  }

  &__bottom {
    width: 100%;
    height: 60rem;

    @media only screen and (min-width: 750px) {
      width: 50%;
    }
  }
}
</style>