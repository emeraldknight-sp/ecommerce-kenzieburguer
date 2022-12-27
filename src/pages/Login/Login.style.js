import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  min-height: 100vh;
  background-color: var(--gray-1);

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login__button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 270px;
    padding: 10px;
    border: 2px solid var(--transparent);
    border-radius: 8px;

    h2 {
      font-size: var(--heading-2);
      line-height: var(--lineheight-h2);
      font-weight: bold;
      color: var(--color-primary);
      text-align: center;
    }
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .label {
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
  }

  .input {
    padding: 10px;
    border: 1px solid var(--gray-3);
    border-radius: 4px;
    outline: none;
  }

  .checkbox {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;

    font-size: var(--content-xs);
    line-height: var(--line-height-xs);

    input {
      margin: 0;
    }
  }

  .span-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .span {
    display: flex;
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
    gap: 4px;
  }

  .error {
    color: var(--negative);
  }

  .footer {
    width: 100%;
    background-color: var(--gray-3);
    color: var(--gray-1);
  }

  @media only screen and (min-width: 425px) {
    .form {
      width: 300px;
    }
  }

  @media only screen and (min-width: 1024px) {
    section {
      display: flex;
      flex-direction: row;
      gap: 70px;
    }
  }

  @media only screen and (min-width: 1440px) {
    section {
      gap: 100px;
    }
  }
`;
