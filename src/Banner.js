import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./config";
import requests from "./Requests";

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const req = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );
    }
    fetchMovies();
  }, []);
  console.log(movies);
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-content">
          <h1 className="banner-title">
            {movies?.title || movies?.name || movies?.original_name}
          </h1>
          <div className="banner-btns">
            <button className="banner-btn">Play</button>
            <button className="banner-btn">My List</button>
          </div>
          <h1 className="banner-desc">{truncate(movies?.overview, 150)}</h1>
        </div>
        <div className="banner-fadeBottom" />
      </header>
    </>
  );
}

export default Banner;
