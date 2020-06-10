import React from 'react'
import Swiper from '../Swiper'
import SongList from '../Songlist'


class Index extends React.Component{
    constructor(){
        super();
        this.state={
            banner:[],
            sheetArr:[],
            musicArr:[]
        }
    }
    getData(urlArr){
        return urlArr.map(url=>{
            return this.$axios.get(url)
        })
    }
    componentDidMount(){
        // this.$axios.all([this.getData(this.$api.sheet),this.getData(this.$api.newSong)])
        this.$axios.all(this.getData([this.$api.banner,this.$api.sheet,this.$api.newSong]))
        .then(this.$axios.spread((banner,sheetArr,musicArr)=>{
            this.setState({
                sheetArr:sheetArr.data.result,
                musicArr:musicArr.data.result,
                banner:banner.data.banners
            })
        }))
    }
    jumpSheet(id){
        // console.log(this.props.history)
        this.props.history.push('/songlist/'+id)
    }
    render(){
        let arr = this.state.banner.map(item=>{
            return item.imageUrl
        })
        let songlist = this.state.musicArr.map(item=>{
            return {
                id:item.id,
                name:item.name,
                artists:item.song.artists,
                songName:item.song.name
            }
        })
        // console.log(songlist)
        return (<div id="recommend">
            <div className="swrap"><Swiper arr={arr}></Swiper></div>
            <div className="sheet-box">
                <h3>推荐歌单</h3>
                <ul className="clear">
                    {
                        this.state.sheetArr.map(item=>{
                            return (<li key={item.id} className="fl sheet" onClick={this.jumpSheet.bind(this,item.id)}>
                            <img src={item.picUrl} alt="加载中" />
                            <p className="name">
                            {item.name}
                            </p>
                        </li>)
                        })
                    }
                </ul>
            </div>
            <div className="news-box">
                <h3>最新音乐</h3>
                <SongList arr={songlist}></SongList>
            </div>
        </div>)
    }
}

export default Index