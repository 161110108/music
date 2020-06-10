import React from 'react'
 


class Coma extends React.Component{
    constructor(){
        super()
        this.state={
            obj:{
                title:'',
                content:''
            },
            isSave:false
        }
    }
    componentDidMount(){
        
        this.$bus.on('edit',(res)=>{
            let item = this.props.arr[res]
            this.setState({
                isSave:true,
                obj:item
            },()=>{
                console.log(this.state.obj)
            })
        })
    }
    submit(){
        if(this.state.obj.title!='' && this.state.obj.content !=''){
            this.props.addArr(this.state.obj);
            this.setState({
                obj:{title:'',content:''}
            })
        }else{
            alert('不能为空')
        }
        
    }
    saveArr(){
        this.props.updateArr(this.state.obj)
        this.setState({
            isSave:false,
            obj:{title:'',content:''}
        })
    }
    changeobj(key,e){
        let obj = this.state.obj;
        obj[key] = e.target.value;
        this.setState({obj})
    }
    render(){
        return (<div>
            <span>标题</span><input type="text" value={this.state.obj.title} onChange={this.changeobj.bind(this,'title')} /><br/>
            <span>内容</span><input type="text" value={this.state.obj.content} onChange={this.changeobj.bind(this,'content')} /><br/>
            {
                (()=>{
                    if(this.state.isSave){
                        return (<button onClick={this.saveArr.bind(this)}>保存</button>)
                    }else{
                        return (<button onClick={this.submit.bind(this)}>提交</button>)
                    }
                })()
            }
        </div>)
    }
}


export default Coma;
