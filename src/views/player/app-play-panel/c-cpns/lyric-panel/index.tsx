import { useAppSelector, useAppShallowEqual } from '@/hooks'
import { LyricPanelWrapper } from '@/views/player/app-play-panel/c-cpns/lyric-panel/style'
import classNames from 'classnames'
import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { scrollTo } from '@/utils/ui-helper'
interface IProps {
  children?: ReactNode
}

const LyricPanel: FC<IProps> = () => {
  const { currentLyrics, lyricIndex } = useAppSelector(
    (state) => ({
      currentLyrics: state.player.currentLyrics,
      lyricIndex: state.player.lyricIndex
    }),
    useAppShallowEqual
  )

  const panelRef = useRef()

  useEffect(() => {
    if (lyricIndex > 0 && lyricIndex < 3) return
    panelRef.current && scrollTo(panelRef.current, (lyricIndex - 3) * 32, 300)
  }, [lyricIndex])
  return (
    <LyricPanelWrapper ref={panelRef}>
      <div className="lrc-content">
        {currentLyrics.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames('lrc-item', { active: index === lyricIndex })}
            >
              {item.text}
            </div>
          )
        })}
      </div>
    </LyricPanelWrapper>
  )
}

export default memo(LyricPanel)
