import { getBanners } from '@/service/modules/discover/recommend'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchBannersAction = createAsyncThunk('fetchBanners', async (arg, { dispatch }) => {
  const res = await getBanners()
  dispatch(changeBannersAction(res.banners))
})

interface Istate {
  banners: any[]
}

const initialState: Istate = {
  banners: []
}

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannersAction(state, { payload }) {
      state.banners = payload
    }
  }
})
export const { changeBannersAction } = recommendSlice.actions
export default recommendSlice.reducer
