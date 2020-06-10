import React from 'react'
 


class Comb extends React.Component{
   delArr(index){
        this.props.delArr(index)
   }
   edit(index){
       this.$bus.emit('edit',index)
   }
    render(){
        return (<div id="comb">
            <ul>
                <li>
                    <div className="id">编号</div>
                    <div className="title">标题</div>
                    <div className='time'>添加时间</div>      
                    <div className="btn">操作</div>              
                </li>
                {
                    this.props.arr.map((item,index)=>{
                        return (<li key={item.id}>
                            <div className="id">{item.id}</div>
                            <div className="title">{item.title}</div>
                            <div className='time'>{item.time}</div>
                            <div className='btn'>
                                <button onClick={this.edit.bind(this,index)}>编辑</button>
                                <button onClick={this.delArr.bind(this,index)}>删除</button>
                            </div>
                        </li>)
                    })
                }
                <li>
                    <div className="id"></div>
                    <div className="title"></div>
                    <div className='time'></div>      
                    <div className="btn"></div>              
                </li>
                <li>
                    <div className="id"></div>
                    <div className="title"></div>
                    <div className='time'></div>      
                    <div className="btn"></div>              
                </li>
            </ul>
        </div>)
    }
}


export default Comb;