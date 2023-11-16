import { useAppDispatch } from '@/hooks'
import { fetchBannersAction } from '@/store/modules/recommend'
import TopBanner from '@/views/discover/c-views/recommend/c-cpns/top-banner'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 获取数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannersAction())
  }, [])
  return (
    <RecommendWrapper>
      {/* 轮播图 */}
      <TopBanner />
    </RecommendWrapper>
  )
}

export default memo(Recommend)
