import { Button } from "../Button";
import { Container } from "../Container";

import { toast } from "react-hot-toast";
import { FiMenu } from "react-icons/fi";

import KenzieBurguerBrand from "../../assets/logo.svg";
import { StyledHeader } from "./Header.style";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const login = (link) => {
    navigate(`${link}`);
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
        <a href="/">
          <figure>
            <img src={KenzieBurguerBrand} alt="brand" />
          </figure>
        </a>
        <div className="header__button__group">
          <Button
            type="button"
            display="none"
            variant="text"
            onClick={register}
          >
            Registre-se
          </Button>
          <Button type="button" onClick={() => login("/login")}>
            Entrar
          </Button>
        </div>
      </Container>
    </StyledHeader>
  );
};
