import styled from "styled-components";

export const StyledContainer = styled.section`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  max-width: 90vw;
  margin: 0 auto;

  @media only screen and (min-width: 1024px) {
    max-width: 80vw;
  }
`;
