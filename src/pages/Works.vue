<template lang="pug">
  .about
    h1.content__title {{name}}
</template>

<script>
export default {
  name: 'Works',
  data: function () { 
    return {
        name: this.$route.name
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
