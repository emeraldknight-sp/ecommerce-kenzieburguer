import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  min-height: 100vh;
  background-color: var(--gray-1);
  padding: 50px 0 0;

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
