import AlbumCover from '@/components/album-cover'
import RecommendHeader from '@/components/recommend-header'
import { useAppSelector, useAppShallowEqual } from '@/hooks'
import { NewAlbumWrapper } from '@/views/discover/c-views/recommend/c-cpns/NewAlbum/style'
import { Carousel } from 'antd'
import React, { memo, useRef } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = () => {
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.commend.newAlbums
    }),
    useAppShallowEqual
  )
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  return (
    <NewAlbumWrapper>
      <RecommendHeader title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <div
          className="arrow arrow-left sprite_02"
          onClick={() => carouselRef.current?.prev()}
        ></div>
        <div className="album">
          <Carousel ref={carouselRef} dots={false} speed={1000}>
            {[0, 1].map((item) => {
              return (
                <div className="page" key={item}>
                  {newAlbums &&
                    newAlbums.slice(item * 5, item + 1 * 5)?.map((item) => {
                      return <AlbumCover key={item.id} info={item} />
                    })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div
          className="arrow arrow-right sprite_02"
          onClick={() => carouselRef.current?.next()}
        ></div>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
