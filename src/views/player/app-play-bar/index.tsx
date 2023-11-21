import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import {
  changeCurrentLyricIndexAction,
  changePlayModeAction,
  changeShowBottomAction,
  fetchChangeSongAction
} from '@/store/modules/player'
import { formatTimeToMinute, getPlayUrl, getSizeImage } from '@/utils'
import {
  AppPlayBarWrapper,
  ControlWrapper,
  HeadWrapper,
  OperatorsWrapper,
  PlayInfoWrapper
} from '@/views/player/app-play-bar/style'
import AppPlayPanel from '@/views/player/app-play-panel'
import { Slider, message } from 'antd'
import classNames from 'classnames'
import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppPlayBar: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false) // 是否播放
  const [progress, setProgress] = useState(0) // 进度条
  const [duration, setDuration] = useState(0) // 总时间
  const [currentTime, setCurrentTime] = useState(0)
  const [isChanging, setIsChanging] = useState(false)
  const [isShowLyrics, setIsShowLyrics] = useState(true)
  const [showPanel, setShowPanel] = useState(false)
  // 获取歌曲数据
  const { currentSong, playMode, currentLyrics, lyricIndex, showBottom, playList } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      playMode: state.player.playMode,
      currentLyrics: state.player.currentLyrics,
      lyricIndex: state.player.lyricIndex,
      showBottom: state.player.showBottom,
      playList: state.player.playList
    }),
    useAppShallowEqual
  )
  const dispatch = useAppDispatch()
  const [messageApi, contextHolder] = message.useMessage()
  // 音乐播放器实例
  const audioRef = useRef<HTMLAudioElement>(null)

  // 副作用
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.src = getPlayUrl(currentSong.id)
    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch((err) => {
        setIsPlaying(false)
        console.log('歌曲播放失败：', err)
      })
    // 获取总时长
    setDuration(currentSong?.dt)
  }, [currentSong])

  // 方法
  // 播放暂停下一首
  const handlerPlayOn = (flag: string) => {
    if (flag === 'play') {
      setIsPlaying(!isPlaying)
      // 猜测：playing的值已经改变了，但是由于react的机制需要在DOM
      isPlaying
        ? audioRef.current?.pause()
        : audioRef.current
            ?.play()
            .then(() => {
              setIsPlaying(true)
            })
            .catch((err) => {
              setIsPlaying(false)
              console.log('歌曲播放失败：', err)
            })
    } else if (flag === 'prev') {
      dispatch(fetchChangeSongAction(false))
    } else if (flag === 'next') {
      dispatch(fetchChangeSongAction(true))
    }
  }
  // 监听音乐的时间更新
  const handlerTimeUpDate = () => {
    if (!audioRef.current) return
    const currentTime = audioRef.current?.currentTime * 1000
    // 计算歌曲进度 -- 只有在没有滑动的时候去更新

    if (!isChanging) {
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)
    }

    if (!isShowLyrics) {
      messageApi.destroy('lyric')
    }
    // 显示歌词 -- 计算歌词进度
    let index = currentLyrics.length - 1
    for (let i = 0; i < currentLyrics.length; i++) {
      const lyric = currentLyrics[i]
      if (lyric.time > currentTime) {
        index = i - 1
        break
      }
    }
    if (lyricIndex === index || index === -1) return
    dispatch(changeCurrentLyricIndexAction(index))
    // 展示歌词
    isShowLyrics &&
      currentLyrics[index]?.text &&
      messageApi.open({
        content: currentLyrics[index]?.text,
        key: 'lyric',
        duration: 0
      })
  }

  // 音乐播放结束逻辑
  const handlerEnded = () => {
    if (playMode === 2) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play()
    } else {
      // 切换音乐
      dispatch(fetchChangeSongAction(true))
    }
  }

  // 点击slider
  const handleSliderClick = useCallback(
    (value: number) => {
      if (!audioRef.current) return
      const currentTime = (value / 100) * duration
      audioRef.current.currentTime = currentTime / 1000
      setCurrentTime(currentTime)
      setProgress(value)
      setIsChanging(false)
    },
    [duration]
  )
  // 滑块变化
  const handleSliderChange = useCallback(
    (value: number) => {
      const currentTime = (value / 100) * duration
      setCurrentTime(currentTime)
      setProgress(value)
      setIsChanging(true)
    },
    [duration]
  )
  // 音乐模式切换
  const handlePlayMode = () => {
    let newPlayMode = playMode + 1
    if (newPlayMode > 2) newPlayMode = 0
    dispatch(changePlayModeAction(newPlayMode))
  }
  const handleShowLyric = () => {
    setIsShowLyrics(!isShowLyrics)
  }
  // 显示bottom
  const handleShowBottom = () => {
    dispatch(changeShowBottomAction(!showBottom))
  }
  // 显示panel
  const handleShowPanel = () => {
    setShowPanel(!showPanel)
    setIsShowLyrics(showPanel)
  }
  return (
    <>
      {contextHolder}
      <AppPlayBarWrapper>
        <div className="end-l player-bar" onClick={handleShowBottom}>
          <button className="btn player-bar"></button>
        </div>
        {showBottom && (
          <>
            <div className="end-r player-bar"></div>
            <div className="bg player-bar"></div>
            <div className="wrap  wrap-v2">
              <ControlWrapper>
                {/* 播放器控制按钮 */}
                <button
                  className="btn sprite_playbar prev"
                  onClick={() => handlerPlayOn('prev')}
                ></button>
                <button
                  className={classNames('player-bar', isPlaying ? 'pause' : 'play')}
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
                  <Slider
                    step={0.5}
                    value={progress}
                    tooltip={{ formatter: null }}
                    onAfterChange={handleSliderClick}
                    onChange={handleSliderChange}
                  />
                  <div className="time">
                    <div className="current">{formatTimeToMinute(currentTime)}</div>
                    <div className="divider"> / </div>
                    <div className="duration">{formatTimeToMinute(duration)}</div>
                  </div>
                </div>
              </PlayInfoWrapper>
              <OperatorsWrapper playMode={playMode}>
                <div className="left">
                  <button className="btn hua" onClick={handleShowLyric}></button>
                  <button className="sprite_playbar btn favor"></button>
                  <button className="sprite_playbar btn share"></button>
                </div>
                <div className="right sprite_playbar">
                  <button className="sprite_playbar btn volume"></button>
                  <button className="sprite_playbar btn loop" onClick={handlePlayMode}></button>
                  <button className="sprite_playbar btn playlist" onClick={handleShowPanel}>
                    {playList.length}
                  </button>
                </div>
              </OperatorsWrapper>
              {/* 播放器 */}
              <audio
                ref={audioRef}
                autoPlay
                onTimeUpdate={handlerTimeUpDate}
                onEnded={handlerEnded}
              />
            </div>
          </>
        )}
        {showPanel && <AppPlayPanel />}
      </AppPlayBarWrapper>
    </>
  )
}

export default memo(AppPlayBar)
