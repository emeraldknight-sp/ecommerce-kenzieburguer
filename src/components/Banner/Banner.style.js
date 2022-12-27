import styled from "styled-components";

export const StyledBanner = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 150px;
  }

  @media only screen and (min-width: 1024px) {
    img {
      width: 350px;
    }
  }

  @media only screen and (min-width: 1440px) {
    img {
      width: 450px;
    }
  }
`;
