import { AppFooterWrapper, FooterLeft, FooterRight } from '@/components/app-footer/style'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <AppFooterWrapper>
      <FooterLeft></FooterLeft>
      <FooterRight></FooterRight>
    </AppFooterWrapper>
  )
}

export default memo(AppFooter)
