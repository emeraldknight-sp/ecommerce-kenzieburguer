import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--gray-1);
  padding: 50px 0 0;

  span {
    font-size: var(--content-sm);
    line-height: var(--line-height-sm);
    text-align: center;
    margin: 8px 0;
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

export const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`;
