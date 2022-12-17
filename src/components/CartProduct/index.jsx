import "./styles.css";

function CartProduct({ product, currentSale, deleteProduct }) {
  return (
    <div className="item">
      <div className="item__card">
        <figure className="item__figure">
          <img className="item__image" src={product.img} alt={product.name} />
          <figcaption></figcaption>
        </figure>
        <div className="item__details">
          <h3 className="item__title">
            {product.name.length > 15
              ? `${product.name.slice(0, 13)}...`
              : product.name}
          </h3>
          <span className="item__category">{product.category}</span>
        </div>
      </div>
      <button type="button"
        className="item__remove"
        onClick={() => deleteProduct(currentSale, product.id)}
      >
        Remover
      </button>
    </div>
  );
}

export default CartProduct;
