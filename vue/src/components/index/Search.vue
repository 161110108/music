<template>
  <div id="search">
    <div class="search-box">
      <span class="iconfont icon-sousuo"></span>
      <input ref="inp" type="text" v-model="ser" @keyup.enter="search" />
    </div>
    <ul class="clear" v-if="isSer">
      <li class="key-word" v-for="(item,index) in arr" :key="index" @click="choose(item)">{{item}}</li>
    </ul>
    <SongList :arr="songlist" :showNum="false"></SongList>
  </div>
</template>
<script>
import SongList from "../Songlist";
export default {
  components: { SongList },
  data() {
    return {
      arr: [],
      ser: "",
      chooose: null,
      songlist: []
    };
  },
  watch: {
    ser(i) {
      if (i == "") {
        this.songlist = [];
      }
    }
  },
  created() {
    //   改变nav样式
    this.$bus.$emit("link", 2);
    // 获取关键词
    this.$axios.get(this.$api.searchKeyWord).then(res => {
      this.arr = res.data.result.hots.map(item => {
        return item.first;
      });
    });
  },
  computed: {
    isSer() {
      if (this.ser === "") {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    choose(val) {
      this.ser = val;
      this.$refs.inp.focus();
    },
    search() {
      if (this.ser != "") {
        this.$axios
          .get(this.$api.search + "?keywords=" + this.ser)
          .then(res => {
            this.songlist = res.data.result.songs.map(item => {
              return {
                id: item.id,
                name: item.name,
                artists: item.artists,
                songName: item.album.name
              };
            });
          });
      }
    }
  }
};
</script>
