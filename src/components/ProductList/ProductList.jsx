import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
import { Button } from "../Button";
import { Container } from "../Container";

import { StyledProductCard, StyledProductList } from "./ProductList.style";

export const ProductList = ({ items, addItem, removeItem, addToCart }) => {
  return (
    <StyledProductList>
      <Container>
        {items.map((item, index) => (
          <StyledProductCard key={item.id}>
            <figure className="card__figure">
              <img className="card__image" src={item.image} alt={item.name} />
            </figure>
            <div className="card__info">
              <div className="card__details">
                <h3 className="card__title">{item.name}</h3>
                <span className="card__category">{item.category}</span>
              </div>
              <span className="card__price">
                {item.price.toLocaleString("PT-BR", {
                  currency: "BRL",
                  style: "currency",
                })}
              </span>
              <div className="counter">
                <Button variant="text" onClick={() => removeItem(index)}>
                  <MdOutlineRemove />
                </Button>
                <span>{item.quantity}</span>
                <Button variant="text" onClick={() => addItem(index)}>
                  <MdOutlineAdd />
                </Button>
              </div>
              <Button onClick={() => addToCart(index)}>
                Adicionar ao carrinho
              </Button>
            </div>
          </StyledProductCard>
        ))}
      </Container>
    </StyledProductList>
  );
};
