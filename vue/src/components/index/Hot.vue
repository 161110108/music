<template>
  <div id="hot">
    <div v-if="isId">
      <span @click="back" class="iconfont icon-backicon1 back"></span>
      <div class="img-box">
        <div class="img-list" :style="{'backgroundImage':'url('+bgImg+')'}"></div>
        <div class="show">
          <img :src="bgImg" alt />
          <p>{{title}}</p>
        </div>
      </div>
    </div>
    <div class="img" v-else>
      <div class="hot-img"></div>
      <p class="time">更新时间：{{this.time}}</p>
    </div>

    <SongList :showNum="true" :arr="songlist"></SongList>
  </div>
</template>
<script>
import SongList from "../Songlist";
export default {
  components: { SongList },
  data() {
    return {
      arr: [],
      time: "",
      isId: false,
      bgImg: "",
      title: "",
      songlist: []
    };
  },
  created() {
    if (this.$route.params.id) {
      this.$axios
        .get(this.$api.songList + "?id=" + this.$route.params.id)
        .then(res => {
          this.bgImg = res.data.playlist.coverImgUrl;
          this.arr = res.data.playlist.tracks;
          this.isId = true;
          this.title = res.data.playlist.name;
          this.songlist = this.arr.map(item => {
            return {
              id: item.id,
              name: item.name,
              artists: item.ar,
              songName: item.al.name
            };
          });
        });
    } else {
      this.$bus.$emit("link", 1);
      this.$axios.get(this.$api.toplist + "?idx=1").then(res => {
        let a = new Date(res.data.playlist.updateTime);
        let m = a.getMonth();
        m = m > 9 ? m : "0" + m;
        let d = a.getDay();
        d = d > 9 ? d : "0" + d;
        this.arr = res.data.playlist.tracks.slice(0, 30);
        
        this.time = m + "月" + d + "日";
        this.songlist = this.arr.map(item => {
          return {
            id: item.id,
            name: item.name,
            artists: item.ar,
            songName: item.al.name
          };
        });
      });
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },

  }
};
</script>
<style>
</style>