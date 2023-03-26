import React, { useEffect, useState } from "react";
import axios from "./config";
import "./Row.css";
// import instance from "./config";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovie(req.data.results);
      console.log(movie);
      return req;
    }
    fetchData();
  }, [fetchUrl]);

  //   console.log(movie);
  return (
    <>
      <div className="row">
        <h2>{title}</h2>
        <div className="row-posters">
          {movie.map((mov) => {
            return (
              ((isLargeRow && mov.poster_path) ||
                (!isLargeRow && mov.backdrop_path)) && (
                <img
                  className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                  key={mov.id}
                  src={`${base_url}${
                    isLargeRow ? mov.poster_path : mov.backdrop_path
                  }`}
                  alt={mov.name}
                />
              )
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Row;
