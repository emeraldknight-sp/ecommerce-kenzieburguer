import Product from "../Product";
import "./styles.css";

const ProductList = ({ products, showProducts, handleClick }) => {
  return (
    <section className="section">
      {products.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default ProductList;
