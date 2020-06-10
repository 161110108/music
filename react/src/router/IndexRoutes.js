import Recommend from '../components/index/Recommend'
import Search from '../components/index/Search'
import Hot from '../components/index/Hot'

let routes = [
    {path:'/recommend',component:Recommend},
    {path:'/search',component:Search},
    {path:'/hot',component:Hot},
    {path:'*',redirect:'/recommend'}
]

export default routes