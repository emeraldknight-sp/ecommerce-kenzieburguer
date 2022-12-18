import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 76px 0 0;

  .header__search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    max-width: 700px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    margin: 20px auto 0;
    padding: 5px;
  }

  .header__search__input {
    border: none;
    outline: none;
    width: 100%;
  }

  .header__search__button {
    background-color: var(--color-primary);
    font-size: var(--content-md);
    line-height: var(--line-height-md);
    color: white;
    padding: 8px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
`;
