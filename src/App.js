import React from "react";
import "./App.css";
import FloatingMenuBtn from "./components/FloatingMenuBtn";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Foooter from "./components/Foooter";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />

          <Route path="/contact" component={Contact} />
        </Switch>
        <FloatingMenuBtn />
        <Foooter />
      </Router>
    </div>
  );
}

export default App;
