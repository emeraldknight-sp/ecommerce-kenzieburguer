import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsFacebook, BsMicrosoft } from "react-icons/bs";

import { Banner } from "../../components/Banner";
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form/Form";
import { Container } from "../../components/Container";

import { StyledOptionsLogin, StyledRegister } from "./Register.style";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import { FormGroup } from "../../components/FormGroup";

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
            <Label htmlFor="birthday">Data de Nascimento</Label>
            <Input
              type="date"
              id="birthday"
              name="birthday"
              size="md"
              border
              placeholder="Data de Nascimento"
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
        </Form>
      </Container>
    </StyledRegister>
  );
};
