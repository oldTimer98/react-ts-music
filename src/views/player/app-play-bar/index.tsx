import { useAppSelector, useAppShallowEqual } from '@/hooks'
import { getPlayUrl, getSizeImage } from '@/utils'
import {
  AppPlayBarWrapper,
  ControlWrapper,
  HeadWrapper,
  OperatorsWrapper,
  PlayInfoWrapper
} from '@/views/player/app-play-bar/style'
import { Slider } from 'antd'
import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppPlayBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  console.log('first', setProgress)

  // 获取歌曲数据
  const { currentSong, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      playMode: state.player.playMode
    }),
    useAppShallowEqual
  )
  // 音乐播放器实例
  const audioRef = useRef<HTMLAudioElement>(null)

  // 副作用
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.src = getPlayUrl(33894312)
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log('歌曲播放失败：', err)
      })
  }, [currentSong])
  // 方法
  // 播放暂停下一首
  const handlerPlayOn = (flag: string) => {
    if (flag === 'play') {
      setIsPlaying(!isPlaying)
      // 猜测：playing的值已经改变了，但是由于react的机制需要在DOM
      !isPlaying ? audioRef.current?.play() : audioRef.current?.pause()
    } else if (flag === 'prev') {
      console.log(111)
    } else if (flag === 'next') {
      console.log(111)
    }
  }
  return (
    <AppPlayBarWrapper>
      <div className="end-l player-bar">
        <button className="btn player-bar"></button>
      </div>
      <div className="end-r player-bar"></div>
      <div className="bg player-bar"></div>
      <div className="wrap  wrap-v2">
        <ControlWrapper isPlaying={isPlaying}>
          {/* 播放器控制按钮 */}
          <button
            className="btn sprite_playbar prev"
            onClick={() => handlerPlayOn('prev')}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={() => handlerPlayOn('play')}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handlerPlayOn('next')}
          ></button>
        </ControlWrapper>
        <HeadWrapper>
          <img src={getSizeImage(currentSong?.al?.picUrl, 34)} />
          <a href="#" className="mask player-bar"></a>
        </HeadWrapper>
        <PlayInfoWrapper>
          <div className="info">
            <div className="name">{currentSong?.al?.name}</div>
            <div className="ar">
              {currentSong?.ar?.map((item: any, index: number) => (
                <div className="a" key={item.id}>
                  <span>{item.name}</span>
                  {index < currentSong.ar.length - 1 && <span className="line">/</span>}
                </div>
              ))}
            </div>
            <div className="src player-bar"></div>
          </div>
          <div className="bottom">
            {/* Slider组件 */}
            <Slider step={0.5} value={progress} tooltip={{ formatter: null }} />
            <div className="time">
              <div className="current">00:33</div>
              <div className="divider"> / </div>
              <div className="duration">02:25</div>
            </div>
          </div>
        </PlayInfoWrapper>
        <OperatorsWrapper playMode={playMode}>
          <div className="left">
            <button className="btn hua"></button>
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <button className="sprite_playbar btn playlist"></button>
          </div>
        </OperatorsWrapper>
        {/* 播放器 */}
        <audio ref={audioRef} />
      </div>
    </AppPlayBarWrapper>
  )
}

export default memo(AppPlayBar)
