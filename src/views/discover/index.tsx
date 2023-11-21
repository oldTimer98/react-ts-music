import { DiscoverWrapper, TopMenuWrapper } from '@/views/discover/style'
import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import discoverMenus from '@/assets/data/discover-menus.json'
interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <DiscoverWrapper>
      <div className="discover-header">
        <TopMenuWrapper className="wrap-v1 bg-[#c20c0c]">
          {discoverMenus.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink
                  to={item.link}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {item.title}
                </NavLink>
              </div>
            )
          })}
        </TopMenuWrapper>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
