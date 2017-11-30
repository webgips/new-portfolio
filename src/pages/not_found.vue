<template lang="pug">
  .not_found.content
    h1 {{name}}
    h2 Page not found
    

</template>

<script>
export default {
  name: 'not_found',
  data: function () { 
    return {
        name: this.$route.name
      }
  },  
  methods: {
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	.not_found{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
