<template>
  <div class="hello">

    <div class="head_area">
          <button class='btn-primary' @click='favs'>Favorites</button>
    </div>


    <div class="container">
    <favvideocom
    v-for="vid in json"
    :key="vid.id"
    :favvideocom="vid"
    >
      
    </favvideocom>
    </div>
  
  </div>
</template>

<script>

import FavVideoCom from "@/components/FavVideoCom"
import $ from 'jquery'; 

export default {
  name: 'HelloWorld',
  components : { favvideocom : FavVideoCom},
  props: {
    msg: String
  },
  data(){
    return{
      json : null
    }
  },
  created () {
        var _this = this;
        $.getJSON('https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos', function (json) {
            _this.json = json;
        });
    },
  methods:{
    favs(){
      this.$router.push("/favorites/bootcamp")
    },
   
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-content: space-between;
  flex-wrap: wrap;
}

.head_area{
  height: 30px;
  background-color: aquamarine;
  margin-bottom: 40px;
  margin-top: 0;
  display: flex;
  justify-content:flex-end;
}


</style>
