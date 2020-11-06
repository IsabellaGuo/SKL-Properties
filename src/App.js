import React, {useState} from 'react';
import {useEffect} from "react-router-dom";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe.js";
import Home from "./components/Home.js";
import Properties from "./components/Properties.js";
import Property from "./components/Property.js";
import Contact from "./components/Contact.js";
import data from "./data.js";
import Footer from "./components/Footer.js"
import Feature from './components/Feature';
import PropertyCard from './components/PropertyCard.js';
import DataService from './components/DataService.js';




function App() {
  
  const [properties, setProperties] = useState(data)

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
          <Feature />
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
        <Route path="/">
          <Home />
          <Footer />
        </Route>
       </Switch>
      </div>
      <DataService />
    </Router>
    
  ); 
}

export default App;
