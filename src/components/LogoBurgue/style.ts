import styled from "styled-components";

export const LogoBurgueStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 23.5625rem;
  max-width: 100%;
  gap: 2rem;

  & > h1 {
    font-size: 2rem;
    font-weight: var(--weight-1);
    color: var(--color-grey-600);

    span {
      font-size: var(--font-size-3);
      color: var(--color-secondary);
    }
  }

  & > div {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1rem;

    border: 0.06rem var(--color-grey-100) solid;
    border-radius: var(--radius-2);

    div {
      background-color: rgba(39, 174, 96, 0.1);
      border-radius: var(--radius-2);

      padding: 0.8rem 1.5rem;
    }
  }

  & > img {
    max-width: 99%;
    width: 12.355rem;
    height: 4.9385rem;

    display: none;
  }

  @media (min-width: 768px) {
    & > img {
      display: flex;
    }
  }
`;
