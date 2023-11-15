import { configureStore } from '@reduxjs/toolkit'
import countReducer from './modules/counter'
const store = configureStore({
  reducer: {
    counter: countReducer
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
