import { Product } from "../Product";
import "./styles.css";

export const ProductList = ({ products, handleClick }) => {
  return (
    <section className="section">
      {products.map((product) => (
        <Product key={product.id} product={product} handleClick={handleClick} />
      ))}
    </section>
  );
};
