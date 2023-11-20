import RecommendHeader from '@/components/recommend-header'
import TopRankingItem from '@/components/top-ranking-item'
import { useAppSelector, useAppShallowEqual } from '@/hooks'
import { TopRankingWrapper } from '@/views/discover/c-views/recommend/c-cpns/TopRanking/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { allRankingData } = useAppSelector(
    (state) => ({
      allRankingData: state.commend.allRankingData
    }),
    useAppShallowEqual
  )
  return (
    <TopRankingWrapper>
      <RecommendHeader title="榜单" moreLink="/discover/ranking" />
      <div className="tops">
        <TopRankingItem info={allRankingData[0]} />
        <TopRankingItem info={allRankingData[1]} />
        <TopRankingItem info={allRankingData[2]} />
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
