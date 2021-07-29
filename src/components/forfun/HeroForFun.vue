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
// Main hero for fun page
.hero {
  min-height: 60rem;
  width: 100%;
  background-color: #000;

  // ON desctop place top and bottom side by side
  @media only screen and (min-width: 750px) {
    display: flex;
  }

  // Top section (mobile)
  &__top {
    width: 100%;
    height: 60rem;
    background-color: yellow;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 750px) {
      width: 50%;
    }
  }

  // Bottom section (mobile)
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

// For layout purposes only - display title depending on mobile or desktop
.header-top {
  display: block;
  color: #fff;
  font-size: 3rem;

  @media only screen and (min-width: 750px) {
    display: none;
  }
}

.header-left {
  display: none;
  color: #fff;
  font-size: 3rem;

  @media only screen and (min-width: 750px) {
    display: block;
  }
}

.header-bottom {
  display: block;
  color: #fff;
  font-size: 3rem;

  @media only screen and (min-width: 750px) {
    display: none;
  }
}

.header-right {
  display: none;
  color: #fff;
  font-size: 3rem;

  @media only screen and (min-width: 750px) {
    display: block;
  }
}
</style>