export function getSizeImage(imageUrl: string, width: number, height: number = width) {
  return imageUrl + `?param=${width}y${height}`
}

export function getCount(count: number) {
  if (count < 0) return
  if (count < 10000) {
    return count
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + '万'
  } else {
    return Math.floor(count / 10000000) / 10 + '亿'
  }
}

// 获取当前音乐
export function getPlayUrl(id: number) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

// 处理时间函数

export function formatTimeToMinute(params: number) {
  const second = Math.floor(params / 1000) % 60
  const minute = Math.floor(params / 1000 / 60)
  const formatSecond = String(second).padStart(2, '0')
  const formatMinute = String(minute).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}
