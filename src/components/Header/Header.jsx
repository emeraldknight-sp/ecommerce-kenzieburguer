import { Button } from "../Button";
import { Container } from "../Container";

import { toast } from "react-hot-toast";
import { FiMenu } from "react-icons/fi";

import KenzieBurguerBrand from "../../assets/logo.svg";
import { StyledHeader } from "./Header.style";

export const Header = () => {
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
    <StyledHeader>
      <Container>
        <Button type="button" variant="icon" onClick={menu}>
          <FiMenu size={20} />
        </Button>
        <div>
          <a
            href="https://jsonplaceholder.typicode.com/"
            target="_blank"
            rel="noreferrer"
          >
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
      </Container>
    </StyledHeader>
  );
};
