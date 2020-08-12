import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js"



function App() {
  return (
    <Router>
      <div className="app">
       <Switch>
        <Route path="/about">
          <Header />
          <AboutMe />
        </Route>
        <Route path="/properties">
          <Header />
          <h1>Properties</h1>
        </Route>
        <Route path="/contact">
          <Header />
          <h1>Contact Me</h1>
        </Route>
        <Route path="/">
          <Header />
        </Route>
       </Switch>
      </div>
      
    </Router>
    
  );
}

export default App;
