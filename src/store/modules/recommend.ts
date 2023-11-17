import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '@/service/modules/discover/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBannersAction = createAsyncThunk('fetchBanners', async (arg, { dispatch }) => {
  const res = await getBanners()
  dispatch(changeBannersAction(res.banners))
})

export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)
export const fetchNewAlbumAction = createAsyncThunk('fetchNewAlbum', async (arg, { dispatch }) => {
  const res = await getNewAlbum()
  dispatch(changeNewAlbumAction(res.albums))
})

const rankingIds = [19723756, 3779629, 2884035]
export const fetchPlayListDetailAction = createAsyncThunk(
  'fetchPlayListDetail',
  async (arg, { dispatch }) => {
    // 方式一
    // rankingIds.forEach((id) => {
    //     getPlaylistDetail(id).then((res) => {
    //         switch (id) {
    //             case 19723756:
    //                 console.log('飙升榜', res.playlist)
    //                 dispatch(changeUpRankingAction(res.playlist))
    //                 break
    //             case 3779629:
    //                 console.log('新歌榜', res.playlist)
    //                 dispatch(changeNewRankingAction(res.playlist))
    //                 break
    //             case 2884035:
    //                 console.log('原创榜', res.playlist)
    //                 dispatch(changeOriginRankingAction(res.playlist))
    //                 break
    //         }
    //     })
    // })
    // 方式二
    /**
     * 将三个结果都拿到，统一放到一个数组中管理
     * 1.获取到所有的结果后，进行dispatch操作
     * 2.获取到的结果一定是有正确顺序的
     */
    const promise: Promise<any>[] = []
    rankingIds.forEach((id) => {
      promise.push(getPlaylistDetail(id))
    })
    const res = await Promise.all(promise)
    const playLists = res.map((item) => item.playlist)
    dispatch(changeAllRankingDataAction(playLists))
  }
)

export const fetchSettleSingersAction = createAsyncThunk(
  'fetchSettleSingers',
  async (arg, { dispatch }) => {
    const res = await getArtistList(5)
    dispatch(changeSettleSingersAction(res.artists))
  }
)
interface Istate {
  banners: any[]
  hotRecommend: any[]
  newAlbums: any[]
  allRankingData: any[]
  settleSingers: any[]
}

const initialState: Istate = {
  banners: [],
  hotRecommend: [],
  newAlbums: [],
  allRankingData: [],
  settleSingers: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommend = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeAllRankingDataAction(state, { payload }) {
      state.allRankingData = payload
    },
    changeSettleSingersAction(state, { payload }) {
      state.settleSingers = payload
    }
  }
})
export const {
  changeBannersAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeAllRankingDataAction,
  changeSettleSingersAction
} = recommendSlice.actions
export default recommendSlice.reducer
