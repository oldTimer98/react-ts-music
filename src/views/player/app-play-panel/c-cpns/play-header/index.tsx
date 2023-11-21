import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import { changePlayListAction } from '@/store/modules/player'
import {
  HeaderLeft,
  HeaderRight,
  PlayHeaderWrapper
} from '@/views/player/app-play-panel/c-cpns/play-header/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PlayHeader: FC<IProps> = () => {
  const { playList, currentSong } = useAppSelector(
    (state) => ({
      playList: state.player.playList,
      currentSong: state.player.currentSong
    }),
    useAppShallowEqual
  )
  const dispatch = useAppDispatch()
  const handleClear = () => {
    dispatch(changePlayListAction([]))
  }
  return (
    <PlayHeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button onClick={handleClear}>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>{currentSong.name}</HeaderRight>
    </PlayHeaderWrapper>
  )
}

export default memo(PlayHeader)
