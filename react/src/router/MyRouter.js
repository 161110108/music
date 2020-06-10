import React from 'react';
import {Route,Redirect,Switch} from 'react-router-dom'

export default (props)=>{
    return (<Switch>
        {
            props.routes.map((item,index)=>{
                if(item.path==='*'){
                    return (<Redirect key={index} from='*' to={item.redirect}></Redirect>)
                }else{
                    return (<Route key={index} path={item.path} component={item.component}></Route>)
                }
            })
        }
    </Switch>)
}