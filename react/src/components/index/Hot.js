import React from 'react'
import SongList from '../Songlist'
class Detail extends React.Component {
    constructor() {
        super()
        this.state = {
            arr: [],
            time: '',
            isId: false,
            bgImg: '',
            title:'',
        }
    }
    componentDidMount() {
        if (this.props.match.params.id) {
            this.$axios.get(this.$api.songList + '?id=' + this.props.match.params.id)
                .then(res => {
                    this.setState({
                        bgImg: res.data.playlist.coverImgUrl,
                        arr: res.data.playlist.tracks,
                        isId: true,
                        title:res.data.playlist.name
                    })
                })
        } else {
            this.$axios.get(this.$api.toplist + '?idx=1')
                .then(res => {
                    let a = new Date(res.data.playlist.updateTime)
                    let m = a.getMonth(); m = m > 9 ? m : '0' + m
                    let d = a.getDay(); d = d > 9 ? d : '0' + d
                    this.setState({
                        arr: res.data.playlist.tracks.slice(0, 30),
                        time: m + '月' + d + '日'
                    })
                })
        }
    }
    back(){
        this.props.history.go(-1)
    }
    render() {
        let arr = this.state.arr.map(item=>{
            return {
                id:item.id,
                name:item.name,
                artists:item.ar,
                songName:item.al.name
            }
        })
        return (<div id="hot">

            {
                (
                    () => {
                        if (this.state.isId) {
                            return (<>
                            <span onClick={this.back.bind(this)} className="iconfont icon-backicon1 back"></span>
                            <div className="img-box">
                                <div className='img-list' style={{'backgroundImage':'url('+this.state.bgImg+')'}}></div>
                                <div className="show">
                                    <img src={this.state.bgImg} alt=""/>
                                    <p>{this.state.title}</p>
                                </div>
                            </div>
                            </>)
                        } else {
                            return (<div className="img" >
                                <div className="hot-img"></div>
                                <p className='time'>更新时间：{this.state.time}</p>
                            </div>)
                        }
                    }
                )()
            }

            {/* <ul className="news">
                {
                    this.state.arr.map((item, i) => {
                        return (<li key={item.id} className="item">
                            
                            <div className="left">
                                <p className="name">{item.name}</p>
                                <p className="info">
                                    <span className="quality"></span>
                                    {item.ar[0].name}-{item.al.name}
                                </p>
                            </div>
                            <span className="right iconfont icon-playcircle"></span>
                        </li>)
                    })
                }
            </ul> */}
            <SongList showNum={true} arr={arr}></SongList>
        </div>)
    }
}
export default Detail