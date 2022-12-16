import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Main } from "./components/Main/Main";

import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";

import "./styles/reset.css";

export const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);

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
    <div className="app">
      <Header showProducts={showProducts} />
      <Main>
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
    </div>
  );
};
