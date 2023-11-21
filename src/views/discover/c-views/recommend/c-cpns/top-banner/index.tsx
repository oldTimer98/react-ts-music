import { useAppSelector, useAppShallowEqual } from '@/hooks'
import {
  BannerLeft,
  TopBannerWrapper,
  BannerRight,
  BannerControl
} from '@/views/discover/c-views/recommend/c-cpns/top-banner/style'
import React, { memo, useCallback, useRef, useState } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'
import { Carousel } from 'antd'
import classnames from 'classnames'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  // 定义数据
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const { banners } = useAppSelector(
    (state) => ({
      banners: state.commend.banners
    }),
    useAppShallowEqual
  )

  // 获取当前index
  const handleChange = useCallback((current: number, next: number) => {
    setTimeout(() => {
      setCurrentIndex(next)
    }, 0)
  }, [])

  // 获取背景
  const bgImage =
    banners?.[currentIndex] && banners?.[currentIndex].imageUrl + '?imageView&blur=40x20&quot'

  // 处理点击dot事件
  const handleDotClick = (index: number) => {
    bannerRef.current?.goTo(index, false)
  }
  return (
    <TopBannerWrapper
      style={{
        background: `url(${bgImage}) center center / 6000px`
      }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay effect="fade" beforeChange={handleChange} ref={bannerRef} dots={false}>
            {banners &&
              banners.map((item) => {
                return (
                  <div className="item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt="" />
                  </div>
                )
              })}
          </Carousel>
          <div className="carousel-indicators">
            {banners &&
              banners.map((item, index) => {
                return (
                  <span
                    className={classnames('dot', { active: index === currentIndex })}
                    key={item.imageUrl}
                    onClick={() => handleDotClick(index)}
                  ></span>
                )
              })}
          </div>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <div className="arrow left" onClick={() => bannerRef.current?.prev()}>
            <LeftOutlined style={{ fontSize: '35px' }} />
          </div>
          <div className="arrow right" onClick={() => bannerRef.current?.next()}>
            <RightOutlined style={{ fontSize: '35px' }} />
          </div>
        </BannerControl>
      </div>
    </TopBannerWrapper>
  )
}

export default memo(TopBanner)
