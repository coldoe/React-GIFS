import React, { useState, useEffect } from "react";
import { Gif } from "../GifComponent/Gif";
import { API_KEY } from "../Env/env";
import "../searchComponent/search.css";

export const Search = () => {
  const [searchKey, setsearchKey] = useState("");
  const [arrayGifs, setarrayGifs] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchKey}&limit=20`
    )
      .then((data) => data.json())
      .then((gifs) => setarrayGifs(gifs.data));
  }, [searchKey]);
  return (
    <div className="Search grey lighten-5">
      <div className="row green accent-2">
        <form className="col s12">
          <div className="row">
            <div
              className={
                !searchKey || arrayGifs.length < 12 ? "max green accent-2" : ""
              }
            >
              <div className="input-field col s6 offset-s3">
                <input
                  onChange={(e) => setsearchKey(e.target.value)}
                  id="searchInput"
                  type="text"
                  className="validate"
                />
                <label for="searchInput">Gifs</label>
              </div>
            </div>
          </div>
        </form>
        {arrayGifs.map((gif) => (
          <Gif gif={gif.images.downsized.url} key={gif.id} title={gif.title} />
        ))}
      </div>
    </div>
  );
};
