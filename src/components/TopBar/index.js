import React from "react";

import {
  Navbar,
  NavbarContainer,
  NavbarList,
  NavbarListItem,
  NavbarListItemLogin,
  NavbarLogo,
  DropdownLogin,
  DropdownLoginItem,
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
          <NavbarListItemLogin>Entrar
            <DropdownLogin>
              <DropdownLoginItem>Cadastrar</DropdownLoginItem>
              <DropdownLoginItem>Já sou Cadastrado</DropdownLoginItem>
            </DropdownLogin>
          </NavbarListItemLogin>

        </NavbarList>
      </NavbarContainer>
    </Navbar>
  );
};

export default TopBar;
