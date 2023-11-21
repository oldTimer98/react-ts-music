import { TopRankingWrapper } from '@/components/top-ranking-item/style'
import { useAppDispatch } from '@/hooks'
import {
  changePlayListAction,
  fetchChangeSongAction,
  fetchSongDetailAction
} from '@/store/modules/player'
import { getSizeImage } from '@/utils'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
interface Info {
  coverImgUrl: string
  name: string
  tracks: any[]
}

interface IProps {
  children?: ReactNode
  info: Info
}

const TopRankingItem: FC<IProps> = (props) => {
  const { info } = props

  // 播放
  const dispatch = useAppDispatch()
  const handlePlayMusicClick = (id: number) => {
    dispatch(fetchSongDetailAction(id))
  }
  // 播放全部
  const handlePlayList = () => {
    dispatch(changePlayListAction(info.tracks))
    dispatch(fetchChangeSongAction(true))
  }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info?.coverImgUrl, 80)} alt="" />
          <a href="/todo" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info hover-decoration">
          <a href="/todo">{info?.name}</a>
          <div>
            <button className="btn play sprite_02" onClick={handlePlayList}></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {info?.tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap hover-decoration">{item.name}</span>
                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    onClick={() => handlePlayMusicClick(item.id)}
                  ></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer hover-decoration">
        <a href="/todo">查看全部＞</a>
      </div>
    </TopRankingWrapper>
  )
}

export default memo(TopRankingItem)
