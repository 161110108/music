import Index from '../components/Index'
import Play from '../components/Play'
import SongList from '../components/index/Hot'

let routes=[
    {path:'/play/:id',component:Play},
    {path:'/songlist/:id',component:SongList},
    {path:'/',component:Index},
    {path:'*',redirect:'/'}
]
export default routes