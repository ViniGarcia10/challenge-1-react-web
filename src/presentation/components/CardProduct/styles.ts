import styled from "styled-components";

interface PropsBtnAddToCart {
  status: string;
}

export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  width: 300px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 0.5rem;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 16px;
    text-align: center;
    color: #333333;
    line-height: 1.25rem;
    margin-top: 0.5rem;
  }

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25rem;
    text-align: center;
    color: #2f2e41;
    margin-top: 0.1rem;
  }
`;

export const BtnAddToCart = styled.button<PropsBtnAddToCart>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 12px;
  background: ${props => props.status};
  margin: 0.1rem;
  font-weight: 700;
  color: #fff;
  font-size: 0.75rem;
  height: 2.5rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  div {
    display: flex;
  }

  div span {
    font-weight: 400;
  }
`;
