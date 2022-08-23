import "./styles.css";

import { ReactComponent as Icon } from "../../assets/img/logo.svg";
import { useState } from "react";

function Header({ showProducts }) {
  
  const [searchParam, setSearchParam] = useState("");

  function searchProduct(value) {
    setSearchParam(value);

    if (searchParam.length > value.length) {
      showProducts("");
    }
  }

  return (
    <header className="header">
      <Icon />
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
          Pesquisar
        </button>
      </div>
    </header>
  );
}

export default Header;
