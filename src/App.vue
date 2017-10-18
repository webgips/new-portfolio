<template lang="pug">
  #app
    sidebar
    
    .content__wrap
      transition(name="rotate" type="")
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
  background-color: rgba(#0a112a,1);
  // flex: 1;
  padding: 80px 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &__wrap{
    position: relative;
    flex: 1;
  }
  &__title{
    color: #fff;
    font-size: 32px;
    font-weight: normal;
    font-family: "proxima_novasemibold";
    display: inline;   
    border-bottom: 3px solid #ff4ba8;
    // margin-bottom: 110px;
  }
}
// transform-origin: 0 50%;
.rotate{
  // &-enter{
  //    transform: translate3d(0,-100%,0) rotateX(-180deg);
  //    backface-visibility: hidden;
  //    // animation: enter  .85s both cubic-bezier(.6,0,.2,1);
  //    transition: all 2s ease;
  // }
  // &-enter-to{
  //   // opacity: 1;
  //   transform: translate3d(0,0,0) rotateX(0);
  //   backface-visibility: hidden;
  //   transition: all 2s ease;
  // }
  // &-leave{
  //   // opacity: 0;
  //   transform: translate3d(0,0,0) rotateX(0);
  //   backface-visibility: hidden;
  //   transition: all 2s ease;
  //   // animation: leave  .85s both cubic-bezier(.6,0,.2,1);
  // }
  // &-leave-to{
  //   transform: translate3d(0,100%,0) rotateX(180deg);
  //   backface-visibility: hidden;
  //   transition: all 2s ease;
  // }
   &-enter{
     transform: rotateX(-180deg);
     filter: blur(5px);
     backface-visibility: hidden;
     // animation: enter  .85s both cubic-bezier(.6,0,.2,1);
     transform-style: preserve-3d;
     transition: all 2s ease;
  }
  &-enter-to{
    // opacity: 1;
    filter: blur(0);
    transform: rotateX(0);
    backface-visibility: hidden;
    transition: all 2s ease;
  }
  &-leave{
    // opacity: 0;
    // animation: right 2s ease;
    transform:  rotateX(0);

    backface-visibility: hidden;
    transition: all 2s ease;
    transform-style: preserve-3d;
    // animation: leave  .85s both cubic-bezier(.6,0,.2,1);
  }
  &-leave-to{
    transform: rotateX(180deg);
    filter: blur(5px);
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: all 2s ease;
  }
}
// @keyframes right{
//   transform: translate(10vw);
//   // transition: all 2s ease;
// }
// @keyframes  leave {

//   10% {
//     transform: translate(10vw);
//     filter: blur(5px);
//   }

//   100%{
//     transform: translate3d(10vw,100%,0) rotateX(180deg);
//     backface-visibility: hidden;
//   }
//   // to {
//   //     opacity: 1;
//   //     -webkit-transform: translateX(100%) rotateY(90deg);
//   //     transform: translateX(100%) rotateY(90deg)
//   // }
// }
// @keyframes enter {
//   from{
//     transform: translate3d(10vw,100%,0) rotateX(180deg);
//     filter: blur(5px);
//   }
//   90%{
//     transform: translate3d(10vw,0,0) rotateX(0);
//     filter: none;
//   }
//   100%{
//     transform: translate3d(0,0,0) rotateX(0);
//     backface-visibility: hidden;
    
//   }
//   // to {
//   //     opacity: 1;
//   //     -webkit-transform: translateX(100%) rotateY(90deg);
//   //     transform: translateX(100%) rotateY(90deg)
//   // }
// }



</style>
