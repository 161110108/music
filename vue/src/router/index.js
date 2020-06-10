import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Recommend from '@/components/index/Recommend'
import Hot from '@/components/index/Hot'
import Search from '@/components/index/Search'
import Play from '@/components/Play'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/recommend'},
    {path: '/',component: Index,children:[
      {path:'/recommend',component:Recommend},
      {path:'/hot',component:Hot},
      {path:'/search',component:Search}
    ]},
    {path:'/songlist/:id',component:Hot},
    {path:'/play/:id',component:Play},
    {path:'*',redirect:'/'}
  ]
})
