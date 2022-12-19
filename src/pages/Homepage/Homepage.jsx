import { useEffect, useState } from "react";

import { Cart } from "../../components/Cart";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { ProductList } from "../../components/ProductList";

import { StyledHomepage } from "./Homepage.style";

export const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

  const [searchParam, setSearchParam] = useState("");

  function searchProduct(value) {
    setSearchParam(value);

    if (searchParam.length > value.length) {
      showProducts("");
    }
  }

  function handleClick(product) {
    if (!currentSale.includes(product)) {
      setCurrentSale([...currentSale, product]);
    }
  }

  function deleteProduct(currentSale, id) {
    setCurrentSale(currentSale.filter((product) => product.id !== id));
  }

  function deleteAllProducts() {
    setCurrentSale([]);
  }

  function showProducts(props) {
    const teste = new RegExp(props, "i");
    setFilteredProducts(
      products.filter(
        (product) => teste.test(product.name) || teste.test(product.category)
      )
    );
  }

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <StyledHomepage>
      <Header showProducts={showProducts} />
      <Main>
        <div>
          <Container>
            <div className="header__search">
              <input
                className="header__search__input"
                onChange={(e) => searchProduct(e.target.value)}
                type="search"
                placeholder="Digitar pesquisa"
              />
              <button
                className="header__search__button"
                onClick={() => showProducts(searchParam)}
              >
                Buscar
              </button>
            </div>
          </Container>
        </div>
        <ProductList
          products={filteredProducts.length > 0 ? filteredProducts : products}
          showProducts={showProducts}
          handleClick={handleClick}
        />
        <Cart
          currentSale={currentSale}
          deleteProduct={deleteProduct}
          deleteAllProducts={deleteAllProducts}
        />
      </Main>
      <Footer />
    </StyledHomepage>
  );
};
