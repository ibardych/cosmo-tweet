import { FooterStyled } from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      <ul>
        <li>© 2023 All Rights Reserved</li>
        <li>
          <p>
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/iurii-bardych/"
              target="_blank"
              className="name"
              rel="noopener noreferrer"
            >
              Iurii Bardych
            </a>
          </p>
        </li>
      </ul>
    </FooterStyled>
  );
};

export default Footer;
