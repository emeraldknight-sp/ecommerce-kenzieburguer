import { ProductCard } from "../ProductCard/ProductCard";
import "./styles.css";

export const ProductList = ({ products, handleClick }) => {
  return (
    <article className="article">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} handleClick={handleClick} />
      ))}
    </article>
  );
};
