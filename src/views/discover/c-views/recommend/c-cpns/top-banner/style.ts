import styled from 'styled-components'

export const TopBannerWrapper = styled.div`
  .banner {
    height: 270px;
    background-color: red;
    display: flex;
    position: relative;
  }
`
export const BannerLeft = styled.div`
  position: relative;
  width: 730px;
  .item {
    overflow: hidden;
    height: 270px;
  }
  .carousel-indicators {
    position: absolute;
    /* top: 50%; */
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -8px;
    /* top: -35px;
    text-align: center; */
    .dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      background-color: #ccc;
      margin: 8px;
      border-radius: 50%;
      &.active {
        width: 8px;
        height: 8px;
        background-color: #c20c0c;
      }
      &:hover {
        cursor: pointer;
        background-color: #c20c0c;
      }
    }
  }
`
export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png')});
`
export const BannerControl = styled.div`
  .arrow {
    color: white;
    z-index: 9;
    width: 37px;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      cursor: pointer;
      background-color: rgba(128, 128, 128, 0.5);
    }
  }
  .left {
    position: absolute;
    top: 100px;
    left: -45px;
  }
  .right {
    position: absolute;
    top: 100px;
    right: -45px;
  }
`
