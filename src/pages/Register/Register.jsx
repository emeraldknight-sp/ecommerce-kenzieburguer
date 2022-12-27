import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFacebook, BsMicrosoft } from "react-icons/bs";

import { Banner } from "../../components/Banner";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form/Form";
import { Container } from "../../components/Container";
import { FormGroup } from "../../components/FormGroup";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";

import {
  StyledButtonGroup,
  StyledOptions,
  StyledRegister,
} from "./Register.style";
import { Divider } from "../../components/Divider";

export const Register = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <StyledRegister>
      <Container>
        <Banner />
        <Form onSubmit={handleClick}>
          <Logo />
          <h2>Criar conta</h2>
          <FormGroup>
            <Label htmlFor="name">Nome</Label>
            <Input
              type="text"
              id="name"
              name="first-name"
              size="md"
              border
              placeholder="John"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="surname">Sobrenome</Label>
            <Input
              type="text"
              id="surname"
              name="last-name"
              size="md"
              border
              placeholder="Doe"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              size="md"
              border
              placeholder="johndoe@email.com"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              name="password"
              size="md"
              border
              placeholder="Uma senha segura"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirm">Confirmação de Senha</Label>
            <Input
              type="password"
              id="confirm"
              name="confirm"
              size="md"
              border
              placeholder="Confirme sua senha segura"
            />
          </FormGroup>
          <FormGroup checkbox>
            <Label htmlFor="accept">
              Aceito os <Link to="/register">termos e condições</Link>
            </Label>
            <Input id="accept" name="accept" size="xs" type="checkbox" />
          </FormGroup>
          <Button type="submit">Cadastrar!</Button>
          <StyledOptions>
            <Divider>or</Divider>
            <StyledButtonGroup>
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
            </StyledButtonGroup>
            <span>
              Já possui conta? <Link to="/login">Entre aqui</Link>
            </span>
          </StyledOptions>
        </Form>
      </Container>
    </StyledRegister>
  );
};
