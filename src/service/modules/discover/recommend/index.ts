import Request from '@/service'

// 轮播图
export function getBanners() {
  return Request.get({
    url: '/banner'
  })
}
// 热门推荐
export function getHotRecommend(limit = 30) {
  return Request.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}
// 新碟上架
export function getNewAlbum() {
  return Request.get({
    url: '/album/newest'
  })
}
// 榜单
export function getPlaylistDetail(id: number) {
  return Request.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}
// 歌手
export function getArtistList(limit = 30) {
  return Request.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
