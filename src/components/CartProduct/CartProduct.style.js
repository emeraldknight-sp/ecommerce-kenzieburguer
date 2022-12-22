import styled from "styled-components";

export const StyledCartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .item__card {
    display: flex;
    gap: 10px;
  }

  .item__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: var(--gray-2);
    padding: 5px;
    border: none;
    border-radius: 5px;
  }

  .item__image {
    width: 50px;
    height: 50px;
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

  .item__category, .item__price {
    font-size: var(--content-sm);
    line-height: var(--line-height-sm);
    font-weight: 400;
    color: var(--gray-3);
  }
`;
