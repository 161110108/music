import React from 'react'
import $ from 'jquery'

export default class Play extends React.Component {
    constructor() {
        super()
        this.state = {
            paused: true,
            song: {},
            show:false,
            musicUrl:'',
            lyric:null,
            playtime:'00:00'
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        // console.log(id)
        this.$axios.all(this.getData([
            this.$api.songdetail + '?ids=' + id,
            this.$api.musicUrl + '?id=' + id,
            this.$api.lyric + '?id=' + id
        ])).then(res => {
            let song = res[0].data.songs[0]
            let url = res[1].data.data[0].url;
            let lyricData = res[2].data.lrc.lyric
            // console.log(lyric)
            let reg = /\[(.*)](.*)/g
            let lyric = {};
            lyricData.replace(reg,(a,b,c)=>{
                lyric[b.slice(0,5)]=c
            })
            // console.log(lyric)
            this.setState({
                song,
                show:true,
                musicUrl:url,
                lyric
            },()=>{
                let audio = this.refs.audio;
                audio.ontimeupdate=()=>{
                    // console.log(audio.currentTime)
                    let t = this.timeChange(audio.currentTime);
                    if(t in this.state.lyric){
                        this.setState({
                            playtime:t
                        },()=>{
                            let box = this.refs.box
                            let target = this.myref
                            // box.scrollTop = target.offsetTop;
                            if(target.offsetTop>50){
                                $(box).animate({
                                    scrollTop:target.offsetTop-50
                                },500)
                            }
                        })
                    }
                    
                    
                }
            })
        })
    }
    getData = arr => {
        return arr.map(item => {
            return this.$axios.get(item)
        })
    }
    timeChange(t){
        let m = (Math.floor(t/60).toString()).padStart(2,'0'), s = Math.floor(t%60).toString().padStart(2,'0');
        return m+':'+s
    }
    play() {
        let p = !this.state.paused;
        this.setState({
            paused: p
        })
        // console.log(this.refs.audio.currentTime)
        let audio = this.refs.audio;
        if(!p){
            audio.play()
        }else{
            audio.pause()
        }
    }
    back(){
        this.props.history.go(-1)
    }
    render() {
        let { paused, song,show,musicUrl,lyric,playtime } = this.state
        if (show) {
            return (<div id="play">
                <audio src={musicUrl} ref="audio"></audio>
                <div className="head">
                    <span onClick={this.back.bind(this)} className="back iconfont icon-backicon1"></span>
                    <img style={{ transform: paused ? 'rotate(0deg)' : 'rotate(20deg)' }} className="needle" src={require('../images/play/needle-ip6.png')} alt="" />
                    <div className="cd" onClick={this.play.bind(this)}>
                        <img src={song.al.picUrl} alt="" />
                        <span style={{ display: paused ? 'block' : 'none' }} className="iconfont icon-playcircle"></span>
                    </div>
                </div>
                <div className='content'>
                    <p className="title"><span className='songname'>{song.name}</span>-{
                        (() => {
                            if (song.ar) {
                                let arr = song.ar.map(item => { return item.name })
                                return arr.join('、')
                            }
                        
                        })()
                    }</p>
                    <ul className="lyric" ref="box">
                        {
                            Object.entries(lyric).map((item)=>{
                                return (<li key={item[0]} className={item[0]===playtime?'active':''} ref={(ele)=>{if(item[0]===playtime){this.myref=ele}}}>{item[1]}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>)
        }else{
            return(<></>)
        }
    }
}