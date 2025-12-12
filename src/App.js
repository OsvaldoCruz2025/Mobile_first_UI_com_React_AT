import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MovieRow title="Em Alta" />
      <MovieRow title="Filmes de Ação" />
      <MovieRow title="Filmes de Comédia" />
      <Footer />
    </div>
  );
}
