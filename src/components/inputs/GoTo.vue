<template>
  <div class="form-group hero-form-group">
    <button>Go to</button>
    <select>
      <option v-for="(option, index) in options" :key="option.name + '-' + index">{{ option.name }}</option>
    </select> 
  </div> 
</template>

<script>
export default {
  data () {
    return {
      options: [
        { value: 'Professional', name: 'Professional' },
        { value: 'For fun', name: 'For fun' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.hero-form-group {
  display: flex;
  
  button {
    border: 1px solid #0058a3;
    background-color: #0058a3;
    padding: 3rem 4rem;
    margin: 0;
    border-top-left-radius: 10rem;
    border-bottom-left-radius: 10rem;
    color: #fff;
  }

  select {
    border: none;  
    padding: 3rem;
    margin: 0;
    width: 25rem;
    background-color: #7c99b6;
    color: #fff;
    border-top-right-radius: 10rem;
    border-bottom-right-radius: 10rem;
  }
}
</style>