import styled from "styled-components";

export const StyledCartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item__card {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .item__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 60px;
    height: 60px;

    background-color: var(--gray-2);
    padding: 5px;
    border: none;
    border-radius: 5px;
  }

  .item__image {
    width: 100%;
    height: 100%;
  }

  .item__details {
    display: flex;
    flex-direction: column;
  }

  .item__title {
    font-size: var(--content-md);
    line-height: var(--line-height-md);
    color: var(--gray-4);
    font-weight: bold;
  }

  .item__category,
  .item__price {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 4px;
    font-size: var(--content-sm);
    line-height: var(--line-height-sm);
    font-weight: 400;
    color: var(--gray-3);
  }

  .button__group {
    display: flex;
    flex-direction: column;
    width: 100px;
    gap: 4px;
  }

  .button__group__counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 80px;
  gap: 4px;

  a {
    font-size: var(--content-xs);
    line-height: var(--line-height-xs);
    text-align: right;
  }

  a:nth-child(2) {
    color: var(--information);
  }

  a:nth-child(3) {
    color: var(--color-secondary);
  }
`;

export const ButtonGroupCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
