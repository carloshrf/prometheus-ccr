import React from "react";

import { Link } from 'react-router-dom';

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
      <NavbarLogo><span>Prometheus</span></NavbarLogo>
      <NavbarContainer>
        <NavbarList>
          <NavbarListItem><Link to="/">Home</Link></NavbarListItem>
          <NavbarListItem><Link to="/">Quem Somos</Link></NavbarListItem>
          <NavbarListItem><Link to="/">Contato</Link></NavbarListItem>
          <NavbarListItemLogin>Entrar
            <DropdownLogin>
              <DropdownLoginItem><Link to="cadastrar-usuario">cadastrar</Link></DropdownLoginItem>
              <DropdownLoginItem><Link to="entrar">já sou cadastrado</Link></DropdownLoginItem>
              <DropdownLoginItem><Link to="">empresas parceiras</Link></DropdownLoginItem>
              <DropdownLoginItem><Link to="cadastrar-parceiro">quero ser uma empresa parceira</Link></DropdownLoginItem>
            </DropdownLogin>
          </NavbarListItemLogin>

        </NavbarList>
      </NavbarContainer>
    </Navbar>
  );
};

export default TopBar;
