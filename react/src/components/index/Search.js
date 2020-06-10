import React from 'react'
import SongList from '../Songlist'

class Search extends React.Component{
    constructor(){
        super()
        this.state={
            arr:[],
            ser:'',
            chooose:null,
            songlist:[]
        }
    }
    componentDidMount(){
        this.$axios.get(this.$api.searchKeyWord)
        .then(res=>{
            // console.log(res.data.result.hots)
            let arr = res.data.result.hots.map(item=>{
                return item.first
            })
            this.setState({
                arr
            })
        })
    }
    change(e){
        this.setState({
            ser:e.target.value
        })
    }
    choose(index){
        let ser = this.state.arr[index]
        this.setState({
            ser
        })
        this.refs.search.focus();
    }
    search(e){
        if(e.keyCode===13 && this.state.ser!=''){
            this.$axios.get(this.$api.search+'?keywords='+this.state.ser)
            .then(res=>{
                this.setState({
                    songlist:res.data.result.songs
                })
            })
        }
    }
    render(){
        let arr = this.state.songlist.map(item=>{
            return {
                id:item.id,
                name:item.name,
                artists:item.artists,
                songName:item.album.name
            }
        })
        return (<div id="search">
            <div className="search-box">
                <span className="iconfont icon-sousuo"></span>
                <input type="text" value={this.state.ser} ref='search' onChange={this.change.bind(this)} onKeyUp={this.search.bind(this)}/>
            </div>
            <ul className="clear ">
                {
                    (()=>{
                        
                        if(this.state.ser===''){
                            return  this.state.arr.map((item,index)=>{
                                return (<li key={index} className="key-word" onClick={this.choose.bind(this,index)}>{item}</li>)
                            })
                        }
                    })()
                    
                }
            </ul>
            <SongList arr={arr}></SongList>
        </div>)
    }
}

export default Search