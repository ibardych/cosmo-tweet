import { LogoStyled, Name } from "./Logo.styled";
import logo from "images/logo@2x.png";

function Logo({ size }) {
  return (
    <LogoStyled size={size} className="logo" to="/">
      <img src={logo} alt="Logo" />
      <Name size={size}>
        Cosmo<span>Tweet</span>
      </Name>
    </LogoStyled>
  );
}

export default Logo;
