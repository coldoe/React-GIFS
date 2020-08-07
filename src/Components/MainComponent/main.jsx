import React from "react";
import { NavLink } from "react-router-dom";

//styles
import "../MainComponent/main.css";

export const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <NavLink to="/random">
          <a id="left" className="waves-effect waves-light btn  pink lighten-1">
            <i className="material-icons left">cloud</i>Random Gif
          </a>
        </NavLink>
        <NavLink to="/search">
          <a
            id="right"
            className="waves-effect waves-light btn  pink lighten-1"
          >
            <i className="material-icons right">cloud</i>Search
          </a>
        </NavLink>
      </div>
    </div>
  );
};
