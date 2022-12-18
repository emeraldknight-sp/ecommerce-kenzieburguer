import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { StyledLogin } from "./Login.style";

import KenzieBurguerBrand from "../../assets/logo.svg";
import FastFood from "../../assets/fast-food-01.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = (e, phrase) => {
    e.preventDefault();

    toast.success(phrase, { id: phrase });
  };

  const onSubmit = (e) => {
    e.preventDefault();

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
          <form className="form" onSubmit={(e) => onSubmit(e)}>
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
              />
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
              />
            </div>
            <div className="checkbox">
              <label htmlFor="remember">Lembre-se de mim por 30 dias</label>
              <input id="remember" type="checkbox" />
            </div>
            <Button type="submit">Entrar</Button>
            <div className="span-group">
              <span className="span">
                <a href="/login" onClick={(e) => handleClick(e, "Redefinir!")}>
                  Esqueceu a senha?
                </a>
              </span>
              <span className="span">
                Não possui conta?
                <a
                  href="/login"
                  onClick={(e) => handleClick(e, "Criar conta!")}
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
