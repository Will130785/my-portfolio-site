<template>
  <section class="hero">
    <!-- Top of hero / left on desktop -->
    <div class="hero__top">
      <h1 class="header-top">Hero Top Section</h1>
      <h1 class="header-left">Hero Left Section</h1>
    </div>
    <!-- Bottom of hero / right on desktop -->
    <div class="hero__bottom">
      <h1 class="header-bottom">Hero Bottom Section</h1>
      <h1 class="header-right">Hero Right Section</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
// Main hero professional page
.hero {
  min-height: 60rem;
  width: 100%;
  border: 1px solid #000;
  background-color: #fff;

  @media only screen and (min-width: 750px) {
    display: flex;
  }

  &__top {
    width: 100%;
    height: 60rem;
    border: 1px solid #000;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 750px) {
      width: 50%;
    }
  }

  &__bottom {
    width: 100%;
    height: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 750px) {
      width: 50%;
    }
  }
}

.header-top {
  display: block;
  color: #000;
  font-size: 3rem;

  @media only screen and (min-width: 750px) {
    display: none;
  }
}

.header-left {
  display: none;
  color: #000;
  font-size: 3rem;

  @media only screen and (min-width: 750px) {
    display: block;
  }
}

.header-bottom {
  display: block;
  color: #000;
  font-size: 3rem;

  @media only screen and (min-width: 750px) {
    display: none;
  }
}

.header-right {
  display: none;
  color: #000;
  font-size: 3rem;

  @media only screen and (min-width: 750px) {
    display: block;
  }
}
</style>