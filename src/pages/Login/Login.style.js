import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  min-height: 100vh;
  background-color: var(--gray-1);
  padding: 50px 0 0;

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
  }

  @media only screen and (min-width: 1440px) {
    section {
      gap: 100px;
    }
  }
`;

export const StyledSpanGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const StyledSpan = styled.span`
  display: flex;
  font-size: var(--content-xs);
  line-height: var(--line-height-xs);
  gap: 4px;
`;
