
import './App.css';
import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header"


function App() {
  return (
    <Router>
    <div className="App bg-dark">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/portfolio">
        <Portfolio />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
    </div>
    </Router>
  );
}

export default App;
