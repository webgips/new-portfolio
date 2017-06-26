<template lang="pug">
  #app
    sidebar
    .content
      transition(name="fade" type="")
        router-view
</template>

<script>
import sidebar from './components/Aside.vue'
export default {  
  components: {
    sidebar
  },  
  name: 'app', 
}
</script>

<style lang="scss">
//fonts
@import "./assets/fonts/fonts.scss";

*{
  box-sizing: border-box;
}
body{
    height: 100vh;
    width: 100vw;    
    // min-height: 800px;    
    // background: url('./assets/bg.png') no-repeat center;
    // background-size: cover;
    overflow: hidden;
    margin: 0;
    font-family: $proxima-nova-light;
}
#app{
    width: 100%;
    height: 100%;    
    background: url('./assets/img/glassy-effect.png') no-repeat center;
    background-size: cover;
    display: flex;    
    color: #fff;
}
.content{
  background-color: rgba(#0a112a,.8);
  flex: 1;
  padding: 120px 0 50px 70px;
  &__title{
    color: #fff;
    font-size: 44px;
    font-weight: normal;
    font-family: "proxima_novasemibold";
    display: inline;   
    border-bottom: 3px solid #ff4ba8;
    // margin-bottom: 110px;
  }
}



</style>
