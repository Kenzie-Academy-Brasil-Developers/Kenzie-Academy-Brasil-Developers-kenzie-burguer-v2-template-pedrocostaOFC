import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  background-color: var(--color-grey-0);

  & > nav {
    width: 99%;
    min-height: 4.5rem;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;
    padding: 1rem 0;

    h1 {
      font-size: var(--font-size-1);
      font-weight: var(--weight-1);
      color: var(--color-grey-600);
      span {
        font-size: var(--font-size-4);
        color: var(--color-secondary);
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      img {
        width: 1.56rem;
        height: 1.5rem;
        cursor: pointer;
      }

      form {
        width: 100%;
        height: fit-content;

        position: relative;

        border: 0.125rem solid var(--color-grey-100);
        border-radius: var(--radius-1);

        input {
          width: 99%;
          font-size: var(--font-size-5);
          font-weight: var(--weight-4);
          color: var(--color-grey-300);
          background-color: #fff;
          border: none;
          border-radius: var(--radius-1);
          padding: 0.937rem 4rem 0.937rem 0.937rem;

          ::placeholder {
            color: var(--color-grey-100);
          }
        }

        button {
          position: absolute;
          top: 11%;
          right: 4%;

          img {
            width: 1.13rem;
            height: 1.13rem;
          }
        }
      }

      div {
        position: relative;
        cursor: pointer;

        span {
          position: absolute;
          top: -20%;
          right: -20%;
          font-size: var(--font-size-6);
          font-weight: var(--weight-1);
          color: #fff;
          background-color: var(--color-primary);
          padding: 0.1rem 0.25rem;
          border-radius: var(--radius-1);
        }
      }
    }
  }

  @media (min-width: 768px) {
    & > nav {
      flex-direction: unset;
      gap: unset;
      padding: unset;

      & > div > form {
        width: 22.812rem;
      }
    }
  }
`;
