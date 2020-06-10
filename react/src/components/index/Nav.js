import React from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends React.Component{
    render(){
        return (<div id="nav">
            <div><NavLink to='/recommend'>推荐</NavLink></div>
            <div><NavLink to="/hot">热歌榜</NavLink></div>
            <div><NavLink to="/search">搜索</NavLink></div>
        </div>)
    }
}
export default Nav