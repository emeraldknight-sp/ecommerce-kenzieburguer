import styled from "styled-components";

export const StyledCartProduct = styled.div`
  display: flex;
  justify-content: space-between;

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
    width: 80px;
    padding: 5px;
    border: none;
    border-radius: 5px;
  }

  .item__image {
    width: 70px;
  }

  .item__details {
    display: flex;
    flex-direction: column;
  }

  .item__title {
    font-size: var(--heading-3);
    color: var(--gray-4);
    font-weight: bold;
    line-height: 24px;
  }

  .item__category {
    font-size: var(--caption);
    font-weight: 400;
    line-height: 16px;
    color: var(--gray-3);
  }

  .item__remove {
    font-size: var(--caption);
    font-weight: 400;
    line-height: 16px;
    color: var(--gray-3);
    cursor: pointer;
  }
`;
