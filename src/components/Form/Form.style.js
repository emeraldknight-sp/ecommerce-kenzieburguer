import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 250px;
  padding: 10px;
  margin: 0 auto;
  border: 2px solid var(--transparent);
  border-radius: 8px;

  h2 {
    font-size: var(--heading-2);
    line-height: var(--lineheight-h2);
    color: var(--color-primary);
    font-weight: bold;
    text-align: center;
  }

  a {
    margin: 0 auto;
  }

  /* span {
    display: flex;
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
    color: var(--negative);
    gap: 4px;
  } */

  @media only screen and (min-width: 425px) {
    width: 300px;
  }
`;
