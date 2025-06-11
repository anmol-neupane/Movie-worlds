import React, { useEffect, useRef, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
const apiKEY = import.meta.env.VITE_APIKEY;

const Hero = ({ setMovieList }) => {
  const [search, setSearch] = useState("");

  const searchRef = useRef();

  const [loading, setLoading] = useState(false);

  // TODO: search form multiple movie
  const [movieObject, setMovieObject] = useState([]);

  const handleOnChange = (event) => {
    console.log(event.target.value);

    if (event.target.value != "test") {
      setSearch(event.target.value);
    }
  };

  const searchMovie = async (text) => {
    setLoading(true);
    const omdbURL = `https://www.omdbapi.com/?apikey=${apiKEY}&t=${text}`;

    const response = await axios.get(omdbURL);

    setMovieObject({
      imdbID: response.data?.imdbID,
      title: response.data?.Title,
      poster: response.data?.Poster,
      imdbRating: response.data?.imdbRating,
      summary: response.data?.Plot,
    });

    setLoading(false);
  };

  const handleOnClick = async () => {
    searchMovie(searchRef.current.value);
  };

  useEffect(() => {
    // TODO: get random character
    let randomString = "x";

    searchMovie(randomString);
  }, []);

  return (
    <div>
      <h1>SEARCH MILION MOVIES</h1>
      <input type="text" ref={searchRef} />
      <button onClick={handleOnClick}>Search</button>

      {loading ? (
        <div className="loading"></div>
      ) : (
        <Moviecard {...movieObject} setMovieList={setMovieList} search={true} />
      )}
    </div>
  );
};

export default Hero;
