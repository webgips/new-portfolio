<template lang="pug">
  .contact.content
    h2.content__title {{name}}
    .contact__content
      form.contact__form#contact__form(v-on:submit="submitForm")
        .contact__text Project brief description
        .contact__form-row 
          textarea.contact__form-textarea(name="description" minlength="10" required placeholder="Project Type, Target customer, timeline, estimate etc")
        .contact__text About You  
        .contact__form-about-wrap
          .contact__form-row
            input.contact__form-input(type="text" name="name"  minlength="3" required placeholder="Full Name")  
            input.contact__form-input(type="email" name="email" required placeholder="Email Address")
          .contact__form-row
            input.contact__form-input(type="text" name="company"  placeholder="Company Name")
            input.contact__form-input(type="text" name="position"  placeholder="Position")
        button.contact__form-submit.btn(type="submit") Request a Quote  

</template>

<script>
export default {
  name: 'Contact',
  data: function () { 
    return {
        name: this.$route.name
      }
  },  
  methods: {
    submitForm: function(e) {
      e.preventDefault();
      // document.getElementById("contact__form").submit();/
      var headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Secure-Token': '57536be9-79df-47ab-86d5-cdb282cc0fc9'
      },
      formData = new FormData(document.getElementById("contact__form")),
      data = {
          'from': 'hello@webgips.tmweb.ru',
          'to': ['webgips@gmail.com'],
          'subject': 'Hello world!',
          'html_body': '<html><body>Hello dear user.</body></html>'
      },
      // url = 'http://api.mailhandler.ru/message/send/',
      url = './mail.php'

      fetch(url,{
         method: 'POST',
         // headers: headers,
         body: formData
      }).then(function(response) {
          // alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
          // alert(response.status); // 200

          return response.json();
         })
        .catch( alert );   



      console.log('otpvravka')
    } 
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../assets/styles/mixins";
.contact{
  &__content{
    margin-top: 50px;
    @include tablet{
      margin-top: 20px;
    }
  }
  &__text{
    font-size: 24px;
    margin-bottom: 20px;
  }
  &__form{
    &-row{
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    &-textarea{
      height: 200px;
      width: 100%;
      resize: none;
      padding: 20px;
      color: #fff;
      font-size: 20px;
      border-width: 0.601px;
      border-color: rgba(255, 255, 255, .3);
      border-style: solid; 
      background-color: rgba(30, 26, 52,.3);
      @include tablet{
        height: 100px;
        padding: 10px;
      }
    }
    &-input{
      height: 60px;
      font-size: 20px;
      color: #fff;
      padding: 0 20px;
      width: 45%;
      // padding: 30px;
      border-width: 0.601px;
      border-color: rgba(255, 255, 255, .3);
      border-style: solid; 
      background-color: rgba(30, 26, 52,.3);
      @include tablet{
        padding: 0 10px;
      }
    }
    &-submit.btn{
      border: none;
      height: 60px;
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
}
</style>
