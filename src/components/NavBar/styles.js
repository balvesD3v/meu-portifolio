import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.nav`
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  display: flex;
  color: #fff;
  font-weight: 300;
`;

export const Brand = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
`;

export const DesktopMenu = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 1.5em;
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
  display: none;
`;

export const MobileMenu = styled.div`
  display: ${(props) => (props.open ? "block" : "none")};
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 1rem;
`;

export const MobileMenuItem = styled.li`
  margin-bottom: 1rem;
  text-align: center;
`;

export const Links = styled(NavLink)`
  color: ${({ isActive }) =>
    isActive ? "red" : "#fff"}; /* Altera a cor do texto */

  text-decoration: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${({ isActive }) =>
      isActive ? "100%" : "0"}; /* Altera a largura da linha */
    height: 3px;
    background-color: ${({ theme }) => theme.THEME.primaryColor};
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.THEME.primaryColor};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
