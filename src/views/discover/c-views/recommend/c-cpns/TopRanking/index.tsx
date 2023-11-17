import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  return <div>TopRanking</div>
}

export default memo(TopRanking)
