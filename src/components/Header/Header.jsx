import "./styles.css";

// import { ReactComponent as KenzieBurguerBrand } from "../../assets/logo.svg";
import KenzieBurguerBrand from "../../assets/logo.svg";
import { Container } from "../Container";
import { FiMenu } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { Button } from "../Button";
// import { useNavigate } from "react-router-dom";
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

  // const navigate = useNavigate();

  return (
    <header className="header">
      <Container>
        <Button type="button" variant="icon" onClick={menu}>
          <FiMenu size={20} />
        </Button>
        <div>
          <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer">
            <figure>
              <img src={KenzieBurguerBrand} alt="brand" />
            </figure>
          </a>
        </div>
        <div className="header__button__group">
          <Button
            type="button"
            display="none"
            variant="text"
            onClick={register}
          >
            Registre-se
          </Button>
          <Button type="button" onClick={login}>
            Entrar
          </Button>
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
