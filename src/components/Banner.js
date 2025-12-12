import React from "react";
import "../components/Banner.css";
import { Button, TextField } from "@mui/material";

function Banner() {
  return (
    <section className="banner">
      <div className="banner-overlay">
        <div className="banner-center">
          <h1>Filmes, séries e muito mais, sem limites</h1>
          <p>A partir de R$ 20,90. Cancele quando quiser.</p>
          <p className="texto-secundario">
            Quer assistir? Informe seu e-mail para criar ou reiniciar sua
            assinatura.
          </p>

          <form className="banner-form">
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                width: "80%",
              }}
              required
            />
            <Button
              variant="contained"
              color="error"
              sx={{ fontWeight: "bold", padding: "14px 30px" }}
            >
              Vamos lá &gt;
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Banner;
