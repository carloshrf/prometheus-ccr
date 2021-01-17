import styled from "styled-components";

export const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 3px 0 #454150;
`;

export const NavbarContainer = styled.div`
  font-family: Poppins;
  display: flex;
  font-weight: 400;
  margin: 0 40px;
  align-items: baseline;
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: right;
  margin: 0 40px;

  span {
    font-size: 24px;
    font-weight: 700;
    color: #575757;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  justify-content: space-between;

  li:last-child {
    margin: 0 20px;
  }

  li:last-child:hover > ul {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

export const NavbarListItem = styled.li`
  text-decoration: none;
  display: block;
  line-height: 60px;
  cursor: pointer;
  padding: 0 15px;
  transition: background-color 0.3s;

  a {
    color: #000;
    height: 60px;
    font-size: 14px;
  }

  &:hover {
    background-color: #E5E5E5;
  }
`;

export const NavbarListItemLogin = styled.li`
  text-decoration: none;
  font-size: 14px;
  line-height: 60px;
  cursor: pointer;
  color: #000;
  padding: 0 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #E5E5E5;
  }
`;

export const DropdownLogin = styled.ul`
  background: #E5E5E5;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  list-style: none;
  right: 60px;
  display: none;

  li:last-child {
    margin: 0;
  }
`;

export const DropdownLoginItem = styled.li`
  width: 100%;
  clear: both;
  text-align: left;
  transition: background-color 0.4s;
  padding: 0 20px;

  a {
    width: 100%;
    font-size: 16px;
  }

  &:hover {
    background-color: #454150;
    color: #fff;
  }
`;
