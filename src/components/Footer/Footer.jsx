import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container } from "../Container";
import { StyledFooter } from "./Footer.style";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <div>
          <div className="address">
            <h3>Endereço</h3>
            <p>160 NE. Durham Street Williamstown, NJ 08094</p>
          </div>
          <div className="links">
            <h3>Contatos</h3>
            <ul>
              <li>
                <Link
                  to="https://www.instagram.com/davidalmeidadev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={16} />
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.linkedin.com/in/davidalmeidadev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={16} />
                </Link>
              </li>
              <li>
                <Link to="/" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span>
          &copy;
          {` ${new Date().getFullYear()}
               All Rights Reserved`}
        </span>
      </Container>
    </StyledFooter>
  );
};
