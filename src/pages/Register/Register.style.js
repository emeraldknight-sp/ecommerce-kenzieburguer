import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

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

export const StyledFormCreateAccount = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 250px;
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

  .checkbox {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;

    font-size: var(--content-xs);
    line-height: var(--line-height-xs);

    input {
      margin: 0;
    }
  }

  @media only screen and (min-width: 425px) {
    width: 300px;
  }
`;

export const StyledOptionsLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: row;
  }
`;
