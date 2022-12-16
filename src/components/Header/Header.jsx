import "./styles.css";

import { ReactComponent as KenzieBurguerBrand } from "../../assets/logo.svg";
import { Container } from "../Container";
import { FiMenu } from "react-icons/fi";
import { toast } from "react-hot-toast";
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
    toast.success("Entrar", { id: "login" });
  };

  const menu = () => {
    toast.success("Menu", { id: "menu" });
  };

  const register = () => {
    toast.success("Registro", { id: "register" });
  };

  return (
    <header className="header">
      <Container>
        <button type="button" className="button__sidebar" onClick={menu}>
          <FiMenu size={20} />
        </button>
        <KenzieBurguerBrand />
        <div className="header__button__group">
          <button type="button" className="button__sign-up" onClick={register}>
            Registre-se
          </button>
          <button type="button" className="button__sign-in" onClick={login}>
            Entrar
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
