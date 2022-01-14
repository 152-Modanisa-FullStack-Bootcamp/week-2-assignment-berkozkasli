<template>
  <div class="main" v-if="favvideocom.favorite">
    <div>
      <img :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false" class="cov_image" @click='watch(favvideocom.id)'>
    </div>
    <div class="main_div">
      
      
        <p class="title">{{favvideocom.title}}</p> 
        
        <div class="likes">
            <p class="info">{{favvideocom.viewCount}} görüntüleme • &nbsp;</p>
            <p class="info"> {{favvideocom.publishDateInMonth}} ay önce</p>
        </div>
        <div class="user">
            <img :src="favvideocom.ownerImage" class="user_img">
            <p class="username">{{favvideocom.ownerName}}</p>
        </div>
        <p>{{favvideocom.description}}</p>
        
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'FavideoCom',
  props: ["favvideocom"],
  data () {
    return {
      hover: false
    }
  },
  computed: {
    pictureHover () {
      if (this.hover == true) {
        return this.favvideocom.hoverImage
      } else {
        return this.favvideocom.coverImage
      }
    }
  },
  methods:{
      favs(){
      this.$router.push("/favorites/bootcamp")
    },
    watch(watch_id){
        this.$router.push("/watch?id=" + watch_id)
    }
  }
  
}
</script>

<style scoped>

.main{
  display: flex;
  flex-direction: row;
  width:    1000px;
  margin-top: 30px;
}

.cov_image {
  width: 360px;
  height: 200px; 
}

.user{
    display:flex;
    flex-direction: row;
}

.user_img{
  border-radius: 50%;
  width: 24px;
  height: 24px;
}

.main_div {
  display: flex;
  flex-direction: column;
  margin-left: 20px;

}

.all_info{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.likes{
  display: flex;
  flex-direction: row;
}

p{
  text-align: left;
  margin-top: 0px;;
  margin-bottom: 3px;
}

.title {
  font-weight: bold;
}

.username{
  color: #A2A2A2;
  font-size: 15px;
  margin-top: 5px;
  margin-left: 5px;
}

.info{
  color: #B2B2B2;
  font-size: 15px;
}

</style>
