import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--gray-1);
  width: 100%;
  padding: 10px 0;

  section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  section > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h3 {
    font-size: var(--content-md);
    line-height: var(--line-height-md);
    color: var(--gray-4);
  }

  p {
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
    color: var(--gray-4);
  }

  span {
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
    color: var(--gray-4);
    margin: 0 auto;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
  }

  a {
    color: var(--gray-4);
  }

  .address,
  .links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
