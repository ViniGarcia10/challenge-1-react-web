import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    color: conic-gradient(
      from 90deg at 50% 50%,
      rgba(128, 128, 128, 0.0001) -46.17deg,
      #ffffff 313.55deg,
      rgba(128, 128, 128, 0.0001) 313.83deg,
      #ffffff 673.55deg
    );
    animation: rotateIcon 1s linear infinite;
  }

  @keyframes rotateIcon {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
`;
