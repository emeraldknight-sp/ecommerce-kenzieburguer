import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  min-height: 100vh;
  background-color: var(--gray-1);

  .figure__icon-login {
    height: 200px;
  }

  .image__icon-login {
    height: 100%;
  }
  
  .login {
    display: flex;
  }

  .brand {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 40px;
  }
  
  .login__button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 300px;
    padding: 10px 40px;
    border: 2px solid var(--transparent);
    border-radius: 8px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .label {
    font-size: var(--caption);
  }

  .input {
    padding: 10px;
  }

  .checkbox {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    font-size: var(--caption);
  }

  .span-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .span {
    display: flex;
    font-size: var(--caption);
    gap: 4px;
  }

  .footer {
    width: 100%;
    background-color: var(--gray-3);
    color: var(--gray-1);
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row;

    .figure__icon-login {
      height: 400px;
    }
  }
`;
