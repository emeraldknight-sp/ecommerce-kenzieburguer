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

export const StyledProductCard = styled.div`
  background-color: white;
  min-width: 220px;
  border: 2px solid var(--gray-2);
  border-radius: 5px;

  .card__figure {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-color: var(--gray-1);
  }

  .card__image {
    width: 177px;
    height: 177px;
  }

  .card__info {
    display: flex;
    flex-direction: column;
    gap: 14px;
    padding: 18px 20px;
  }

  .card__title {
    font-size: var(--content-md);
    line-height: var(--line-height-md);
    font-weight: bold;
    line-height: 24px;
    color: var(--gray-4);
  }

  .card__category {
    font-size: var(--content-sm);
    line-height: var(--line-height-sm);
    line-height: 16px;
    color: var(--gray-3);
  }

  .card__price {
    font-size: var(--content-sm);
    line-height: var(--line-height-sm);
    font-weight: 600;
    line-height: 24px;
    color: var(--color-primary);
  }

  .card__button {
    background-color: var(--color-primary);
    font-size: var(--content-sm);
    line-height: var(--line-height-sm);
    font-weight: 600;
    color: white;

    width: 110px;
    height: 40px;
    padding: 0 20px;

    border: 2px solid var(--color-primary);
    border-radius: 8px;
    cursor: pointer;
  }

  .counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 50%;
    margin: 0 auto;

    span {
      color: var(--gray-4);
    }
  }

  @media only screen and (min-width: 768px) {
    min-width: 250px;
  }

  @media only screen and (min-width: 1024px) {
    flex: 1;
  }
`;