import React, { useState } from "react";
import {
  NavbarContainer,
  Brand,
  DesktopMenu,
  MobileMenuButton,
  MobileMenu,
  MobileMenuItem,
  Links,
} from "./styles";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const setActive = (link) => {
    setActiveLink(link);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <NavbarContainer>
      <Brand>Balves.</Brand>
      <DesktopMenu>
        <li>
          <Links
            to={"/"}
            className={activeLink === "home" ? "active" : ""}
            onClick={() => setActive("home")}
          >
            Home
          </Links>
        </li>
        <li>
          <Links
            to={"/sobre"}
            className={activeLink === "sobre" ? "active" : ""}
            onClick={() => setActive("sobre")}
          >
            Sobre Mim
          </Links>
        </li>
        <li>
          <Links
            to={"/projetos"}
            className={activeLink === "projetos" ? "active" : ""}
            onClick={() => setActive("projetos")}
          >
            Projetos
          </Links>
        </li>
        <li>
          <Links
            to={"/contato"}
            className={activeLink === "contato" ? "active" : ""}
            onClick={() => setActive("contato")}
          >
            Contato
          </Links>
        </li>
      </DesktopMenu>
      <MobileMenuButton onClick={toggleMobileMenu}>
        <FaBars />
      </MobileMenuButton>
      <MobileMenu open={mobileMenuOpen}>
        <MobileMenuItem>
          <Links href="#">Home</Links>
        </MobileMenuItem>
        <MobileMenuItem>
          <Links href="#">Sobre Mim</Links>
        </MobileMenuItem>
        <MobileMenuItem>
          <Links href="#">Habilidades</Links>
        </MobileMenuItem>
        <MobileMenuItem>
          <Links href="#">Projetos</Links>
        </MobileMenuItem>
        <MobileMenuItem>
          <Links href="#">Contato</Links>
        </MobileMenuItem>
      </MobileMenu>
    </NavbarContainer>
  );
};
