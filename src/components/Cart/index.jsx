import CartProduct from "../CartProduct";
import "./styles.css";

function Cart({ currentSale, deleteProduct, deleteAllProducts }) {

  return (
    <div className="car">
      <div className="car__header">
        <h3 className="car__title">Carrinho de Compras</h3>
      </div>
      <div className="car__main">
        {currentSale.length === 0 ? (
          <div className="car__items--empty">
            <h3 className="car__title">Sua sacola está vazia</h3>
            <span className="car__subtitle">Adicione itens</span>
          </div>
        ) : (
          <>
            <div className="car__items">
              {currentSale.map((product) => (
                <CartProduct
                  key={product.id}
                  product={product}
                  deleteProduct={deleteProduct}
                  currentSale={currentSale}
                />
              ))}
            </div>
            <div className="car__values">
              <div className="car__values__details">
                <span className="car__total">Total</span>
                <span className="car__value">
                  {currentSale
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
              <button
                className="car__button"
                onClick={() => deleteAllProducts(currentSale)}
              >
                Remover todos
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
