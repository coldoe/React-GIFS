import React from "react";
import "../GifComponent/gif.css";
export const Gif = (gif) => {
  return (
    <div className="container">
      <div className="col s12 m6 l6 xl4 justify-content center">
        <div className="gif-card">
          <img
            className=""
            width="300"
            height="300"
            src={gif.gif}
            alt={gif.title}
          />
        </div>
      </div>
    </div>
  );
};
