import { toast } from "react-hot-toast";
import { Button } from "../Button";
import { CartProduct } from "../CartProduct";

import { StyledCart } from "./Cart.style.js";

export const Cart = ({ cart, deleteAll, addItem, removeItem }) => {
  return (
    <StyledCart>
      <div className="car__header">
        <h3 className="car__title">Carrinho de Compras</h3>
      </div>
      <div className="car__main">
        {cart.length === 0 ? (
          <div className="car__items--empty">
            <h3 className="car__title">Sua sacola está vazia</h3>
            <span className="car__subtitle">Adicione itens</span>
          </div>
        ) : (
          <>
            <div className="car__items">
              {cart.map((item, index) => (
                <CartProduct
                  key={item.id}
                  index={index}
                  item={item}
                  addItem={addItem}
                  removeItem={removeItem}
                />
              ))}
            </div>
            <div className="car__values">
              <div className="car__values__details">
                <span className="car__total">Total</span>
                <span className="car__value">
                  {cart
                    .reduce(
                      (initialValue, item) => initialValue + item.price,
                      0
                    )
                    .toLocaleString("PT-BR", {
                      currency: "BRL",
                      style: "currency",
                    })}
                </span>
              </div>
              <div className="button__group">
                <Button
                  size="md"
                  variant="text"
                  className="car__button"
                  onClick={() => deleteAll(cart)}
                >
                  Remover todos
                </Button>
                <Button
                  size="md"
                  full
                  onClick={() => toast.success("Pedido finalizado!")}
                >
                  Finalizar pedido!
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </StyledCart>
  );
};
