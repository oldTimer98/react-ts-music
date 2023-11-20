import styled from 'styled-components'

export const AppFooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  border-top: 1px solid #d3d3d3;
  .content {
    margin-top: 33px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  .item {
    display: flex;
    flex-direction: column;
    margin-left: 80px;
    align-items: center;
    justify-content: center;
    width: 45px;

    .link {
      display: block;
      width: 45px;
      height: 45px;
      background-image: url(${require('@/assets/img/foot_enter_new2.png')});
      background-size: 220px 220px;
    }

    &:nth-child(1) .link {
      background-position: -170px -5px;
      &:hover {
        background-position: -5px -115px;
      }
    }
    &:nth-child(2) .link {
      background-position: -5px -170px;
      &:hover {
        background-position: -60px -170px;
      }
    }
    &:nth-child(3) .link {
      background-position: -5px -60px;
      &:hover {
        background-position: -60px -5px;
      }
    }
    &:nth-child(4) .link {
      background-image: url(${require('@/assets/img/xStudio.png')});
      background-size: 45px;
      &:hover {
        background-image: url(${require('@/assets/img/xStudioHover.png')});
      }
    }
    &:nth-child(5) .link {
      background-position: -60px -60px;
      &:hover {
        background-position: -115px -5px;
      }
    }
    &:nth-child(6) .link {
      background-position: -115px -115px;
      &:hover {
        background-position: -5px -5px;
      }
    }
    &:nth-child(7) .link {
      background-image: url(${require('@/assets/img/cloudSong.png')});
      background-size: 45px;
      &:hover {
        background-image: url(${require('@/assets/img/cloudSongHover.png')});
      }
    }
    &:nth-child(8) .link {
      background-position: -170px -115px;
      &:hover {
        background-position: -60px -115px;
      }
    }
    .title {
      width: 100px;
      margin-top: 10px;
      text-align: center;
    }

    &:first-child {
      margin-left: 0;
    }
  }
`
export const FooterBottom = styled.div`
  padding-top: 60px;
  line-height: 24px;
  text-align: center;

  .link {
    .line {
      margin: 0 10px;
    }
  }

  .police-logo {
    width: 14px;
    height: 14px;
    background: url(${require('@/assets//img/police.png')}) no-repeat;
    background-size: cover;
    display: inline-block;
    margin-right: 2px;
    vertical-align: -2px;
  }
`
