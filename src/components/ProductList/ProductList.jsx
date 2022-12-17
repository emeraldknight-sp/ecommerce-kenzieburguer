import { Container } from "../Container";
import { ProductCard } from "../ProductCard/ProductCard";
import { StyledProductList } from "./ProductList.style";

export const ProductList = ({ products, handleClick }) => {
  return (
    <StyledProductList>
      <Container>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </Container>
    </StyledProductList>
  );
};
