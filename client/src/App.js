import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "./components/pages/Search";
import Save from "./components/pages/Save";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/search" component={Search} />
        <Route exact path="/save" component={Save} />
      </div>
    </Router>
  );
}

export default App;
