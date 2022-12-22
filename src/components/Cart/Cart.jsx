import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

import { Button } from "../Button";
import { CartProduct } from "../CartProduct";

import { StyledCart } from "./Cart.style.js";

export const Cart = ({
  cart,
  removeAll,
  addItem,
  removeItem,
  removeFromCart,
  cartCountTotal,
}) => {
  const items = cart.map((item) => item.name);
  const price = cart.map((item) => item.price);
  const subtotal = price.reduce((acc, currentValue) => acc + currentValue, 0);

  const order = {
    id: uuidv4(),
    items: items,
    price: price,
    subtotal: subtotal,
  };

  const sendOrder = () => {
    toast.success("Pedido finalizado!", { id: "sendOrder" });
    return console.log({status: "Pedido realizado", order: order});
  };

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
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>
            <div className="car__values">
              <div className="car__values__details">
                <span className="car__total">Total</span>
                <span className="car__value">{cartCountTotal}</span>
              </div>
              <div className="button__group">
                <Button
                  size="md"
                  variant="text"
                  className="car__button"
                  onClick={() => removeAll(cart)}
                >
                  Remover todos
                </Button>
                <Button size="md" full onClick={() => sendOrder()}>
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
