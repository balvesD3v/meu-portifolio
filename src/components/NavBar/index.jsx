import "./styles.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Balves.</h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre Mim</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/contato">Contato</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
