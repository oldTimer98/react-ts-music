import { UserLoginWrapper } from '@/views/discover/c-views/recommend/c-cpns/user-login/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = () => {
  return (
    <UserLoginWrapper className="sprite_02">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <a href="/login" className="sprite_02">
        用户登录
      </a>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
