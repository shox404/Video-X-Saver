import { styled } from "styled-components";

export const Block = styled.div`
  min-height: 100dvh;
  color: #ffffff;
  position: relative;
  z-index: 2;
  width: 50%;
  margin: auto;
  .title {
    font-size: 40px;
    text-align: center;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 10px;
      height: 50px;
      width: 50px;
    }
  }
  form {
    height: 60px;
    border-radius: 5px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: #e7e7e728;
    backdrop-filter: blur(30px);
    input,
    button {
      border-radius: 5px;
      border: 1px solid #303030;
      height: 100%;
      color: #fff;
      font-size: 18px;
      padding: 0 10px;
      outline: none;
      display: flex;
      justify-content: center;
      align-items: center;
      white-space: nowrap;
      .loader {
        margin-right: 5px;
        height: 25px;
        width: 25px;
        border-radius: 50%;
        border: 4px solid transparent;
        border-top: 4px solid #585858;
        border-bottom: 4px solid #585858;
        animation: loader 1s infinite linear;
        @keyframes loader {
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    input {
      background: #3d3d3d;
    }
    button {
      background: #1a1a1a;
    }
    .warrning {
      border: 1px solid orange;
    }
    input {
      width: calc(100% - 155px);
      &:focus {
        border: 1px solid #585858;
      }
    }
    button {
      margin-left: 10px;
      width: 150px;
      &:active {
        background: #4e4e4e;
      }
      &:disabled {
        background: #222222;
      }
    }
  }
  .medias {
    padding-top: 20px;
    padding-bottom: 50px;
    .videoBlock {
      min-height: 55vh;
      border-radius: 5px;
      margin: auto;
      display: grid;
      place-items: center;
      padding: 10px;
      background: #e7e7e728;
      backdrop-filter: blur(30px);
      width: 95%;
    }
  }
  video {
    width: 98%;
    height: 98%;
    z-index: 1;
    outline: none;
    border-radius: 5px;
  }
  @media (max-width: 700px) {
    width: 100%;
    .title {
      font-size: 25px;
    }
    form {
      width: 95%;
    }
  }
`;
