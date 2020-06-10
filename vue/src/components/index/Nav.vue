<template>
  <div id="nav">
    <div>
      <router-link :class="{active:0==choose}" to="/recommend">推荐</router-link>
    </div>
    <div>
      <router-link :class="{active:1==choose}" to="/hot">热歌榜</router-link>
    </div>
    <div>
      <router-link :class="{active:2==choose}" to="/search">搜索</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      choose:0
    }
  },
  created(){
    this.$bus.$on('link',(res)=>{
      this.choose = res
    })
  }
};
</script>
<style>
</style>