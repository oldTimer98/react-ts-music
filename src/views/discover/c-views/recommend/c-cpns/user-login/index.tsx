import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = () => {
  return <div>UserLogin</div>
}

export default memo(UserLogin)
