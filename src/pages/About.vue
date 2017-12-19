<template lang="pug">
  .about.content
    h2.content__title {{name}}
    .about__content
      .about__name Maxim Markov
      .about__job Frontend Developer
      .about__desc 
        | I'm a 26-year-old developer from Minsk. I creates websites that are beautiful, interactive, responsive and friendly.
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
@import "./../assets/styles/mixins";
.about{
  &__content{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    @include tablet{
      margin-top: 25px;
    }
  }
  &__name{
    font-family: "proxima_novasemibold";
    font-size: 40px;
    margin-bottom: 20px;
    @include tablet{
      font-size: 32px;
    }
  }
  &__job{
    font-size: 32px;
    font-family:  "proxima_nova_rgregular";
    color: #ff68b6;
    margin-bottom: 40px;
    @include tablet{
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
  &__desc{
    font-family: "proxima_nova_thinthin";
    font-size: 24px;
    max-width: 600px;
    opacity: .6;
    margin-bottom: 40px;
    @include tablet{
      font-size: 18px;
      margin-bottom: 20px;
    }
  }
  &__btns{
    display: flex;
    &-hire{
      margin-right: 30px;
    }
   @include phones{
      display: block;
      &-hire{
        margin-bottom: 20px;
        margin-right: 0;
      }
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
    max-width: 200px;
    min-width: 165px;
    &:hover{
      background-color: rgba($active,.4);
    }
    @include tablet{
      font-size: 20px;
      height: 50px;
      padding: 0 30px;
    }
  }
}
</style>