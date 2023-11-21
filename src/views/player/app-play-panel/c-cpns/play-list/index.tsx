import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import { fetchSongDetailAction } from '@/store/modules/player'
import { formatTimeToMinute } from '@/utils'
import { PlayListWrapper } from '@/views/player/app-play-panel/c-cpns/play-list/style'
import classNames from 'classnames'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PlayList: FC<IProps> = () => {
  const { playList, currentSongIndex } = useAppSelector(
    (state) => ({
      playList: state.player.playList,
      currentSongIndex: state.player.currentSongIndex
    }),
    useAppShallowEqual
  )

  const dispatch = useAppDispatch()
  const handlePlayMusic = (id: number) => {
    dispatch(fetchSongDetailAction(id))
  }
  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classNames('play-item', { active: currentSongIndex === index })}
            onClick={() => handlePlayMusic(item.id)}
          >
            <div className="left">{item.name}</div>
            <div className="right">
              <span className="singer">{item.ar[0].name}</span>
              <span className="duration">{formatTimeToMinute(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        )
      })}
    </PlayListWrapper>
  )
}

export default memo(PlayList)
