<template>
  <div >
    You are watching : {{watch_id}}
  </div>
</template>

<script>

export default {
  name: 'Watch',
  components: {
    
  },
  data(){
    return{
      watch_id : null
    }
  },
  created (){
      this.watch_id = this.$route.query.id;
  }
}
</script>

<style>

</style>
