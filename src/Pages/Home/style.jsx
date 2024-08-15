import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  text-align: center;
  color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  z-index: 2;
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    img {
      height: 80px;
      width: 80px;
      border-radius: 20px;
    }
    h1 {
      margin-left: 20px;
    }
  }
  p {
    padding: 40px 25%;
  }
  .boxes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .box {
      height: 250px;
      width: 250px;
      cursor: pointer;
      border-radius: 10px;
      transition: 0.2s;
      padding: 30px;
      background: #e7e7e728;
      backdrop-filter: blur(30px);
      img {
        height: 150px;
        width: 150px;
        margin: auto;
      }
      .title {
        text-align: center;
        font-size: 35px;
      }
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  @media screen and (max-width: 750px) {
    p {
      padding: 30px;
    }
  }
`;
