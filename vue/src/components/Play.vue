<template>
  <div id="play" v-if="show">
    <audio :src="musicUrl" ref="audio" @timeupdate='update()'></audio>
    <div class="head">
      <span @click="back" class="back iconfont icon-backicon1"></span>
      <img
        :style="{ transform: paused ? 'rotate(0deg)' : 'rotate(20deg)' }"
        class="needle"
        src="../images/play/needle-ip6.png"
        alt
      />
      <div class="cd" @click="play">
        <img :src="song.al.picUrl" alt />
        <span :style="{ display: paused ? 'block' : 'none' }" class="iconfont icon-playcircle"></span>
      </div>
    </div>
    <div class="content">
      <p class="title">
        <span class="songname">{{song.name}}</span>
        -{{songAr(song.ar)}}
      </p>
      <ul class="lyric" ref="box">
        <li
          v-for="item in lyricArr"
          :key="item[0]"
        >
        <div v-if='item[0]===playtime' ref='myref'>{{item[1]}}</div>
        <span v-else>{{item[1]}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paused: true,
      song: {},
      show: false,
      musicUrl: "",
      lyric: null,
      lyricArr: [],
      playtime: "00:00"
    };
  },
  created() {
    let id = this.$route.params.id;
    this.$axios
      .all(
        this.getData([
          this.$api.songdetail + "?ids=" + id,
          this.$api.musicUrl + "?id=" + id,
          this.$api.lyric + "?id=" + id
        ])
      )
      .then(res => {
        let song = res[0].data.songs[0];
        let url = res[1].data.data[0].url;
        let lyricData = res[2].data.lrc.lyric;
        let reg = /\[(.*)](.*)/g;
        let lyric = {};
        lyricData.replace(reg, (a, b, c) => {
          lyric[b.slice(0, 5)] = c;
        });
        this.song = song;
        this.show = true;
        this.musicUrl = url;
        this.lyric = lyric;
        this.lyricArr = Object.entries(lyric);
      });

    // audio.ontimeupdate = ()=>{
    //   let t = this.timeChange(audio.currentTime);
    //   console.log(t)
    // }
    // audio.ontimeupdate = () => {
    //   // console.log(audio.currentTime)
    //   let t = this.timeChange(audio.currentTime);
    //   if (t in this.state.lyric) {
    //     this.setState(
    //       {
    //         playtime: t
    //       },
    //       () => {
    //         let box = this.refs.box;
    //         let target = this.myref;
    //         box.scrollTop = target.offsetTop;
    //         // if (target.offsetTop > 50) {
    //         //   $(box).animate(
    //         //     {
    //         //       scrollTop: target.offsetTop - 50
    //         //     },
    //         //     500
    //         //   );
    //         // }
    //       }
    //     );
    //   }
    // };
  },
  mounted(){

  },
  methods: {
    update(){
      let audio = this.$refs.audio
      // console.log(audio)
      let t = this.timeChange(audio.currentTime);
      if(t in this.lyric){
        console.log(1)
        this.playtime = t;
        let box = this.$refs.box;
        let target = this.$refs.myref[0];
        console.log(target.previousElementSibling)
        target.className = 'active'
        box.scrollTop = target.offsetTop;
      }
    },
    getData(arr) {
      return arr.map(item => {
        return this.$axios.get(item);
      });
    },
    timeChange(t) {
      let m = Math.floor(t / 60)
          .toString()
          .padStart(2, "0"),
        s = Math.floor(t % 60)
          .toString()
          .padStart(2, "0");
      return m + ":" + s;
    },
    back() {
      this.$router.go(-1);
    },
    play() {
      console.log(this.$refs.audio);
      // let audio = this.$refs.audio
      this.paused = !this.paused;
      let audio = this.$refs.audio;
      if (this.paused) {
        audio.pause();
      } else {
        audio.play();
      }
    },
    songAr(ar) {
      let arr = ar.map(item => {
        return item.name;
      });
      return arr.join("、");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
