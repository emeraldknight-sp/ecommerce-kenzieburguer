import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Banner } from "../../components/Banner";
import { Logo } from "../../components/Logo";

import { StyledLogin, StyledSpan, StyledSpanGroup } from "./Login.style";
import { Form } from "../../components/Form/Form";
import { FormGroup } from "../../components/FormGroup";
import { Label } from "../../components/Label";
import { Input } from "../../components/Input";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Precisa ser um email válido")
      .required("Campo obrigatório!"),
    password: yup
      .string()
      .min(8, "Precisa ter no mínimo 8 caracteres")
      .required("Campo obrigatório!"),
    check: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const passwordReset = (e) => {
    e.preventDefault();
    toast.success("Redefinir senha!", { id: "pwd" });
  };

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Dados enviados!", { id: "data" });
  };

  return (
    <StyledLogin>
      <Container>
        <Banner />
        <div className="login">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Logo />
            <h2>Entrar</h2>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Digite seu email ou telefone"
                {...register("email")}
              />
              <span>{errors.email?.message}</span>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <span>{errors.password?.message}</span>
            </FormGroup>

            <FormGroup checkbox>
              <Label htmlFor="remember">Lembre-se de mim por 30 dias</Label>
              <Input
                type="checkbox"
                id="remember"
                name="remember"
                {...register("check")}
              />
            </FormGroup>

            <Button type="submit">Entrar</Button>

            <StyledSpanGroup>
              <StyledSpan>
                <Link to="/login" onClick={passwordReset}>
                  Esqueceu sua senha?
                </Link>
              </StyledSpan>
              <StyledSpan>
                Não possui conta?
                <Link to="/register">Crie uma agora!</Link>
              </StyledSpan>
            </StyledSpanGroup>
          </Form>
        </div>
      </Container>
    </StyledLogin>
  );
};
