import { AppDispatch, RootState } from '@/store'
import { TypedUseSelectorHook, useDispatch, useSelector, shallowEqual } from 'react-redux'

// 在整个应用程序中使用，而不是简单的 `useDispatch` 和 `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppShallowEqual = shallowEqual
