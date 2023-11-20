import { configureStore } from '@reduxjs/toolkit'
import countReducer from './modules/counter'
import commendReducer from './modules/recommend'
import playerReducer from './modules/player'
const store = configureStore({
  reducer: {
    counter: countReducer,
    commend: commendReducer,
    player: playerReducer
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` 类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
