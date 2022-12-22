import { useState } from "react";

import { ProductList } from "../../components/ProductList";
import { Container } from "../../components/Container";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Cart } from "../../components/Cart";

import { BurguersKenzie } from "../../db/BurguersKenzie.mock";

import { StyledHomepage } from "./Homepage.style";

export const Homepage = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParam, setSearchParam] = useState("");
  const [items, setItems] = useState(BurguersKenzie);
  const [cart, setCart] = useState([]);

  const addToCart = (i) => {
    setItems((state) =>
      state.map((item, p) => {
        if (i === p) {
          setCart([
            ...cart,
            {
              name: item.name,
              price: item.price,
              quantity: item.quantity,
              image: item.image,
            },
          ]);
          return { ...item, inCart: true };
        }
        return item;
      })
    );
  };

  const removeFromCart = (i) => {
    let chosenItem, index;
    for (index = 0; index < cart.length; index++) {
      if (index === i) {
        chosenItem = cart[index].name;
        break;
      }

      setCart((state) => state.filter((item) => chosenItem !== item.name));
      setItems((state) =>
        state.map((item) =>
          item.name === chosenItem
            ? { ...item, inCart: false, quantity: 1 }
            : item
        )
      );
    }
  };

  // const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  const addItem = {
    inItems: (i) => {
      setItems((state) =>
        state.map((item, o) =>
          i === o && item.quantity < 10
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      console.log(i, "Add In Items!");
    },
    inCart: (i) => {
      setCart((state) =>
        state.map((item, o) =>
          i === o && item.quantity < 10
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      console.log(i, "Add In Cart!");
    },
  };

  const removeItem = {
    inItems: (i) => {
      setItems((state) =>
        state.map((item, o) =>
          i === o && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      console.log(i, "Remove In Items!");
    },
    inCart: (i) => {
      setCart((state) =>
        state.map((item, o) =>
          i === o && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      console.log(i, "Remove In Cart!");
    },
  };

  function searchProduct(value) {
    setSearchParam(value);
    if (searchParam.length > value.length) {
      showProducts("");
    }
  }

  // function handleClick(product) {
  //   if (!cart.includes(product)) {
  //     setCart([...cart, product]);
  //   }
  // }

  // function deleteProduct(cart, id) {
  //   setCart(cart.filter((product) => product.id !== id));
  // }

  function deleteAll() {
    setCart([]);
  }

  function showProducts(props) {
    const teste = new RegExp(props, "i");
    setFilteredProducts(
      items.filter(
        (product) => teste.test(product.name) || teste.test(product.category)
      )
    );
  }

  // useEffect(() => {
  //   fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
  //     .then((data) => data.json())
  //     .then((data) => setItems(data));
  // }, []);

  return (
    <StyledHomepage>
      <Header />
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
          items={filteredProducts.length > 0 ? filteredProducts : items}
          showProducts={showProducts}
          addItem={addItem.inItems}
          removeItem={removeItem.inItems}
          addToCart={addToCart}
        />
        <Cart
          cart={cart}
          // deleteProduct={deleteProduct}
          deleteAll={deleteAll}
          // handleClick={handleClick}

          addItem={addItem.inCart}
          removeItem={removeItem.inCart}
          removeFromCart={removeFromCart}
        />
      </Main>
      <Footer />
    </StyledHomepage>
  );
};
