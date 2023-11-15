import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return <RecommendWrapper>Recommend</RecommendWrapper>
}

export default memo(Recommend)
