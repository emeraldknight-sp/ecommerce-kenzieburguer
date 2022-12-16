import "./styles.css";

import { ReactComponent as Icon } from "../../assets/logo.svg";
import { Container } from "../Container";
// import { useState } from "react";

// eslint-disable-next-line no-unused-vars
export const Header = ({ showProducts }) => {
  // const [searchParam, setSearchParam] = useState("");

  // function searchProduct(value) {
  //   setSearchParam(value);

  //   if (searchParam.length > value.length) {
  //     showProducts("");
  //   }
  // }

  const login = () => {
    alert("Entrar");
  };

  const menu = () => {
    alert("Menu");
  };

  const register = () => {
    alert("Registro");
  };

  return (
    <header className="header">
      <Container>
        <button type="button" className="button__sidebar" onClick={menu}>
          X
        </button>
        <Icon />
        <div className="header__button__group">
          <button type="button" className="button__sign-in" onClick={login}>
            Entrar
          </button>
          <button type="button" className="button__sign-up" onClick={register}>
            Registre-se
          </button>
        </div>
        {/* <div className="header__search">
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
          Pesquisar
        </button>
      </div> */}
      </Container>
    </header>
  );
};
