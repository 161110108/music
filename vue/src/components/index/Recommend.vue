<template>
  <div id="recommend">
    <div class="swrap">
      <Swiper :arr="banners"></Swiper>
    </div>
    <div class="sheet-box">
      <h3>推荐歌单</h3>
      <ul class="clear">
        <li v-for="item in sheetArr" :key="item.id" class="sheet" @click="jumpSheet(item.id)" >
          <img :src="item.picUrl" alt="加载中" />
          <p class="name">{{item.name}}</p>
        </li>
      </ul>
    </div>
    <div class="news-box">
      <h3>最新音乐</h3>
      <SongList :arr="songlist" :showNum='false'></SongList>
    </div>
  </div>
</template>
<script>
import Swiper from "../Swiper";
import SongList from '../Songlist'
export default {
  components: { Swiper, SongList },
  data() {
    return {
      sheetArr: [],
      banners: [],
      musicArr: [],
      songlist:[]
    };
  },
  methods: {
    getData(arr) {
      return arr.map(item => {
        return this.$axios.get(item);
      });
    },
    jumpSheet(id){
        this.$router.push('./songlist/'+id)
    }
  },
  created() {
    this.$bus.$emit('link',0)
    this.$axios
      .all(this.getData([this.$api.banner, this.$api.sheet, this.$api.newSong]))
      .then(res => {
        this.banners = res[0].data.banners;
        this.sheetArr = res[1].data.result;
        this.musicArr = res[2].data.result;
        this.songlist = this.musicArr.map(item=>{
            return {
                id:item.id,
                name:item.name,
                artists:item.song.artists,
                songName:item.song.name
            }
        })
      });
  }
};
</script>
<style scoped>
</style>