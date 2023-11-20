import { RecommendCoverWrapper } from '@/components/recommend-cover/style'
import { getCount, getSizeImage } from '@/utils'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
interface Info {
  name: string
  picUrl: string
  coverImgUrl: string
  playCount: number
}
interface IProps {
  children?: ReactNode
  info: Info
}

const RecommendCover: FC<IProps> = (props) => {
  const { info } = props
  return (
    <RecommendCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt="" />
        <div className="cover">
          <div className="info">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap hover-decoration">{info?.name}</div>
    </RecommendCoverWrapper>
  )
}

export default memo(RecommendCover)
