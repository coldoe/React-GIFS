import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";

//components
import { Search } from "./Components/searchComponent/search";
import { Random } from "./Components/RandomComponent/random";
import { Main } from "./Components/MainComponent/main";
//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/random" component={Random} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
