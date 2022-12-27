import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFacebook, BsMicrosoft } from "react-icons/bs";

import { Banner } from "../../components/Banner";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";

import {
  StyledFormCreateAccount,
  StyledOptionsLogin,
  StyledRegister,
} from "./Register.style";

export const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <StyledRegister>
      <Container>
        <Banner />
        <StyledFormCreateAccount onSubmit={handleClick}>
          <Logo />
          <h2>Criar conta</h2>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="date" placeholder="Data de Nascimento" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmação de senha" />
          <div className="checkbox">
            <label htmlFor="accept">
              Aceito os <Link to="/register">termos e condições</Link>
            </label>
            <input id="accept" type="checkbox" />
          </div>
          <Button type="submit">Cadastrar!</Button>
          <StyledOptionsLogin>
            <span>----------- ou -----------</span>
            <div>
              <Button variant="text">
                <FcGoogle />
              </Button>
              <Button variant="text">
                <BsFacebook />
              </Button>
              <Button variant="text">
                <BsApple />
              </Button>
              <Button variant="text">
                <BsMicrosoft />
              </Button>
            </div>
          </StyledOptionsLogin>
        </StyledFormCreateAccount>
      </Container>
    </StyledRegister>
  );
};
