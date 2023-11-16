import Request from '@/service'

// 轮播图
export function getBanners() {
  return Request.get({
    url: '/banner'
  })
}
