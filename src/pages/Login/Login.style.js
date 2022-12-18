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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .image__icon-login {
    width: 250px;
  }
  
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
  }

  .input {
    padding: 10px;
    border: 1px solid black;
    border-radius: 4px;
    outline: none;
  }

  .checkbox {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
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

  .footer {
    width: 100%;
    background-color: var(--gray-3);
    color: var(--gray-1);
  }

  @media only screen and (min-width: 1024px) {
    
    section {
      display: flex;
      flex-direction: row;
      gap: 70px;
    }

    .image__icon-login {
      width: 450px;
    }
  }

  @media only screen and (min-width: 1440px) {
    
    section {
      gap: 100px;
    }

    .image__icon-login {
      width: 650px;
    }
  }
`;
