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
  

        //- li.works__item(v-for="(item, index) in workItems")
        //-   a.works__link(v-on:click="openModal")
        //-     .works__link-img
        //-       img(:src="item.imgUrl")
        //-     .works__link-name {{item.name}}

      paginate.paginate-list.works__list(name='workItems', :list='workItems', :per="windowWidth < 480? 4 : 6")
        li.works__item(v-for="(item,index) in paginated('workItems')")
          a.works__link(v-on:click="openModal" :data-link="item.link")
            .works__link-img
              img(:src="item.imgUrl")
            .works__link-name {{item.name}}
      paginate-links(for='workItems', 
                    :simple="{\
                      next: 'Next »',\
                      prev: '« Prev'\
                      }")
                    //- :classes="{\
                    //-   'li': 'paginate-link__item',\
                    //-   'li > a': 'paginate-links__link'\
                    //- }")



    sweet-modal.modal(ref="modal" modal-theme='dark', overlay-theme='dark')
      .modal__site-name 
      a.modal__site-link(href='#' target="_blank")  Link
      .modal__img-wrap
        img.modal__img(src='')
      
</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import Vue from 'vue'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)
export default {
  name: 'Works',
  data: function () { 
    return {
        name: this.$route.name,
        windowWidth: '',
        workItems: [],
        paginate: ['workItems']
      }
  },
  components: { 
    SweetModal,
     SweetModalTab
 },
  created: function () {
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
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);

      //Init
      this.getWindowWidth()
    })

  },
  methods: {
    openModal: function (e){
      let target = e.currentTarget,
          siteName = target.querySelector('.works__link-name').innerText,
          siteLink = target.getAttribute('data-link'),
          imgUrl = target.querySelector('img').getAttribute('src'),
          modal = document.querySelector('.modal'),
          modalSiteName = modal.querySelector('.modal__site-name'),
          modalSiteLink = modal.querySelector('.modal__site-link'),
          modalImg = modal.querySelector('.modal__img');
      modalSiteName.innerText = siteName;
      modalSiteLink.setAttribute('href', siteLink);
      modalImg.setAttribute('src', imgUrl);
      this.$refs.modal.open()
    },
    getWindowWidth(event) {
        this.windowWidth = document.documentElement.clientWidth;

      console.log(this.windowWidth);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../assets/styles/mixins";
.works{
  &__gallery{
    margin-top: 50px;
    @include tablet{
      margin-top: 20px;
    }
  }
  &__list{
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    flex-wrap: wrap;
  }
  &__item{
    flex: 0 1 25%;
    margin: 10px;
    text-align: center;
    @include phones{
      flex: 0 1 40%;
    }
  }
  &__link{
    display: block;
    text-align: center;
    background-color: rgba(#000,.4);
    box-shadow: 0 5px 12px 3px rgba(#333,.4);
    padding: 10px;
    height: 200px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @include tablet{
      height: 150px;
    }
    &-name{
      font-size: 20px;
      @include phones{
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 80px;
        display: block;
      }
    }
    &-img{
      width: 100%;
      height: 80px;
      overflow: hidden;
      img{
        width: 100%;
        // height: 100%;
        object-fit:contain;
      }
    }
  }
}
.modal{
  &__img{
    width: 100%;
  }
  &__site-name{
    font-size: 20px;
    font-family:'proxima_novasemibold';
  }
  &__site-link{
    color: #9ca7ff;
    font-size: 18px;
    display: block;
    margin-bottom: 20px;
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
