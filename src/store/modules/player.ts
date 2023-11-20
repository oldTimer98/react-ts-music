import { RootState } from '@/store'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { TypedUseSelectorHook } from 'react-redux'

export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { state: TypedUseSelectorHook<RootState> }
>('fetchCurrentSong', async (id, { dispatch, getState }) => {
  console.log(id, dispatch, getState)
})
export enum PLAY_MODE {
  LOOP,
  RANDOM,
  ONE
}
const initialState = {
  currentSong: {
    name: '嚣张',
    id: 1382596189,
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
    v: 10,
    crbt: null,
    cf: '',
    al: {
      id: 80816891,
      name: '嚣张',
      picUrl: 'https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg',
      tns: [],
      pic_str: '109951164271814514',
      pic: 109951164271814510
    },
    dt: 253994,
    h: {
      br: 320000,
      fid: 0,
      size: 10162605,
      vd: -55669
    },
    m: {
      br: 192000,
      fid: 0,
      size: 6097581,
      vd: -53082
    },
    l: {
      br: 128000,
      fid: 0,
      size: 4065069,
      vd: -51369
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
    mark: 0,
    originCoverType: 0,
    single: 0,
    noCopyrightRcmd: null,
    mv: 0,
    rtype: 0,
    rurl: null,
    mst: 9,
    cp: 1372818,
    publishTime: 0
  },
  currentLyrics: [],
  playList: [
    {
      name: '有何不可',
      id: 167876,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000007916021',
      fee: 8,
      v: 49,
      crbt: null,
      cf: '',
      al: {
        id: 16953,
        name: '自定义',
        picUrl: 'https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg',
        tns: [],
        pic_str: '18590542604286213',
        pic: 18590542604286212
      },
      dt: 241840,
      h: {
        br: 320000,
        fid: 0,
        size: 9675799,
        vd: -21099
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5805497,
        vd: -18400
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3870346,
        vd: -16900
      },
      a: null,
      cd: '1',
      no: 3,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 2,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      mst: 9,
      cp: 14026,
      rtype: 0,
      rurl: null,
      publishTime: 1231516800000
    },
    {
      name: '雅俗共赏',
      id: 411214279,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 5771,
          name: '许嵩',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 31,
      crbt: null,
      cf: '',
      al: {
        id: 34749138,
        name: '青年晚报',
        picUrl: 'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg',
        tns: [],
        pic: 3431575794705764
      },
      dt: 249621,
      h: {
        br: 320000,
        fid: 0,
        size: 9987177,
        vd: -22200
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5992323,
        vd: -19600
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3994896,
        vd: -17800
      },
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8192,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 5302271,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 14026,
      publishTime: 1461723397683
    },
    {
      name: '嚣张',
      id: 1382596189,
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
      v: 10,
      crbt: null,
      cf: '',
      al: {
        id: 80816891,
        name: '嚣张',
        picUrl: 'https://p2.music.126.net/NhkuFBphLFaSmYMeW1-frQ==/109951164271814514.jpg',
        tns: [],
        pic_str: '109951164271814514',
        pic: 109951164271814510
      },
      dt: 253994,
      h: {
        br: 320000,
        fid: 0,
        size: 10162605,
        vd: -55669
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6097581,
        vd: -53082
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4065069,
        vd: -51369
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
      mark: 0,
      originCoverType: 0,
      single: 0,
      noCopyrightRcmd: null,
      mv: 0,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1372818,
      publishTime: 0
    }
  ], // 播放列表
  playMode: PLAY_MODE.LOOP
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
    }
  }
})
export const { changeCurrentSongAction, changeCurrentLyricsAction, changePlayListAction } =
  playerSlice.actions
export default playerSlice.reducer
