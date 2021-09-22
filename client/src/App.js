import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Search from "./pages/Search";
import Save from "./pages/Save";
import MainPageSection from "./components/MainPageSection"; 
import ViewBook from "./components/ViewBook";






function App() {
  return (
    <Router>
      <div>
        <Navbar />
      <MainPageSection/>
        <Route exact path="/search" component={Search} />
        <Route exact path="/save" component={Save} />
        <Route exact path="/ViewBook/:id" component={ViewBook} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
