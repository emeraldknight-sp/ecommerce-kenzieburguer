import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

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
                <a
                  href="https://www.instagram.com/davidalmeidadev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={16} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/davidalmeidadev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={16} />
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={16} />
                </a>
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
