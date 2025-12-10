import React from "react";
import "../components/Banner.css"; // IMPORTANTE: garante que o estilo seja aplicado corretamente

function Banner() {
  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="banner-center">
          <h1>Filmes, séries e muito mais, sem limites</h1>
          <p>A partir de R$ 20,90. Cancele quando quiser.</p>
          <p className="texto-secundario">
            Quer assistir? Informe seu email para criar ou reiniciar sua
            assinatura.
          </p>

          <form className="banner-form">
            <input
              type="email"
              placeholder="Email"
              className="email-input"
              required
            />
            <button type="submit" className="banner-btn">
              Vamos lá &gt;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Banner;
