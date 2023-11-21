import RecommendHeader from '@/components/recommend-header'
import { useAppSelector, useAppShallowEqual } from '@/hooks'
import { getSizeImage } from '@/utils'
import { SettleSingerWrapper } from '@/views/discover/c-views/recommend/c-cpns/settle-singer/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { settleSingers } = useAppSelector(
    (state) => ({
      settleSingers: state.commend.settleSingers
    }),
    useAppShallowEqual
  )
  return (
    <SettleSingerWrapper>
      <RecommendHeader title="入驻歌手" moreText="查看全部" />
      <div className="singer-list">
        {settleSingers &&
          settleSingers.map((item) => {
            return (
              <a href="/singer" key={item.id} className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.alias.join('') || item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            )
          })}
      </div>
      <div className="apply-for">
        <a href="/abc">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
}

export default memo(SettleSinger)
