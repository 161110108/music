import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'

import Index from './components/Index';
import Detail from './components/Detail';

class Router extends React.Component{
    render(){
        return (
            <BrowserRouter>
                <Link to='/'>首页</Link>
                <Link to="/detail">详情页</Link>
                <Switch>
                    <Route path="/detail" component={Detail}></Route>
                    <Route exact path='/' component={Index}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Router