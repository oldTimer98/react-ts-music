import styled from 'styled-components'

export const RecommendCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 0 20px;
  .cover-top {
    position: relative;
    img {
      width: 140px;
      height: 140px;
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 60%;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0, 0.9) 100%);
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;
        .erji {
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 10px;
          background-position: 0 -24px;
        }
        .play {
          display: inline-block;
          width: 16px;
          height: 17px;
          background-position: 0 0;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .cover-bottom {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }
`
