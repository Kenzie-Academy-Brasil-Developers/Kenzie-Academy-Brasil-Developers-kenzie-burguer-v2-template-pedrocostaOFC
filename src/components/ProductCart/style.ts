import styled from "styled-components";

export const ProductCartStyle = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  background-color: #fff;

  & > div {
    height: 100%;
    gap: 1rem;

    display: flex;

    & > div:nth-child(1) {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      background-color: var(--color-grey-100);
      border-radius: var(--radius-2);
      width: 5rem;
      max-width: 100%;

      & > img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;

      & > h3 {
        font-size: var(--font-size-4);
        font-weight: var(--weight-1);
        color: var(--color-grey-600);
      }

      & > span {
        font-size: var(--font-size-5);
        font-weight: var(--weight-2);
        color: var(--color-primary);
      }
    }
  }

  & > img {
    width: 0.9375rem;
    height: 0.9375rem;
    cursor: pointer;
  }
`;
