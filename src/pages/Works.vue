<template lang="pug">
  .works.content
    h2.content__title {{name}}
    .works__gallery
      ul.works__list
        //- li.works__item
        //-   a.works__link
        //-     .works__link-img
        //-       img(src='../assets/img/32.png')
        //-     .works__link-name Test work
        li.works__item(v-for="(item, index) in workItems")
          a.works__link(v-on:click="openModal")
            .works__link-img
              img(:src="item.imgUrl")
            .works__link-name {{item.name}}
    sweet-modal.modal(ref="modal" modal-theme='dark', overlay-theme='dark')
      .modal__site-name 
      img.modal__img(src='')
      
</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
export default {
  name: 'Works',
  data: function () { 
    return {
        name: this.$route.name,
        workItems: []
      }
  },
  components: { 
    SweetModal,
     SweetModalTab
 },
  created: function () {
    // this.data.push(this.fetchData());
    var vue = this;
    fetch('./static/data/data.json')
        .then(function(response) {
          return response.json();
         })
        .then(function(data) {
          
           vue.workItems = data.works;
        })
        .catch( alert );
  },
  methods: {
    openModal: function (e){

      let target = e.currentTarget,
          siteName = target.querySelector('.works__link-name').innerText,
          imgUrl = target.querySelector('img').getAttribute('src'),
          modal = document.querySelector('.modal'),
          modalSiteName = modal.querySelector('.modal__site-name'),
          modalImg = modal.querySelector('.modal__img');
      modalSiteName.innerText = siteName;
      // modal.setAttribute('title', siteName);
      modalImg.setAttribute('src', imgUrl);
      // console.log(imgUrl);
      this.$refs.modal.open()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.works{
  &__gallery{
    margin-top: 50px;
  }
  &__list{
    list-style: none;
    display: flex;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }
  &__item{
    flex: 0 1 25%;
    margin: 10px;
  }
  &__link{
    display: block;
    text-align: center;
    background-color: rgba(#000,.4);
    box-shadow: 0 5px 12px 3px rgba(#333,.4);
    padding: 10px;
    &-name{
      font-size: 20px;
    }
    &-img{
      width: 100%;
      height: 100px;
      img{
        width: 100%;
        height: 100%;
        object-fit:contain;
      }
    }
  }
}
.modal{
  &__img{
    width: 100%;
  }
}
</style>
