import { getSongDetail } from '@/service/modules/discover/player'
import { RootState } from '@/store'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchSongDetailAction = createAsyncThunk(
  'fetchCurrentSong',
  async (id: number, { dispatch, getState }) => {
    // 1.判断是否歌曲存在playList中
    const playList = (getState() as RootState).player.playList
    const songIndex = playList.findIndex((item) => item.id === id)

    // 当前歌曲不在歌曲列表中
    if (songIndex === -1) {
      const res = await getSongDetail(id)
      if (res.code === 200) {
        const song = res.songs && res.songs[0]
        if (!song) return
        // 1.添加到playList中
        const newPlayList = [...playList, song]
        dispatch(changePlayListAction(newPlayList))
        // 2.改变当前index 默认添加到末尾
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
        dispatch(changeCurrentSongAction(song))
      }
    } else {
      console.log(dispatch)
    }
  }
)
export enum PLAY_MODE {
  LOOP,
  RANDOM,
  ONE
}
interface Istate {
  currentSong: any
  playList: any[]
  currentLyrics: any[]
  currentSongIndex: number
  playMode: PLAY_MODE
}
const initialState: Istate = {
  currentSong: {
    name: '冷战',
    id: 2100329027,
    pst: 0,
    t: 0,
    ar: [
      {
        id: 1204010,
        name: 'TizzyT',
        tns: [],
        alias: []
      },
      {
        id: 12001060,
        name: 'Vinida (万妮达)',
        tns: [],
        alias: []
      }
    ],
    alia: [],
    pop: 100,
    st: 0,
    rt: '',
    fee: 8,
    v: 1,
    crbt: null,
    cf: '',
    al: {
      id: 179191784,
      name: '做旧',
      picUrl: 'https://p1.music.126.net/NDhXrLIUhtqFchF9ozsE1Q==/109951169058769275.jpg',
      tns: [],
      pic_str: '109951169058769275',
      pic: 109951169058769280
    },
    dt: 223029,
    h: {
      br: 320002,
      fid: 0,
      size: 8923245,
      vd: -46242,
      sr: 48000
    },
    m: {
      br: 192002,
      fid: 0,
      size: 5353965,
      vd: -43640,
      sr: 48000
    },
    l: {
      br: 128002,
      fid: 0,
      size: 3569325,
      vd: -42007,
      sr: 48000
    },
    sq: {
      br: 986043,
      fid: 0,
      size: 27489586,
      vd: -46665,
      sr: 48000
    },
    hr: {
      br: 1755546,
      fid: 0,
      size: 48942316,
      vd: -46260,
      sr: 48000
    },
    a: null,
    cd: '01',
    no: 5,
    rtUrl: null,
    ftype: 0,
    rtUrls: [],
    djId: 0,
    copyright: 0,
    s_id: 0,
    mark: 536879104,
    originCoverType: 1,
    originSongSimpleData: null,
    tagPicList: null,
    resourceState: true,
    version: 1,
    songJumpInfo: null,
    entertainmentTags: null,
    awardTags: null,
    single: 0,
    noCopyrightRcmd: null,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 7002,
    mv: 0,
    publishTime: 0
  },
  currentSongIndex: -1, //当前播放音乐的索引
  currentLyrics: [],
  playList: [], // 播放列表
  playMode: PLAY_MODE.LOOP // 0 顺序播放 1 随机播放 2 单曲循环
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeCurrentLyricsAction(state, { payload }) {
      state.currentLyrics = payload
    },
    changePlayListAction(state, { payload }) {
      state.playList = payload
    },
    changeCurrentSongIndexAction(state, { payload }) {
      state.currentSongIndex = payload
    }
  }
})
export const {
  changeCurrentSongAction,
  changeCurrentLyricsAction,
  changePlayListAction,
  changeCurrentSongIndexAction
} = playerSlice.actions
export default playerSlice.reducer
