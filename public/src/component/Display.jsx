import React, { useEffect, useState } from "react";
import Moviecard from "./Moviecard";

const Display = ({ movieList, setMovieList }) => {
  const [displayMovieList, setDisplayMovieList] = useState([]);

  const handleOnGenreChange = (genre) => {
    const filteredMovieList = movieList.filter(
      (movie) => movie.genre == genre || genre == "All"
    );

    setDisplayMovieList(filteredMovieList);
  };

  useEffect(() => {
    setDisplayMovieList(movieList);
  }, [movieList]);

  return (
    <div>
      <h1>Saved Movie List</h1>
      <hr />
      <button onClick={() => handleOnGenreChange("All")}>ALL</button>
      <button onClick={() => handleOnGenreChange("Drama")}>Drama</button>
      <button onClick={() => handleOnGenreChange("Action")}>Action</button>
      <div className="movie-list">
        {displayMovieList.map((movie) => {
          return <Moviecard {...movie} setMovieList={setMovieList} />;
        })}
      </div>
    </div>
  );
};

export default Display;
