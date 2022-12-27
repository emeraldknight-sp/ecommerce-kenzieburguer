import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

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
    text-decoration: none;
    color: var(--information);
  }

  a:visited {
    color: var(--gray-3);
  }

  a:active {
    color: var(--color-primary);
  }

  /* span {
    display: flex;
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
    color: var(--negative);
    gap: 4px;
  } */
`;
