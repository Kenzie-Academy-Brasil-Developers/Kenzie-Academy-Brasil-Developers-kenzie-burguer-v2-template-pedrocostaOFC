import styled from "styled-components";

export const StylesShop = styled.div`
  width: 100%;

  & > main {
    width: 100%;

    ul {
      display: flex;
      overflow-x: auto;

      width: 99%;
      gap: 1rem;
      padding: 1rem 0;
    }
  }

  @media (min-width: 768px) {
    & > main > ul {
      overflow-x: unset;
      flex-wrap: wrap;
    }
  }
`;
