import styled from 'styled-components';

export const Navbar = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #F9F9F9;
  display: flex;
  justify-content: space-between;
`;

export const NavbarContainer = styled.div`
  font-family: Poppins;
  display: flex;
  font-weight: 400;
  margin: 0 40px;
  align-items: baseline;
`;

export const NavbarLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: right;
  margin: 0 40px;
  color: #575757;
`;

export const NavbarList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0 10px;
  justify-content: space-between;
`;

export const NavbarListItem = styled.li`
  text-decoration: none;
  font-size: 14px;
  display: block;
  height: 60px;
  line-height: 60px;
  cursor: pointer;
  padding: 0 10px;
  color: #000;
`;

export const LoginArea = styled.div`
  display: flex;
  padding: 0 0 0 60px;
`;

export const LoginButton = styled.button`
  background: none;
  border: 0;
  height: 100%;
  font-family: Poppins;
  font-weight: 400;
  cursor: pointer;
`;