import React from 'react';
import './index.css'
import Coma from './components/Coma'
import Comb from './components/Comb'
import Router from './components/Router'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            arr:[{title: "广州下大暴雨", content: "这是真的", id: 1, time: "2020-04-06"}],
            id:1
        }
    }
    addArr(val){
        let arr = this.state.arr;
        let id = this.state.id+1;
        // console.log(val)
        let obj = {...val};
        obj.id = id;
        let t = new Date();
        let y = t.getFullYear(),m=t.getMonth(),d=t.getDay();
        m = m>9? m: ('0'+m);
        d = d>9? d: ('0'+d);
        obj.time = y+'-'+m+'-'+d;
        // console.log(obj)
        arr.push(obj);
        this.setState({arr,id},()=>{
            console.log(this.state)
        })
    }
    delArr(index){
        let arr = [...this.state.arr];
        arr.splice(index,1);
        this.setState({arr})
    }
    updateArr(obj){
        let arr = this.state.arr;
        let index = arr.findIndex(item=>{
            return item.id===obj.id
        })
        arr[index] = obj;
        this.setState({arr})
    }
    render(){
        return (

            <Router />
        )
    }
}

export default App