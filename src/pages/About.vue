<template lang="pug">
  .about
    h2.content__title {{name}}
    .about__content
      .about__name Maxim Markov
      .about__job Frontend Developer
      .about__desc 
        | Currently curating designs for new startups and founders. Also love to code in Laravel and Ruby
      .about__btns
        router-link.about__btns-hire.about__btn(to='/contact' exact) Hire me
        router-link.about__btns-know.about__btn(to='/works' exact) Know more




</template>

<script>
export default {
  name: 'About',
  data: function () { 
    return {
        name: this.$route.name
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.about{
  &__content{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
  }
  &__name{
    font-family: "proxima_novasemibold";
    font-size: 40px;
    margin-bottom: 20px;
  }
  &__job{
    font-size: 32px;
    font-family:  "proxima_nova_rgregular";
    color: #ff68b6;
    margin-bottom: 40px;
  }
  &__desc{
    font-family: "proxima_nova_thinthin";
    font-size: 24px;
    max-width: 600px;
    opacity: .6;
    margin-bottom: 40px;
  }
  &__btns{
    display: flex;    
    &-hire{
      margin-right: 30px;
    }
  }
  &__btn{
    height: 70px;
    background-color: rgba(#fff,.1);
    text-decoration: none;
    padding: 0 40px;
    color: #fff;
    font-size: 24px;
    display: flex;
    align-items: center;
    &:hover{
      background-color: rgba(255, 75, 168,.4);
    }
  }
}
</style>