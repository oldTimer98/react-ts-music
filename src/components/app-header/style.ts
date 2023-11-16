import styled from 'styled-components'

export const ViewWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;
  color: #fff;
`

export const HeaderLeft = styled.div`
  display: flex;
  .item {
    width: 90px;
    text-align: center;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      color: #ccc;
      position: relative;
      &.active {
        .triangle {
          display: inline-block;
        }
      }
      .triangle {
        position: absolute;
        bottom: 0;
        left: 41px;
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 7px solid #c20c0c;
        display: none;
      }
      &:hover {
        background-color: #000;
        a {
          color: #fff;
        }
      }
    }
    &:last-of-type a {
      position: relative;
      &::after {
        position: absolute;
        content: '';
        width: 28px;
        height: 19px;
        background-image: url(${require('@/assets/img/sprite_01.png')});
        background-position: -190px 0;
        top: 20px;
        right: -15px;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  line-height: 70px;
  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin: 0 12px;
    box-sizing: border-box;
    border: 1px solid #4f4f4f;
    color: #ccc;
    border-radius: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .login {
    color: #666;
    &:hover {
      color: #787878;
      text-decoration: underline;
    }
  }
  .ant-input-affix-wrapper:hover {
    background-color: #fff !important;
  }
`
