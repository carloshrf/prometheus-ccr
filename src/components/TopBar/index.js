import React from "react";

import {
  Navbar,
  NavbarContainer,
  NavbarList,
  NavbarListItem,
  LoginArea,
  LoginButton,
  NavbarLogo,
} from "./styles";

const TopBar = () => {
  return (
    <Navbar>
      <NavbarLogo>Prometheus</NavbarLogo>
      <NavbarContainer>
        <NavbarList>
          <NavbarListItem>Home</NavbarListItem>
          <NavbarListItem>Quem Somos</NavbarListItem>
          <NavbarListItem>Contato</NavbarListItem>
        </NavbarList>

        <LoginArea>
          <LoginButton>Entrar</LoginButton>
        </LoginArea>
      </NavbarContainer>
    </Navbar>
  );
};

export default TopBar;
