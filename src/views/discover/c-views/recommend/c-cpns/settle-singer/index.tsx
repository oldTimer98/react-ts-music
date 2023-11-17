import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  return <div>SettleSinger</div>
}

export default memo(SettleSinger)
