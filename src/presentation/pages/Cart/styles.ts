import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CartMain = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: auto;
  gap: 1rem;
  width: 950px;
  height: 530px;
  margin-top: 1rem;
  background: #fff;

  h1 {
    color: #2f2e41;
    font-weight: 700;
    text-align: center;
    font-size: 1.688rem;
  }

  hr {
    width: 50%;
    background: #3f3d56;
    height: 0.085rem;
  }

  button {
    cursor: pointer;
    background: #009edd;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 0.875rem;
    height: 40px;
    width: 180px;
  }
`;
