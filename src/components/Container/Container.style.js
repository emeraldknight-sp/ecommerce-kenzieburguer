import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 90vw;
  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    max-width: 80vw;
  }
`;
