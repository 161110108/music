import React from 'react'
import Head from './index/Head'
import Nav from './index/Nav'
import MyRouter from '../router/MyRouter'
import IndexRoutes from '../router/IndexRoutes'

export default class Index extends React.Component{

    render(){
        return (<div id="index">
            <Head></Head>
            <Nav></Nav>
            <section><MyRouter routes={IndexRoutes}></MyRouter></section>
        </div>)
    }
}