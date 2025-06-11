import React from "react";

const Moviecard = ({
  poster,
  title,
  imdbRating,
  summary,
  imdbID,
  setMovieList,
  genre,
  search = false,
}) => {
  // const poster =
  //   "https://images.pexels.com/photos/36487/above-adventure-aerial-air.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  // const title = "Starwars";
  // const imdbRating = 5.6;
  // const summary = "Movie summary";

  const handleOnClick = (genre) => {
    // get the data from the local storage
    const localMovieData = localStorage.getItem("movie-data");

    const movieList = JSON.parse(localMovieData) || [];
    const movieObject = {
      imdbID,
      title,
      poster,
      imdbRating,
      summary,
      genre,
    };

    // TODO: check if the movie object is in movieList or not then only push to new movielist
    movieList.push(movieObject);

    localStorage.setItem("movie-data", JSON.stringify(movieList));

    setMovieList(movieList);
  };

  const handleOnDelete = (id) => {
    const localData = localStorage.getItem("movie-data");

    const tempMovieList = JSON.parse(localData);

    const updatedMovieList = tempMovieList.filter(
      (movie) => movie.imdbID != id
    );

    localStorage.setItem("movie-data", JSON.stringify(updatedMovieList));

    setMovieList(updatedMovieList);
  };

  return (
    <div className="movie-card">
      <img className="movie-poster" src={poster} />
      <div className="movie-detail">
        <div className="movie-title">{title}</div>
        <div className="movie-rating">{imdbRating}</div>
        <div className="movie-summary">{summary}</div>

        {/* search treu  */}

        {search ? (
          <>
            <button
              onClick={() => {
                handleOnClick("Drama");
              }}
            >
              Drama
            </button>
            <button
              onClick={() => {
                handleOnClick("Action");
              }}
            >
              Action
            </button>
          </>
        ) : (
          <>
            Genre: {genre}
            <button
              onClick={() => {
                handleOnDelete(imdbID);
              }}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Moviecard;
