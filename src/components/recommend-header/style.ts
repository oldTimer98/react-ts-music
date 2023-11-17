import styled from 'styled-components'

export const RecommendHeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 20px;
      font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }
    .keyword {
      display: flex;
      .item {
        .divider {
          margin: 0 15px;
          color: #ccc;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`
