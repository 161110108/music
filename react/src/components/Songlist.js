import React from 'react'
import {withRouter} from 'react-router-dom'
// 参数：arr:{id,name,artists,songname}, showNum

class Songlist extends React.Component{
    static defaultProps={
        showNum:false
    }
    jump(id){
        this.props.history.push('/play/'+id)
    }
    render(){
        return (<ul className="news">
            {
                this.props.arr.map((item,i)=>{
                    return (<li onClick={this.jump.bind(this,item.id)} key={item.id} className="item">
                        {
                            (()=>{
                                if(this.props.showNum){
                                    return (<div className="num">{i > 8 ? i + 1 : '0' + (i + 1)}</div>)
                                }
                            })()
                        }
                        <div className="left">
                            <p className="name">{item.name}</p>
                            <p className="info">
                                <span className="quality"></span>
                                {
                                    (()=>{
                                        let arr = item.artists.map(item=>{
                                            return item.name
                                        });
                                        return arr.join('、')
                                    })()
                                }-{item.songName}
                            </p>
                        </div>
                        <span className="right iconfont icon-playcircle"></span>
                    </li>)
                })
            }
        </ul>)
    }
}

export default withRouter(Songlist)