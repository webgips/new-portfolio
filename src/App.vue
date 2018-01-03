<template lang="pug">
  #app
    sidebar
    .content__wrap
      transition(name="slide" type="")
        router-view
</template>

<script>
import sidebar from './components/Aside.vue'

export default {  
  components: {
    sidebar
  },  
  name: 'app', 
  metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: 'Maxim Markov portfolio',
      meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
</script>

<style lang="scss">
//fonts
@import "./assets/fonts/fonts.scss";
@import "./assets/styles/mixins";

*{
  box-sizing: border-box;
}
body,html{
  height: 100%;
  min-height: 100%;
  width: 100%;
}
body{
    // height: 100vh;
    // width: 100vw;    
    min-height: 100%;
    // min-height: 800px;    
    background-image: url('./assets/img/bg.jpg');
    background-repeat:  no-repeat;
    background-position:  center;
    background-size: cover;
    overflow: hidden;
    margin: 0;
    font-family: "proxima_novalight";
    // @include laptop{
    //   height: auto;
    // }
    @include phones{
      background-image: url('./assets/img/bg_mobile.jpg');
    }
}
#app{
    width: 100%;
    height: 100%;    
    // background: url('./assets/img/glassy-effect.png') no-repeat center;
    display: flex;    
    color: #fff;
    
}
.content{
 
  // flex: 1;
  padding: 80px 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  @include notebook{
    padding: 40px;
  }
  &__wrap{
    position: relative;
    flex: 1;
    overflow: hidden;
    background-color: rgba(#0a112a,.7);
  }
  &__title{
    color: #fff;
    font-size: 32px;
    font-weight: normal;
    font-family: "proxima_novasemibold";
    display: inline;   
    border-bottom: 3px solid $active;
    // border-bottom: 3px solid #ff4ba8;
    // margin-bottom: 110px;
    @include tablet{
      font-size: 24px;
    }
  }
}
.slide{
   &-enter{
     transform: translate(0,100%);
     backface-visibility: hidden;
     // animation: enter  .85s both cubic-bezier(.6,0,.2,1);
    
     transition: all 1s ease;
    //   position: relative;
    // z-index: 1;
  }
  &-enter-to{
    transform: translate(0,0);
    backface-visibility: hidden;
    transition: all 1s ease;
    //  position: relative;
    // z-index: ;
  }
  &-leave{
    // opacity: 0;
    // animation: right 2s ease;
    transform: translate(0,0);

    backface-visibility: hidden;
    transition: all 1s ease;
    transform-style: preserve-3d;
    // position: relative;
    // z-index: 5;
    // animation: leave  .85s both cubic-bezier(.6,0,.2,1);
  }
  &-leave-to{
    transform: translate(0,-100%);
    //  position: relative;
    // z-index: 5;
    transform-style: preserve-3d;
    transition: all 1s ease;
  }
}
.paginate-links.workItems {
  width: 200px;
  list-style: none;
  display: flex;
  padding: 0;
  justify-content: space-between;
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform:translate(-50%);
  user-select: none;
  li{
    &.disabled a{
      opacity: .5;
      cursor: no-drop;
    }
    a{
      cursor: pointer;
      &:hover{
        color: $active;
      }
    }
  }
  
}

</style>
