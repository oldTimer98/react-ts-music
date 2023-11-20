import { AlbumCoverWrapper } from '@/components/album-cover/style'
import { getSizeImage } from '@/utils'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
interface Info {
  picUrl: string
  name: string
  artist: any
}

interface IProps {
  children?: ReactNode
  info: Info
  size?: string
  width?: string
  bgp?: string
}

const AlbumCover: FC<IProps> = (props) => {
  const { info, size = '100px', width = '118px', bgp = '-570px' } = props
  return (
    <AlbumCoverWrapper options={{ size, width, bgp }}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
        <a href="/abc" className="cover sprite_covor">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap hover-decoration">{info.name}</div>
        <div className="artist hover-decoration">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
}

export default memo(AlbumCover)
