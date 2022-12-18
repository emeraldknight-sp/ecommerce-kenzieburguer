import styled from "styled-components";

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

  @media only screen and (min-width: 768px) {
    min-width: 250px;
  }

  @media only screen and (min-width: 1024px) {
    /* min-width: 280px; */
    flex: 1;
  }
`;
