import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FiMenu } from "react-icons/fi";

import { Logo } from "../Logo";
import { Button } from "../Button";
import { Container } from "../Container";

import { StyledHeader } from "./Header.style";

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
        <Logo />
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
