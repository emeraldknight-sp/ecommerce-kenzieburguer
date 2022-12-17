import { Container } from "../Container";
import { ProductCard } from "../ProductCard/ProductCard";
import "./styles.css";

export const ProductList = ({ products, handleClick }) => {
  return (
    <div className="product-list">
      <Container>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </Container>
    </div>
  );
};
