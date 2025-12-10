import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MovieRow title="Populares na Netflix" />
      <MovieRow title="Filmes de Ação" />
      <MovieRow title="Séries em Alta" />
      <Footer />
    </div>
  );
}

export default App;
