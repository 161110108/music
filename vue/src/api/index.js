//轮播图
let banner="/api/banner";
//推荐歌单   /personalized?limit=6
let sheet="/api/personalized?limit=6"

//歌单详情    /playlist/detail?id=24381616
let songList="/api/playlist/detail";

//推荐新音乐   /personalized/newsong
let newSong="/api/personalized/newsong";


//排行榜   /top/list?idx=1
let toplist="/api/top/list";


//搜索    /search?keywords= 海阔天空
let search="/api/search";

// 搜索关键词
let searchKeyWord="/api/search/hot"

//歌曲详情   /song/detail?ids=347230
let songdetail="/api/song/detail";

// 音乐url  ?id=
let musicUrl = '/api/song/url'

// 歌词 ?id
let lyric = '/api/lyric'

let song = '/api/song'

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