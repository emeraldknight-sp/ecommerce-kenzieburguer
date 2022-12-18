import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--gray-1);
  position: fixed;
  width: 100%;

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
  }

  .header__button__group {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .button__sidebar {
    display: flex;
    background-color: var(--gray-1);
    border: 1px solid transparent;
  }

  .button__sign-in {
    background: var(--color-primary);
    color: var(--white);
    font-weight: 600;
    border: 2px solid var(--color-primary);
    border-radius: 4px;
    height: 36px;
  }

  .button__sign-up {
    display: none;
    background: transparent;
    color: var(--color-primary);
    font-size: var(--content-md);
    line-height: var(--line-height-md);
    border: none;
  }

  @media only screen and (min-width: 768px) {
    .button__sign-up {
      display: inline-block;
    }
  }

  @media only screen and (min-width: 1000px) {
    .button__sidebar {
      display: none;
    }
  }
`;
