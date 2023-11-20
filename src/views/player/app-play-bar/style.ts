import styled from 'styled-components'

export const AppPlayBarWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 999;
  width: 100%;

  > .end-l {
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;

    .btn {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      background-position: -100px -380px;
    }
  }

  > .end-r {
    position: absolute;
    top: -1px;
    right: 0;
    width: 15px;
    height: 54px;
    background-position: -52px -393px;
    pointer-events: none;
  }

  > .bg {
    height: 53px;
    zoom: 1;
    margin-right: 67px;
    background-position: 0 0;
    background-repeat: repeat-x;
  }

  > .wrap {
    position: absolute;
    left: 50%;
    top: 6px;
    z-index: 15;
    display: flex;
    width: 980px;
    height: 47px;
    margin: 0 auto;
    transform: translateX(-50%);
  }
`

export const ControlWrapper = styled.div`
  display: flex;
  width: 137px;
  padding-top: 6px;
  .prev {
    display: block;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    background-position: 0 -130px;
    cursor: pointer;

    &:hover {
      background-position: -30px -130px;
    }
  }
  .pause {
    display: block;
    width: 36px;
    height: 36px;
    margin-right: 8px;
    background-position: 0 -165px;
    cursor: pointer;

    &:hover {
      background-position: -40px -165px;
    }
  }

  .play {
    display: block;
    width: 36px;
    height: 36px;
    margin-right: 8px;
    background-position: 0 -204px;
    cursor: pointer;

    &:hover {
      background-position: -40px -204px;
    }
  }

  .next {
    display: block;
    width: 28px;
    height: 28px;
    margin-right: 8px;
    margin-top: 5px;
    background-position: -80px -130px;
    cursor: pointer;

    &:hover {
      background-position: -110px -130px;
    }
  }
`
export const HeadWrapper = styled.div`
  position: relative;
  margin: 6px 15px 0 0;
  img {
    border-radius: 4px;
  }

  .mask {
    position: absolute;
    top: 0px;
    left: 0px;
    display: block;
    width: 34px;
    height: 35px;
    background-position: 0 -80px;
  }
`
export const PlayInfoWrapper = styled.div`
  width: 581px;
  .info {
    display: flex;
    height: 28px;
    line-height: 28px;
    font-size: 12px;
    cursor: pointer;

    .name {
      color: #e8e8e8;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        text-decoration: underline;
      }
    }

    .ar {
      display: flex;
      margin-left: 15px;
      color: #9b9b9b;

      .line {
        padding: 0 1px;
      }

      .a:hover {
        text-decoration: underline;
      }
    }

    .src {
      width: 14px;
      height: 15px;
      margin: 7px 0 0 13px;
      background-position: -110px -103px;

      &:hover {
        background-position: -130px -103px;
      }
    }
  }

  .bottom {
    position: relative;
    display: flex;
    color: #fff;
    .ant-slider {
      width: 466px;
      height: 9px;
      margin: 0;
      padding: 0;
      .ant-slider-rail {
        height: 9px;
        background: url(${require('@/assets/img/progress_bar.png')}) right 0;
      }
      .ant-slider-track {
        height: 9px;
        background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
      }
      .ant-slider-handle {
        position: absolute;
        top: -8px;
        width: 22px;
        height: 24px;
        background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;
        &::after {
          display: none;
        }
      }
    }
    .time {
      position: absolute;
      top: -6px;
      right: 30px;
      display: flex;
      font-size: 12px;
      color: #797979;

      .current {
        color: #a1a1a1;
      }

      .divider {
        padding: 0 4px;
      }
    }
  }
  :where(.css-dev-only-do-not-override-1adbn6x).ant-slider .ant-slider-handle::after {
    display: none !important;
  }
  :where(.css-dev-only-do-not-override-1adbn6x).ant-slider .ant-slider-handle:hover::after {
    display: none !important;
  }
`
export const OperatorsWrapper = styled.div<{
  playMode: number
}>`
  display: flex;
  position: relative;
  top: 2px;

  .btn {
    width: 25px;
    height: 25px;
  }
  .hua {
    background: url(${require('@/assets/img/huazhonghia.png')}) no-repeat 0 0;
  }
  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }
  .left {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -143px -238px;

    .volume {
      background-position: -2px -248px;
    }
    .loop {
      background-position: ${(props) => {
        switch (props.playMode) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};
    }
    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
