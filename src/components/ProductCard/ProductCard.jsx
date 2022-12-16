import "./styles.css";

export const ProductCard = ({ product, handleClick }) => {
  return (
    <div className="card">
      <figure className="card__figure">
        <img className="card__image" src={product.img} alt={product.name} />
      </figure>
      <div className="card__info">
        <div className="card__details">
          <h3 className="card__title">{product.name}</h3>
          <span className="card__category">{product.category}</span>
        </div>
        <span className="card__price">
          {product.price.toLocaleString("PT-BR", {
            currency: "BRL",
            style: "currency",
          })}
        </span>
        <button className="card__button" onClick={() => handleClick(product)}>
          Adicionar
        </button>
      </div>
    </div>
  );
};
