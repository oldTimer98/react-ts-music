import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return <div>HotAnchor</div>
}

export default memo(HotAnchor)
