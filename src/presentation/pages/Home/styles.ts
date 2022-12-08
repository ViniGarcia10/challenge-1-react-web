import styled from "styled-components";

export const Container = styled.div``;

export const ListProductsStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
  width: 100%;
  margin-bottom: 5rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 965px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 662px) {
    grid-template-columns: auto;
  }
`;
