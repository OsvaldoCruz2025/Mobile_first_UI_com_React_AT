import React from "react";
import "./Filmes.css";


import top1 from "../img/top1.jpg";
import top2 from "../img/top2.jpg";
import top3 from "../img/top3.jpg";
import top4 from "../img/top4.jpg";
import top5 from "../img/top5.jpg";

import acao1 from "../img/acao1.jpg";
import acao2 from "../img/acao2.jpg";
import acao3 from "../img/acao3.jpg";
import acao4 from "../img/acao4.jpg";
import acao5 from "../img/acao5.jpg";

import comed1 from "../img/comed1.jpg";
import comed2 from "../img/comed2.jpg";
import comed3 from "../img/comed3.jpg";
import comed4 from "../img/comed4.jpg";
import comed5 from "../img/comed5.jpg";

export default function Filmes() {
  const filmesEmAlta = [
    { id: 1, titulo: "Alvo da Máfia", imagem: alvoMafia },
    { id: 2, titulo: "Zona de Risco", imagem: zonaRisco },
    { id: 3, titulo: "O Troll da Montanha 2", imagem: troll2 },
    { id: 4, titulo: "Gladiador II", imagem: gladiador2 },
    { id: 5, titulo: "Desejo de Matar", imagem: desejoMatar },
  ];
  const filmesDeAcao = [
    { id: 1, titulo: "Resgate 2", imagem: acao1 },
    { id: 2, titulo: "O Agente Oculto", imagem: acao2 },
    { id: 3, titulo: "6 Underground", imagem: acao3 },
    { id: 4, titulo: "Invasão ao Serviço Secreto", imagem: acao4 },
    { id: 5, titulo: "Missão Impossível", imagem: acao5 },
  ];

  const filmesDeComedia = [
    { id: 1, titulo: "Um Ninja da Pesada", imagem: comed1 },
    { id: 2, titulo: "O Máskara", imagem: comed2 },
    { id: 3, titulo: "O Agente Faixa-Preta", imagem: comed3 },
    { id: 4, titulo: "De Volta à Ação", imagem: comed4 },
    { id: 5, titulo: "Bad Boys Para Sempre", imagem: comed5 },
  ];


  let filmes = [];
  if (title === "Em Alta") filmes = filmesEmAlta;
  else if (title === "Filmes de Ação") filmes = filmesDeAcao;
  else if (title === "Filmes de Comédia") filmes = filmesDeComedia;

  return (
    <section className="filmes">
      <h2 className="filmes-titulo">{title}</h2>
      <div className="filmes-lista">
        {filmes.map((filme) => (
          <div className="filme-card" key={filme.id}>
            <img src={filme.imagem} alt={filme.titulo} className="filme-img" />
            <div className="filme-info">
              <h3>{filme.titulo}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
