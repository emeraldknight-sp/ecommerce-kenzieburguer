import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  figure {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledFormCreateAccount = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin: 0 auto;
  border: 2px solid var(--transparent);
  border-radius: 8px;

  a {
    margin: 0 auto;
  }

  h2 {
    font-size: var(--heading-2);
    line-height: var(--lineheight-h2);
    font-weight: bold;
    color: var(--color-primary);
    text-align: center;
  }

  input {
    padding: 10px;
    border: 1px solid var(--gray-3);
    border-radius: 4px;
    outline: none;
  }
`;

export const StyledOptionsLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .options {
    display: flex;
    flex-direction: row;
  }
`;
