import RecommendHeader from '@/components/recommend-header'
import { HotAnchorWrapper } from '@/views/discover/c-views/recommend/c-cpns/hot-anchor/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import HotAnchorData from '@/assets/data/hot-anchor.json'
interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <HotAnchorWrapper>
      <RecommendHeader title="热门主播" />
      <div className="radio-list">
        {HotAnchorData.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/abc" className="image">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
}

export default memo(HotAnchor)
