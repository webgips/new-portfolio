<template lang="pug">
  .contact
    h2.content__title {{name}}
    .contact__content
      form.contact__form
        .contact__text Project brief description
        input.contact__form-input(type="text" name="description" required placeholder="Project Type, Target customer, timeline, estimate etc")
        .contact__text About You  
        .contact__form-about-wrap
          input.contact__form-input(type="text" name="name" required placeholder="Full Name")  
          input.contact__form-input(type="email" name="email" required placeholder="Email Address")
          input.contact__form-input(type="text" name="company" required placeholder="Company Name")
          input.contact__form-input(type="text" name="position" required placeholder="Position")
        button.contact__form-submit(type="submit") Request a Quote  

</template>

<script>
export default {
  name: 'Contact',
  data: function () { 
    return {
        name: this.$route.name
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.contact{
  &__form{
    &-input{
      padding: 30px;
      border-width: 0.601px;
      border-color: rgba(255, 255, 255, .3);
      border-style: solid; 
      background-color: rgba(30, 26, 52,.3);
    }
  }
}
</style>
.Rectangle_2 {
  border-width: 0.601px;
  border-color: rgb(255, 255, 255);
  border-style: solid;
  background-color: rgb(30, 26, 52);
  opacity: 0.329;
  position: absolute;
  left: 387px;
  top: 317px;
  width: 997px;
  height: 245px;
  z-index: 28;
}
