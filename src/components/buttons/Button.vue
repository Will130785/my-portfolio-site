<template>
  <button :class="btnClass" class="btn">
    {{ text }}    
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    btnClass: String,
    btnHover: String
  }
}
</script>

<style scoped lang="scss">
// Standard test btn
.standard-btn {
  background-color: #000;
  color: #fff;
}

// Call to action btn
.cta-btn {
  background-color: #CB0000;
  color: #fff;
  border: none;
  padding: 1.5rem 3rem;
  border-radius: .5rem;
  transition: all .4s ease-in-out;
  font-size: 2rem;
}

.cta-btn:hover {
  cursor: pointer;
  background-color: #e24848;
}
</style>