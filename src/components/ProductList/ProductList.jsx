import { ProductCard } from "../ProductCard/ProductCard";
import "./styles.css";

export const ProductList = ({ products, handleClick }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} handleClick={handleClick} />
      ))}
    </div>
  );
};
