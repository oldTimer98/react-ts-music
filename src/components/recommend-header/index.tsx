import { RecommendHeaderWrapper } from '@/components/recommend-header/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
interface IProps {
  children?: ReactNode
  title?: string
  keywords?: any[]
  moreLink?: string
  moreText?: string
  keywordClick?: (item: string) => void
}

const RecommendHeader: FC<IProps> = (props) => {
  const {
    title = '默认标题',
    keywords = [],
    moreText = '更多',
    moreLink = '/',
    keywordClick = () => {}
  } = props
  return (
    <RecommendHeaderWrapper className="sprite_02">
      <div className="left">
        <div className="title">{title}</div>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <span className="link" onClick={() => keywordClick(item)}>
                  {item}
                </span>
                {index !== keywords.length - 1 && <span className="divider">|</span>}
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <Link to={moreLink}>{moreText}</Link>
        <i className="icon sprite_02"></i>
      </div>
    </RecommendHeaderWrapper>
  )
}

export default memo(RecommendHeader)
