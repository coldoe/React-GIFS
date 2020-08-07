import React, { useState, useEffect } from "react";

import { API_KEY } from "../Env/env.js";

import "../RandomComponent/random.css";

export const Random = () => {
  const [gif, setgif] = useState("");

  function takeGif() {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`
    )
      .then((data) => data.json())
      //   .then((gifs) => console.log(gifs.data.images.looping.mp4));
      .then((gifs) => setgif(gifs.data.images.downsized_large.url));
  }

  return (
    <div className="Random purple lighten-2">
      <div className="container">
        <div className="gifs">
          <h1>Random Gifs</h1>
          <button
            className="waves-effect waves-light btn  purple darken-4"
            onClick={takeGif}
          >
            {" "}
            Take gif
          </button>
          <div>{gif ? <img width="500" height="500" src={gif} /> : null}</div>
        </div>
      </div>
    </div>
  );
};
