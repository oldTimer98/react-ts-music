import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  box-sizing: border-box;
  .discover-header {
    background-color: #c20c0c;
  }
`

export const TopMenuWrapper = styled.div`
  display: flex;
  padding-left: 180px;
  position: relative;
  .item {
    height: 40px;
    width: 90px;
    background-color: #c20c0c;
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
