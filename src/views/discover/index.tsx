import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return <div>Discover</div>
}

export default memo(Discover)
