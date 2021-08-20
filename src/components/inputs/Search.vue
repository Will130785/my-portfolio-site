<template>
  <div class="form-group">
    <input type="text" class="search-input" />
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped lang="scss">
  .search-input {
    padding: 1.5rem;
    width: 100%;
    border: 4px solid #CB0000;
    border-radius: 3rem;
  }

  .search-input:focus {
    outline: none;
    border: 4px solid #3F6C45;
  }
</style>
