import Request from '@/service'

// 歌曲数据
export function getSongDetail(ids: number) {
  return Request.get({
    url: '/song/detail',
    params: {
      ids
    }
  })
}
// 获取歌词信息
export function getLyric(id: number) {
  return Request.get({
    url: '/lyric',
    params: {
      id
    }
  })
}
