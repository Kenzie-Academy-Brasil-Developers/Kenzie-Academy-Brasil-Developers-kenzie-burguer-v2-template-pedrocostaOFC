import styled from "styled-components";

export const StylesLogin = styled.main`
  display: flex;
  flex-direction: column-reverse;
  gap: 1.5rem;
  padding-top: 2rem;
  width: 100%;

  & > form > h2 {
    font-size: var(--font-size-3);
    font-weight: var(--weight-1);
    color: var(--color-grey-600);
  }

  & > form > span {
    font-size: var(--font-size-6);
    font-weight: var(--weight-4);
    color: var(--color-grey-300);

    text-align: center;
    width: 18.75rem;
    max-width: 100%;
    margin: 0 auto;
  }

  & > form > a {
    font-size: var(--font-size-5);
    font-weight: var(--weight-2);
    border-radius: var(--radius-1);
    background-color: var(--color-grey-100);
    color: var(--color-grey-300);

    border: none;
    cursor: pointer;
    transition: 0.6s ease;
    text-decoration: none;
    text-align: center;

    padding: 1.25rem;
    width: 100%;

    &:hover {
      background-color: var(--color-grey-300);
      color: var(--color-grey-100);
    }
  }

  @media (min-width: 701px) {
    justify-content: center;
    flex-direction: unset;
    align-items: center;
    gap: 3rem;
    height: 100%;
    padding-top: unset;
  }
`;
