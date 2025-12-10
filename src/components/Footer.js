import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer container">
      <div className="row">
        <div className="col footer-menu">
          <a href="#">Sobre</a>
          <a href="#">Ajuda</a>
          <a href="#">Privacidade</a>
          <a href="#">Contato</a>
        </div>
        <div className="col footer-social">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
