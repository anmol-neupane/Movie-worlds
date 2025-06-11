import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Display from "./component/Display";

function App() {
  const [count, setCount] = useState(0);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    let localData = localStorage.getItem("movie-data");

    setMovieList(JSON.parse(localData) || []);
  }, []);

  return (
    <>
      {/* <button
        onClick={() => {
          let t = count;
          setCount(t + 1);
        }}
      >
        setcount
      </button> */}
      <div className="wrapper">
        <Navbar />
        <Hero setMovieList={setMovieList} />
        <Display movieList={movieList} setMovieList={setMovieList} />
      </div>
    </>
  );
}

export default App;
