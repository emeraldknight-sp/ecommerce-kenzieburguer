import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { StyledLogin } from "./Login.style";

import KenzieBurguerBrand from "../../assets/logo.svg";
import FastFood from "../../assets/fast-food-01.svg";

export const Login = () => {
  const navigate = useNavigate();

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

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Dados enviados!", { id: "data" });
  };

  return (
    <StyledLogin>
      <Container>
        <figure className="figure__icon-login">
          <img className="image__icon-login" src={FastFood} alt="banner" />
        </figure>
        <div className="login">
          <div className="brand">
            <button
              type="button"
              className="login__button"
              onClick={() => navigate("/")}
            >
              <figure>
                <img src={KenzieBurguerBrand} alt="brand" />
              </figure>
            </button>
          </div>
          {/* FORMULARIO */}
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                className="input"
                id="email"
                name="email"
                placeholder="Digite seu email ou telefone"
                autoComplete="off"
                {...register("email")}
              />
              <span className="span error">{errors.email?.message}</span>
            </div>

            <div className="input-container">
              <label className="label" htmlFor="password">
                Senha
              </label>
              <input
                type="password"
                className="input"
                id="password"
                name="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <span className="span error">{errors.password?.message}</span>
            </div>

            <div className="checkbox">
              <label htmlFor="remember">Lembre-se de mim por 30 dias</label>
              <input id="remember" type="checkbox" {...register("check")} />
            </div>

            <Button type="submit">Entrar</Button>

            <div className="span-group">
              <span className="span">
                <a
                  href="/login"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.success("Redefinir senha!", { id: "pwd" });
                  }}
                >
                  Esqueceu a senha?
                </a>
              </span>
              <span className="span">
                Não possui conta?
                <a
                  href="/login"
                  onClick={(e) => {
                    e.preventDefault();
                    toast.success("Criar conta!", { id: "signup" });
                  }}
                >
                  Crie uma agora!
                </a>
              </span>
            </div>
          </form>
        </div>
      </Container>
    </StyledLogin>
  );
};
