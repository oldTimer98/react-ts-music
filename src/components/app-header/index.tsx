import { HeaderLeft, HeaderRight, ViewWrapper } from '@/components/app-header/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '@/assets/img/logo.png'
import headerTitles from '@/assets/data/header-titles.json'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  // 动态显示item
  const showItem = (item: any) => {
    if (item.type === 'path') {
      return (
        <NavLink to={item.link} className={({ isActive }) => (isActive ? 'active' : undefined)}>
          {item.title}
          <span className="triangle"></span>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <ViewWrapper>
      <div className="flex justify-between wrap-v1 bg-[#242424]">
        <HeaderLeft>
          <div className="logo">
            <a href="/#">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex leading-[70px]">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <span className="input">
            <Input
              className="text-[12px] max-w-[160px] bg-[#FFF] rounded-xl"
              size="large"
              bordered={false}
              prefix={<SearchOutlined />}
              placeholder="音乐/视频/电台/用户"
            />
          </span>
          <span className="center">创作者中心</span>
          <span className="login hover:cursor-pointer">登录</span>
        </HeaderRight>
      </div>
      <div className="h-[5px] bg-[#c20c0c] w-full"></div>
    </ViewWrapper>
  )
}

export default memo(AppHeader)
