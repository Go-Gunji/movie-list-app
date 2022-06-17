import React, { useState, useEffect } from "react";
import axios from "../../utils/tmdbBaseAxios";
import { requestMovies } from "../../utils/requestMovies";
import "./Banner.scss";

type Movie = {
  title?: string;
  name?: string;
  orignal_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const [movie, setMovie] = useState<Movie>({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requestMovies.feachNetflixOriginals);
      console.log(request.data.result);

      //apiからランダムで値を取得している
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  /**
   * 指定した数より多い文字列は切り捨て
   * @param str 指定文字列
   * @param maxStringNumber 最大文字数
   * @returns
   */
  function truncate(str: string | undefined, maxStringNumber: number) {
    // undefinedを弾く
    if (str !== undefined) {
      return str.length > maxStringNumber
        ? str.slice(0, maxStringNumber - 1) + "..."
        : str;
    }
  }

  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.orignal_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  );
};
