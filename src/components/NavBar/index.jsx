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
  const [activeLink, setActiveLink] = useState("");

  const setActive = (link) => {
    setActiveLink(link);
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
    </NavbarContainer>
  );
};
