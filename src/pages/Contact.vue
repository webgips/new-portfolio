<template lang="pug">
  .contact.content
    h2.content__title {{name}}
    .contact__content
      form.contact__form#contact__form(v-on:submit="addMessage")
        .contact__text Project brief description
        .contact__form-row 
          textarea.contact__form-textarea(name="description" minlength="10" required v-model="newMessage.descr" placeholder="Project Type, Target customer, timeline, estimate etc")
        .contact__text About You  
        .contact__form-about-wrap
          .contact__form-row
            input.contact__form-input(type="text" name="name"  minlength="3" v-model="newMessage.name" required placeholder="Full Name")  
            input.contact__form-input(type="email" name="email" required v-model="newMessage.email" placeholder="Email Address")
          .contact__form-row
            input.contact__form-input(type="text" name="company"  v-model="newMessage.company" placeholder="Company Name")
            input.contact__form-input(type="text" name="position"  v-model="newMessage.position" placeholder="Position")
        button.contact__form-submit.btn(type="submit") Request a Quote  

</template>

<script>
import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyCFHTIkgFfmZLscAgQuwqfOIi3lvvy65n8",
    authDomain: "maxim-markov.firebaseapp.com",
    databaseURL: "https://maxim-markov.firebaseio.com/"
    // storageBucket: "...",
    // messagingSenderId: "..."
  };
   
let app = Firebase.initializeApp(config)
let db = app.database()
// var auth = app.auth();
let messagesRef = db.ref('messages')

export default {
  name: 'Contact',
  data: function () { 
    return {
        name: this.$route.name,
        newMessage: {
          name: '',
          email: '',
          descr: '',
          company: '',
          position: ''
        }
      }
  },
  firebase: {
    messages: messagesRef
  },  
  methods: {
    addMessage: function(e) {
      e.preventDefault();
     

      messagesRef.push(this.newMessage)
      this.newMessage.name = '',
      this.newMessage.email = '',
      this.newMessage.descr = '',
      this.newMessage.company = '',
      this.newMessage.position = ''

     
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
        background-color: rgba($active,.4);
      }
    }
  }
}
</style>
