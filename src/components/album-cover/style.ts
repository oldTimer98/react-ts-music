import styled from 'styled-components'

export const AlbumCoverWrapper = styled.div<{ size: string; width: string; bgp: string }>`
  .album-image {
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    width: ${(props) => props.width};
    height: ${(props) => props.size};
    box-shadow: -8px 22px 18px -11px rgba(0, 0, 0, 0.25);
    img {
      width: ${(props) => props.size};
      height: ${(props) => props.size};
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      background-position: 0 ${(props) => props.bgp};
      bottom: 0;
      text-indent: -9999px;
    }
  }
  .album-info {
    margin-top: 5px;
    font-size: 12px;
    width: ${(props) => props.size};
    .name {
      color: #000;
    }
    .artist {
      color: #666;
    }
  }
`
