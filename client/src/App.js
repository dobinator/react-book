import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Search from "./pages/Search";
import Save from "./pages/Save";
import Hero from "./components/Hero";






function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero/>
        <Route exact path="/search" component={Search} />
        <Route exact path="/save" component={Save} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
