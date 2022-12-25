import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFacebook, BsMicrosoft } from "react-icons/bs";

import KenzieBurguerBrand from "../../assets/logo.svg";
import KenzieBurguerImage from "../../assets/fast-food-01.svg";

import { Button } from "../../components/Button";
import { Container } from "../../components/Container";

import {
  StyledFormCreateAccount,
  StyledLogo,
  StyledOptionsLogin,
  StyledRegister,
} from "./Register.style";
import { Link } from "react-router-dom";

export const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <StyledRegister>
      <Container>
        <StyledLogo>
            <figure>
              <img src={KenzieBurguerImage} alt="brand" width={150} />
            </figure>
        </StyledLogo>
        <StyledFormCreateAccount onSubmit={handleClick}>
          <Link to="/">
            <figure>
              <img src={KenzieBurguerBrand} alt="logo" />
            </figure>
          </Link>
          <h2>Criar conta</h2>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="date" placeholder="Data de Nascimento" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmação de senha" />
          <Button type="submit">Cadastrar!</Button>
        <StyledOptionsLogin>
          <div className="bar">
            <span>-----------</span> ou <span>-----------</span>
          </div>
          <div className="options">
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
