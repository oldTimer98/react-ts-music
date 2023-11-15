import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <Link to="/discover/recommend">recommend</Link>
      <Link to="/discover/ranking">ranking</Link>
      <Link to="/discover/artist">artist</Link>
      <Link to="/discover/songs">songs</Link>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
