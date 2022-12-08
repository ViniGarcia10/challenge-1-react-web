import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: auto;
  gap: 1rem;
  width: 950px;
  margin-top: 1rem;
  background: #fff;
  color: #000;

  @media (max-width: 983px) {
    width: 80%;
    justify-content: center;
  }

  thead tr:nth-child(1) {
    color: #999999;
    height: 3rem;

    th:first-child {
      text-align: inherit;
    }

    th:nth-child(4) {
      text-align: inherit;
    }
  }

  hr {
    width: 90%;
    height: 0.085rem;
  }
`;

export const TableCheckout = styled.table`
  width: 90%;
  margin-top: 1rem;
  font-size: 1rem;
  color: #2f2e41;
  font-weight: 700;

  tr {
    li {
      list-style-type: none;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }

    li:last-child {
      font-size: 1rem;
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;
      display: flex;
    }
  }
`;

export const ImageProd = styled.img`
  width: 89px;
  height: 114px;
`;

export const BarAccount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.688rem;

  input {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    text-align: center;
    font-size: 0.875rem;
    color: #2f2e41;
  }
`;

export const BarCheckout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  font-size: 0.875rem;

  @media (max-width: 983px) {
    width: 80%;
    justify-content: center;
    gap: 2rem;
    flex-direction: column-reverse;
  }

  button {
    cursor: pointer;
    font-size: 0.875rem;
    background: #009edd;
    border: none;
    border-radius: 4px;
    color: #fff;
    height: 40px;
    width: 235px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;

    span {
      color: #999999;
    }

    p {
      font-size: 2rem;
      font-weight: 700;
      color: #2f2e41;
    }
  }
`;
