import { Link } from "react-router-dom";
import { StyledLogo } from "./Logo.style";
import KenzieBurguerLogo from "../../assets/logo.svg";

export const Logo = () => {
  return (
    <StyledLogo>
      <Link to="/">
        <img src={KenzieBurguerLogo} alt="logo" />
      </Link>
    </StyledLogo>
  );
};
