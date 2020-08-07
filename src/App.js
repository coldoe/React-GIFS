import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import { search } from "./Components/searchComponent/search";
import { random } from "./Components/RandomComponent/random";
import { main } from "./Components/MainComponent/main";
//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={main} />
          <Route exact path="/random" component={random} />
          <Route exact path="/search" component={search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
