import RecommendCover from '@/components/recommend-cover'
import RecommendHeader from '@/components/recommend-header'
import { useAppSelector, useAppShallowEqual } from '@/hooks'
import { HotRecommendWrapper } from '@/views/discover/c-views/recommend/c-cpns/hot-recommend/style'
import React, { memo, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommend } = useAppSelector(
    (state) => ({
      hotRecommend: state.commend.hotRecommend
    }),
    useAppShallowEqual
  )
  const navigate = useNavigate()
  const keywordClick = useCallback(
    (item: string) => {
      navigate('/discover/songs', { state: { cat: item } })
    },
    [navigate]
  )
  return (
    <HotRecommendWrapper>
      <RecommendHeader
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子', 'iKun']}
        moreLink="/discover/songs"
        keywordClick={keywordClick}
      ></RecommendHeader>
      <div className="recommend-list">
        {hotRecommend?.slice(0, 8).map((item) => {
          return <RecommendCover info={item} key={item.id} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
