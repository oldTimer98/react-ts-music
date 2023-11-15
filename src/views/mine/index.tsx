import { useAppDispatch, useAppSelector, useAppShallowEqual } from '@/hooks'
import { changeCountAction } from '@/store/modules/counter'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = () => {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    useAppShallowEqual
  )
  const disPatch = useAppDispatch()
  const handleMsg = () => {
    disPatch(changeCountAction('hhhhh'))
  }
  return (
    <div>
      <h2>{count}</h2>
      <h2>{message}</h2>
      <button onClick={handleMsg}>修改msg</button>
      Mine
    </div>
  )
}

export default memo(Mine)
