<template lang="pug">
  .aside
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
  name: 'Aside'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.aside{
  background-color: rgba(#0a112a,.6);
  width: 25%;
  height: 100%;
  padding: 80px 0 50px;
  display: flex;
  flex-direction: column;
  &__photo{
    height: 30%;
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
  }
  .nav{
    display: flex;
    flex-direction: column;
    height: 60%;
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
