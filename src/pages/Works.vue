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
          a.works__link
            .works__link-img
             img(:src="item.imgUrl")
            .works__link-name {{item.name}}
      
</template>

<script>
export default {
  name: 'Works',
  data: function () { 
    return {
        name: this.$route.name,
        workItems: []
      }
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
    fetchData: function () {
     
      fetch('./static/data/data.json')
        .then(function(response) {
          return response.json();
         })
        .then(function(data) {
          
           this.workItems = data.works;
        })
        .catch( alert );
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
  }
  &__link{
    display: block;
    text-align: center;
    box-shadow: 0 5px 12px 3px rgba(#333,.8);
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
</style>
