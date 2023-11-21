import { getLyric, getSongDetail } from '@/service/modules/discover/player'
import { RootState } from '@/store'
import { ILyric, parseLyric } from '@/utils'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 获取歌曲信息
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
      const song = playList[songIndex]
      dispatch(changeCurrentSongAction(song))
      dispatch(changeCurrentSongIndexAction(songIndex))
    }

    // 获取歌词
    const res = await getLyric(id)
    if (res.code === 200) {
      // 处理歌词
      const result = parseLyric(res.lrc.lyric)
      dispatch(changeCurrentLyricsAction(result))
    }
  }
)
// 切换歌曲
export const fetchChangeSongAction = createAsyncThunk(
  'fetchSongChange',
  async (isNext: boolean, { dispatch, getState }) => {
    // 拿到state中的数据
    const { playList, playMode, currentSongIndex } = (getState() as RootState).player

    if (!playList.length) return
    let newCurrentSongIndex = currentSongIndex
    // 根据播放模式，切换歌曲
    switch (playMode) {
      case PLAY_MODE.RANDOM:
        newCurrentSongIndex = Math.floor(Math.random() * playList.length)
        break
      default:
        newCurrentSongIndex = isNext ? currentSongIndex + 1 : currentSongIndex - 1
        if (newCurrentSongIndex >= playList.length) newCurrentSongIndex = 0
        if (newCurrentSongIndex < 0) newCurrentSongIndex = playList.length - 1
        break
    }
    console.log(`当前模式为${playMode},随机数为${newCurrentSongIndex}`)
    // 歌曲变更
    const song = playList[newCurrentSongIndex]
    dispatch(changeCurrentSongAction(song))
    dispatch(changeCurrentSongIndexAction(newCurrentSongIndex))
    // 获取歌词
    const res = await getLyric(song.id)
    if (res.code === 200) {
      // 处理歌词
      const result = parseLyric(res.lrc.lyric)
      dispatch(changeCurrentLyricsAction(result))
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
  currentLyrics: ILyric[]
  currentSongIndex: number
  lyricIndex: number
  playMode: PLAY_MODE
  showBottom: boolean
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
  currentSongIndex: -1, // 当前播放音乐的索引
  lyricIndex: -1, // 当前歌词索引
  currentLyrics: [],
  playList: [
    {
      name: '如果这就是爱情',
      id: 2097531989,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 32220939,
          name: 'en',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 5,
      crbt: null,
      cf: '',
      al: {
        id: 178525449,
        name: '如果这就是爱情',
        picUrl: 'https://p2.music.126.net/dGy0hYxS0EtrTuoQ_LzmaQ==/109951169038655532.jpg',
        tns: [],
        pic_str: '109951169038655532',
        pic: 109951169038655540
      },
      dt: 259934,
      h: {
        br: 320000,
        fid: 0,
        size: 10399913,
        vd: -66635,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6239965,
        vd: -64052,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4159991,
        vd: -62445,
        sr: 44100
      },
      sq: {
        br: 891804,
        fid: 0,
        size: 28976328,
        vd: -65901,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '01',
      no: 0,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 270336,
      originCoverType: 2,
      originSongSimpleData: {
        songId: 25640792,
        name: '如果这就是爱情',
        artists: [
          {
            id: 10561,
            name: '张靓颖'
          }
        ],
        albumMeta: {
          id: 2262071,
          name: '尝味.人生 - 百味华语作品集'
        }
      },
      tagPicList: null,
      resourceState: true,
      version: 5,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      mv: 0,
      publishTime: 1699372800000
    },
    {
      name: '头炮',
      id: 2099625932,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12605500,
          name: '盛宇D-SHINE',
          tns: [],
          alias: []
        },
        {
          id: 12493703,
          name: 'K ELEVEN',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 4,
      crbt: null,
      cf: '',
      al: {
        id: 179011577,
        name: '盛宇首专',
        picUrl: 'https://p1.music.126.net/tJ5Re43_vUu8HR-7YS1hkA==/109951169054691692.jpg',
        tns: [],
        pic_str: '109951169054691692',
        pic: 109951169054691700
      },
      dt: 182800,
      h: {
        br: 320000,
        fid: 0,
        size: 7314285,
        vd: -55757,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 4388589,
        vd: -53205,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2925741,
        vd: -51771,
        sr: 48000
      },
      sq: {
        br: 1094963,
        fid: 0,
        size: 25019914,
        vd: -55371,
        sr: 48000
      },
      hr: {
        br: 1863758,
        fid: 0,
        size: 42586885,
        vd: -55759,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 4,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      cp: 0,
      mv: 14677070,
      rtype: 0,
      rurl: null,
      mst: 9,
      publishTime: 0
    },
    {
      name: '熊熊烈火',
      id: 2097223516,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 15194340,
          name: '河南说唱之神',
          tns: [],
          alias: []
        },
        {
          id: 12798217,
          name: '刘思鉴',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 3,
      crbt: null,
      cf: '',
      al: {
        id: 178443009,
        name: '熊熊烈火',
        picUrl: 'https://p2.music.126.net/zQde_fyMKblQCURIvKDHYg==/109951169036371440.jpg',
        tns: [],
        pic_str: '109951169036371440',
        pic: 109951169036371440
      },
      dt: 155294,
      h: {
        br: 320000,
        fid: 0,
        size: 6214125,
        vd: -61644,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 3728493,
        vd: -59037,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 2485677,
        vd: -57355,
        sr: 48000
      },
      sq: {
        br: 965668,
        fid: 0,
        size: 18745330,
        vd: -61577,
        sr: 48000
      },
      hr: {
        br: 1734729,
        fid: 0,
        size: 33674162,
        vd: -61637,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 0,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 3,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 0
    },
    {
      name: '单身旅记',
      id: 2097814963,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 46442509,
          name: '八仙饭店',
          tns: [],
          alias: []
        }
      ],
      alia: ['录音室版'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 5,
      crbt: null,
      cf: '',
      al: {
        id: 178597135,
        name: '单身旅记',
        picUrl: 'https://p2.music.126.net/KagmPx_h5bfFy8S3OBd4Rg==/109951169056544419.jpg',
        tns: [],
        pic_str: '109951169056544419',
        pic: 109951169056544420
      },
      dt: 238956,
      h: {
        br: 320000,
        fid: 0,
        size: 9560685,
        vd: -28699,
        sr: 48000
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5736429,
        vd: -26128,
        sr: 48000
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3824301,
        vd: -24526,
        sr: 48000
      },
      sq: {
        br: 988571,
        fid: 0,
        size: 29528194,
        vd: -27968,
        sr: 48000
      },
      hr: {
        br: 995642,
        fid: 0,
        size: 29739397,
        vd: -28525,
        sr: 48000
      },
      a: null,
      cd: '01',
      no: 1,
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
      version: 5,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 0,
      mv: 0,
      publishTime: 0
    }
  ], // 播放列表
  playMode: PLAY_MODE.LOOP, // 0 顺序播放 1 随机播放 2 单曲循环
  showBottom: true
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
    },
    changePlayModeAction(state, { payload }) {
      state.playMode = payload
    },
    changeCurrentLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    },
    changeShowBottomAction(state, { payload }) {
      state.showBottom = payload
    }
  }
})
export const {
  changeCurrentSongAction,
  changeCurrentLyricsAction,
  changePlayListAction,
  changeCurrentSongIndexAction,
  changePlayModeAction,
  changeCurrentLyricIndexAction,
  changeShowBottomAction
} = playerSlice.actions
export default playerSlice.reducer
