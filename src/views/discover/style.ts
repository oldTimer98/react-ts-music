import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  height: 35px;
  box-sizing: border-box;
`

export const TopMenuWrapper = styled.div`
  background-color: #c20c0c;
  display: flex;
  padding-left: 180px;
  position: relative;
  .item {
    height: 40px;
    width: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      display: inline-block;
      padding: 4px 13px;
      color: #fff;
      &:hover,
      &.active {
        text-decoration: none;
        background-color: #9b0909;
        border-radius: 20px;
      }
    }
  }
`
