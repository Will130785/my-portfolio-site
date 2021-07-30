<template>
  <div class="contact">
    <h1>Contact Page</h1>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact',
    meta: [
      { vmid: 'description', name: 'description', content: 'If you have any questions or a project you would like to kick start, get in contact with Will Constable, a software engineer and web developer based in London' }
    ]
  }
}
</script>

<style scoped lang="scss">
.contact {
  min-height: 80rem;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  
  h1 {
    font-size: 3rem;
    color: #000;
  }
}
</style>