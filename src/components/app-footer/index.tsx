import { AppFooterWrapper, FooterTop, FooterBottom } from '@/components/app-footer/style'
import React, { Fragment, memo } from 'react'
import type { FC, ReactNode } from 'react'

import footerImages from '@/assets/data/footer-images.json'
import footerLinks from '@/assets/data/footer-links.json'
interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterTop>
          {footerImages.map((item: any) => {
            return (
              <li className="item" key={item.link}>
                <a className="link" href={item.link} rel="noopener noreferrer" target="_blank">
                  {' '}
                </a>
                <span className="title">{item.title}</span>
              </li>
            )
          })}
        </FooterTop>
        <FooterBottom>
          <div className="link">
            {footerLinks.map((item, index) => {
              return (
                <Fragment key={item.title}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-decoration"
                  >
                    {item.title}
                  </a>
                  {index < footerLinks.length - 1 && <span className="line">|</span>}
                </Fragment>
              )
            })}
          </div>
          <div>
            <a
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-decoration"
              style={{
                marginRight: '20px'
              }}
            >
              廉正举报
            </a>
            <a
              href="/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-decoration"
              style={{
                marginRight: '20px'
              }}
            >
              不良信息举报邮箱: 51jubao@service.netease.com
            </a>
            <a href="/#" target="_blank" rel="noopener noreferrer" className="hover-decoration">
              客服热线：95163298
            </a>
          </div>
          <div>
            <span
              style={{
                marginRight: '20px'
              }}
            >
              互联网宗教信息服务许可证：浙（2022）0000120 增值电信业务经营许可证：浙B2-20150198
              粤B2-20090191-18
            </span>
            <a href="/#" target="_blank" rel="noopener noreferrer" className="hover-decoration">
              工业和信息化部备案管理系统网站
            </a>
          </div>
          <div>
            <span
              style={{
                marginRight: '20px'
              }}
            >
              网易公司版权所有©1997-2023
            </span>
            <span
              style={{
                marginRight: '20px'
              }}
            >
              杭州乐读科技有限公司运营：浙网文[2021] 1186-054号{' '}
            </span>
            <a href="/#" target="_blank" rel="noopener noreferrer" className="hover-decoration">
              <span className="police-logo"></span>
              浙公网安备 33010902002564号
            </a>
          </div>
        </FooterBottom>
      </div>
    </AppFooterWrapper>
  )
}

export default memo(AppFooter)
