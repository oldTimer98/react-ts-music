import { HeaderLeft, ViewWrapper } from '@/components/app-header/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/img/logo.png'
import headerTitles from '@/assets/data/header-titles.json'
interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  // 动态显示item
  const showItem = (item: any) => {
    if (item.type === 'path') {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      return (
        <a href={item.link} rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <ViewWrapper>
      <div className="flex justify-between">
        <HeaderLeft>
          <div className="logo">
            <a href="/#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="title-list">
            {headerTitles.map((item) => {
              return <div key={item.title}>{showItem(item)}</div>
            })}
          </div>
        </HeaderLeft>
      </div>
    </ViewWrapper>
  )
}

export default memo(AppHeader)
