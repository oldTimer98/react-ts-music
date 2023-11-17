import { useAppDispatch } from '@/hooks'
import {
  fetchBannersAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchPlayListDetailAction,
  fetchSettleSingersAction
} from '@/store/modules/recommend'
import NewAlbum from '@/views/discover/c-views/recommend/c-cpns/NewAlbum'
import TopRanking from '@/views/discover/c-views/recommend/c-cpns/TopRanking'
import HotAnchor from '@/views/discover/c-views/recommend/c-cpns/hot-anchor'
import HotRecommend from '@/views/discover/c-views/recommend/c-cpns/hot-recommend'
import SettleSinger from '@/views/discover/c-views/recommend/c-cpns/settle-singer'
import TopBanner from '@/views/discover/c-views/recommend/c-cpns/top-banner'
import UserLogin from '@/views/discover/c-views/recommend/c-cpns/user-login'
import { RecommendWrapper } from '@/views/discover/c-views/recommend/style'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  // 获取数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    // 轮播图数据
    dispatch(fetchBannersAction())
    // 热门推荐数据
    dispatch(fetchHotRecommendAction())
    // 新碟上架
    dispatch(fetchNewAlbumAction())
    // 榜单
    dispatch(fetchPlayListDetailAction())
    // 入驻歌手
    dispatch(fetchSettleSingersAction())
  }, [])
  return (
    <>
      {/* 轮播图 */}
      <TopBanner />
      <RecommendWrapper className="wrap-v2">
        <div className="recommend-left">
          {/* 热门推荐 */}
          <HotRecommend />
          {/* 新碟上架 */}
          <NewAlbum />
          {/* 榜单 */}
          <TopRanking />
        </div>
        <div className="recommend-right">
          {/* 用户登录 */}
          <UserLogin />
          {/* 入驻歌手 */}
          <SettleSinger />
          {/* 热门主播 */}
          <HotAnchor />
        </div>
      </RecommendWrapper>
    </>
  )
}
export default memo(Recommend)
