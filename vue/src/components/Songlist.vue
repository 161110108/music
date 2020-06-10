// 参数：arr:{id,name,artists,songname}, showNum
<template>
  <ul class="news">
    <li v-for="(item,i) in arr" :key="item.id" class="item" @click="jumpPlay(item.id)">
      <div v-if="showNum" class="num">{{i > 8 ? i + 1 : '0' + (i + 1)}}</div>
      <div class="left">
        <p class="name">{{item.name}}</p>
        <p class="info">
          <span class="quality"></span>
          {{showAr(item.artists)}}-{{item.songName}}
        </p>
      </div>
      <span class="right iconfont icon-playcircle"></span>

    </li>
  </ul>
</template>

<script>
export default {
  props: ["arr", "showNum"],
  created() {},
  methods:{
    jumpPlay(id){
      this.$router.push('/play/'+id)
    },
    showAr(ar){
      let arr =  ar.map(item=>{
        return item.name
      })
      return arr.join(',')
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
