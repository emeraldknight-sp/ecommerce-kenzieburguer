import { Button } from "../Button";
import { Container } from "../Container";

import { toast } from "react-hot-toast";
import { FiMenu } from "react-icons/fi";

import KenzieBurguerBrand from "../../assets/logo.svg";
import { StyledHeader } from "./Header.style";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const menu = () => {
    toast.success("Menu", { id: "menu" });
  };

  return (
    <StyledHeader>
      <Container>
        <Button type="button" variant="icon" onClick={menu}>
          <FiMenu size={20} />
        </Button>
        <Link to="/">
          <figure>
            <img src={KenzieBurguerBrand} alt="brand" />
          </figure>
        </Link>
        <div className="header__button__group">
          <Button
            type="button"
            display="none"
            variant="text"
            bold
            onClick={() => navigate("/register")}
          >
            Registre-se
          </Button>
          <Button type="button" onClick={() => navigate("/login")}>
            Entrar
          </Button>
        </div>
      </Container>
    </StyledHeader>
  );
};
