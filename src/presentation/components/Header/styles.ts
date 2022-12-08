import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 74px;
  width: 100%;

  a {
    text-decoration: none;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    color: #ffffff;
  }
`;

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  ul {
    text-decoration: none;
    list-style-type: none;
    li {
      font-size: 0.75rem;
      font-weight: 600;
      text-align: left;
      color: white;
    }

    li:last-child {
      color: #999999;
      text-align: end;
    }
  }
`;
