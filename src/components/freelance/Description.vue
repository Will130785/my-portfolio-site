<template>
  <section class="description">
    <!-- Top of hero / left on desktop -->
    <div class="description__top">
      <h1 class="header-top">Description Top Section</h1>
      <h1 class="header-left">Description Left Section</h1>
    </div>
    <!-- Bottom of hero / right on desktop -->
    <div class="description__bottom">
      <h1 class="header-bottom">Description Bottom Section</h1>
      <h1 class="header-right">Description Right Section</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
// Main description
.description {
  min-height: 60rem;
  width: 100%;
  border: 1px solid #000;
  background-color: #fff;

  @media only screen and (min-width: 750px) {
    display: flex;
  }
  
  // Top section (mobile)
  &__top {
    width: 100%;
    height: 60rem;
    border: 1px solid #000;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    
    // On desktop place top and bottom side by side
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
    border: 1px solid #000;
    background-color: #fff;

    @media only screen and (min-width: 750px) {
      width: 50%;
    }
  }
}

// For layout purposes only - display title depending on mobile or desktop
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