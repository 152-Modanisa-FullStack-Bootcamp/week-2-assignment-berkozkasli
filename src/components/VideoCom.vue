<template>
  <div class="main">
    <div>
      <img :src="pictureHover" @mouseover="hover = true" @mouseleave="hover = false" class="cov_image">
    </div>
    <div class="main_div">
      <div>
        <img :src="videocom.ownerImage" class="user_img">
      </div>
      <div class="all_info">
        <p class="title">{{videocom.title}}</p>
        <p class="username">{{videocom.ownerName}}</p>
        <div class="likes">
          <p class="info">{{videocom.viewCount}} görüntüleme • &nbsp;</p>
          <p class="info"> {{videocom.publishDateInMonth}} ay önce</p>
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'VideoCom',
  props: ["videocom"],
  data () {
    return {
      hover: false
    }
  },
  computed: {
    pictureHover () {
      if (this.hover == true) {
        return this.videocom.hoverImage
      } else {
        return this.videocom.coverImage
      }
    }
  }
  
}
</script>

<style scoped>

.main{
  display: flex;
  flex-direction: column;
  width: 360px;
  margin-left: 10px;
  margin-right: 10px;
}

.cov_image {
  width: 360px;
  height: 200px; 
}

.user_img{
  border-radius: 50%;
  width: 36px;
  height: 36px;
}

.main_div {
  display: flex;
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
}

.info{
  color: #B2B2B2;
  font-size: 15px;
}

</style>
