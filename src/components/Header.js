import React, { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/netflix_logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header container">
      <div className="row">
        {/* Logo */}
        <div className="logo-col">
          <img className="logo" src={logo} alt="Netflix Logo" />
        </div>

        {/* Menu */}
        <div className="menu-col">
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
          </button>
          <nav className={`menu ${menuOpen ? "open" : ""}`}>
            <a href="#">Início</a>
            <a href="#">Séries</a>
            <a href="#">Filmes</a>
            <a href="#">Novos & Populares</a>
            <a href="#">Minha Lista</a>
          </nav>
        </div>

        {/* Redes sociais */}
        <div className="social-col">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </header>
  );
}

export default Header;
