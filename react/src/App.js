import React from 'react'

import MyRouter from './router/MyRouter'
import PrimaryRoutes from './router/PrimaryRoutes'

class Router extends React.Component{
    render(){
        return (
                <MyRouter routes={PrimaryRoutes}></MyRouter>
        )
    }
}
export default Router