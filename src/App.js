import React, { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
import Home from "./components/Home.js";
import Properties from "./components/Properties.js";
import Property from "./components/Property.js";
import Contact from "./components/Contact.js";

import Footer from "./components/Footer.js";
import Feature from "./components/Feature.js";
import PropertyCard from "./components/PropertyCard.js";
import DataService from "./components/DataService.js";

function App() {
  const [properties, setProperties] = useState([]);

  const getJSON = jsonData => {
    setProperties(jsonData);
  };

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/about">
            <Header />
            <AboutMe />
            <Footer />
          </Route>
          <Route path="/properties/feature">
            <Header />
            <Feature items={properties} />
            <Footer />
          </Route>
          <Route path="/properties/:id">
            <Header />
            <Property items={properties} />
            <Footer />
          </Route>

          <Route path="/properties">
            <Header />

            <Properties items={properties} />
            <PropertyCard items={properties} />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
          <Route path="/" exact>
            
            <Home />
            <Footer />
          </Route>
          <Route path="/">
            
            <div>not fuond</div>
          </Route>
        </Switch>
      </div>
      <DataService getData={getJSON} />
    </Router>
  );
}

export default App;
