<template lang="pug">
  .aside(v-on:click="openMobile()" v-bind:class="{ open : showMobileMenu }")
    a.aside__arrow(v-on:click="openMobile()")
      svg(xmlns='http://www.w3.org/2000/svg', viewbox='0 0 238.003 238.003', width='512', height='512')
        path(d='M181.776 107.72L78.706 4.647c-6.2-6.198-16.274-6.198-22.47 0s-6.2 16.273 0 22.47L148.116 119l-91.882 91.884c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.07-103.04c3.147-3.145 4.673-7.245 4.64-11.282 0-4.13-1.525-8.2-4.64-11.313z', fill='#FFF')

    .aside__photo
      .aside__photo-wrap
        img.aside__photo-img(src="../assets/img/avatar.jpg" alt="Avatar")
    nav.nav
      router-link.nav__link(to='/' exact) About
      router-link.nav__link(to='/works' exact) Work
      router-link.nav__link(to='/contact' exact) Contact 
    ul.socials

</template>

<script>
export default {
  name: 'Aside',
  data: function () { 
    return {
        showMobileMenu: false
      }
  },  
  methods: {
    openMobile: function () {
      console.log(this.showMobileMenu);
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../assets/styles/mixins";
.aside{
  background-color: rgba(#0a112a,1);
  width: 25%;
  height: 100%;
  padding: 80px 0 50px;
  display: flex;
  flex-direction: column;
  @include laptop{
    padding: 4% 0;
  }
  @include tablet{
    transform: translate(-80%);
    transition:  all .3s ease;
    position: absolute;
    z-index: 999;
    width: 300px;
  }
  &.open{
    transform: translate(0);
  }
  &__arrow{
    display: none;
    position: absolute;
    top: 20px;
    right: 10px;
    width: 50px;
    height: 50px;
    svg{
      width: 100%;
      height: 100%;
    }
    @include tablet{
      display: block;
    }
  }
  &__photo{
    // height: 30%;
    min-height: 150px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-wrap{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;

    }
    &-img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @include  laptop{
      min-height: auto;
      // &-wrap{
      //   height: 100px;
      //   width: 100px;
      // }
    }
  }
  .nav{
    display: flex;
    flex-direction: column;
    flex: 1;
    // height: 60%;
    &__link{      
      height: 20%;
      display: flex;
      align-items: center;
      // margin-bottom: 20px;
      padding-left: 70px;
      color: #fff;
      font-size: 24px;
      text-decoration: none;
      position: relative;
      &:hover{
        // font-family: "proxima_nova_rgregular";
        background-color: rgba(#fff, .03);        
      }
      &-active{
        color: #ff4ba8;
        font-family: "proxima_nova_rgregular";
        &:before{
          content: '';
          width: 10px;
          height: 100%;
          background-color: #ff4ba8;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
  }
}

</style>
