import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface Istate {
  count: number
  message: string
}

const initialState: Istate = {
  count: 0,
  message: 'Hello world'
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeCountAction(state, { payload }) {
      state.count = payload
    },
    // 使用 PayloadAction 类型声明 `action.payload` 的内容
    changeMsgAction(state, action: PayloadAction<string>) {
      state.message = action.payload
    }
  }
})
export const { changeCountAction, changeMsgAction } = counterSlice.actions
export default counterSlice.reducer
