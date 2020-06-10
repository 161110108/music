//轮播图
let banner="http://localhost:4000/banner";
//推荐歌单   /personalized?limit=6
let sheet="http://localhost:4000/personalized?limit=6"

//歌单详情    /playlist/detail?id=24381616
let songList="http://localhost:4000/playlist/detail";

//推荐新音乐   /personalized/newsong
let newSong="http://localhost:4000/personalized/newsong";


//排行榜   /top/list?idx=1
let toplist="http://localhost:4000/top/list";


//搜索    /search?keywords= 海阔天空
let search="http://localhost:4000/search";

// 搜索关键词
let searchKeyWord="http://localhost:4000/search/hot"

//歌曲详情   /song/detail?ids=347230
let songdetail="http://localhost:4000/song/detail";

// 音乐url  ?id=
let musicUrl = 'http://localhost:4000/song/url'

// 歌词 ?id
let lyric = 'http://localhost:4000/lyric'

let song = 'http://localhost:4000/song'

export default {
    banner,
    sheet,
    songList,
    newSong,
    toplist,
    songdetail,
    search,
    searchKeyWord,
    musicUrl,
    lyric,
    song
}