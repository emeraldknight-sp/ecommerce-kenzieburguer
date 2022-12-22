import {
  MdOutlineAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";
import { Button } from "../Button";
import { StyledCartProduct } from "./CartProduct.style";

export const CartProduct = ({ item, index, addItem, removeItem }) => {
  return (
    <StyledCartProduct>
      <div className="item__card">
        <figure className="item__figure">
          <img className="item__image" src={item.image} alt={item.name} />
        </figure>
        <div className="item__details">
          <h3 className="item__title">
            {item.name.length > 15 ? `${item.name.slice(0, 13)}...` : item.name}
          </h3>
          <span className="item__category">{item.category}</span>
          <span className="item__price">
            {item.price.toLocaleString("PT-BR", {
              currency: "BRL",
              style: "currency",
            })}
          </span>
        </div>
      </div>
      <Button
        size="sm"
        variant="text"
        onClick={() => removeItem(index)}
      >
        <MdOutlineRemoveCircleOutline size={24} />
      </Button>
      <span> {item.quantity} </span>
      <Button
        size="sm"
        variant="text"
        onClick={() => addItem(index)}
      >
        <MdOutlineAddCircleOutline size={24} />
      </Button>
    </StyledCartProduct>
  );
};
