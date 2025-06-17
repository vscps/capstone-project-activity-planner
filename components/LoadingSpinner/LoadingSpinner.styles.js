import styled from "styled-components";

export const LoadingSpinnerContainer = styled.div`
  ${(props) =>
    props.variant === "centered" &&
    `
    display: block;
    text-align: center;
    margin: 20px 0;
  `}

  ${(props) =>
    props.variant === "inline" &&
    `
    display: inline-block;
    margin-right: 8px;
  `}
  
  ${(props) =>
    props.variant === "page" &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
  `}
`;

export const LoadingSpinnerStyle = styled.div`
  width: 25px;
  height: 25px;
  border: 4px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
