import styled from "styled-components";

export const StyledProductList = styled.div`
  section {
    display: flex;
    flex-direction: row;
    gap: 20px;
    overflow-y: auto;
    padding: 20px 0;
  }

  section::-webkit-scrollbar {
    width: 1px;
  }

  section::-webkit-scrollbar-thumb {
    background-color: var(--color-primary);
    width: 3px;
    border-radius: 9999px;
    border: 5px solid var(--white);
  }

  @media only screen and (min-width: 1024px) {
    section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  @media only screen and (min-width: 1440px) {
    section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }

  @media only screen and (min-width: 2560px) {
    section {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
`;
