import Logo from "components/Logo/Logo";
import React from "react";
import { HeaderStyled } from "./Header.styled";

function Header() {
  return (
    <HeaderStyled>
      <Logo size="small" />
    </HeaderStyled>
  );
}

export default Header;
