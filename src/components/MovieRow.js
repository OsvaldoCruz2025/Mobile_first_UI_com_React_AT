import React from "react";

function MovieRow({ title }) {
  const movies = [
    "https://picsum.photos/200/300?1",
    "https://picsum.photos/200/300?2",
    "https://picsum.photos/200/300?3",
    "https://picsum.photos/200/300?4",
    "https://picsum.photos/200/300?5",
  ];

  return (
    <section className="movie-row container">
      <h2>{title}</h2>
      <div className="row movie-list">
        {movies.map((m, i) => (
          <div className="col-2 movie-item" key={i}>
            <img src={m} alt={`Filme ${i}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;
