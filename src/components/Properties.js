import React, { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import "../components/Properties.css";
import SearchIcon from "@material-ui/icons/Search";
import "./Properties.css";
import FeatureProperty from "./FeatureProperty.js";
import SearchPage from "./SearchPage.js";
import db from '../firebase.js';

import PropertyCard from "./PropertyCard.js";

function Properties(props) {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

   useEffect(() => {
    const results = props.items.filter(item => {
      return item.address.toLowerCase().includes(searchTerm.toLowerCase());
    }, []);
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="properties__banner">
      {/*<section className="properties__search">
       <h2>Find your next home</h2>
        <div>
        <input 
           type="text"
           value={searchTerm}
           placeholder="Search"
           onChange={handleChange}
        />
        <SearchIcon />
      </div>
      {searchResults.map(item => {
        return < PropertyCard key = {item.id} name = {item.address} img = {item.src} rent = {item.rent} subtitle = {item.subtitle} handleChange = {handleChange} searchTerm = {searchTerm} />;
      })}
      
    </section>*/}
      

      <div className="Properties__feature">
        <FeatureProperty
          id="123123"
          address="123 Yates Street"
          rent={2800}
          subtitle="2 Bedroom, 2 Bathroom, 1 kitchen"
          description="Lorem ipsum odor amet, consectetuer adipiscing elit. Eget parturient senectus commodo litora dolor taciti augue. Molestie molestie neque viverra lacinia praesent risus quis auctor. Malesuada cursus lobortis nascetur; rutrum senectus dis tempus. Cras eu class ipsum proin platea felis torquent quam. Interdum neque aenean lacinia pulvinar ligula."
          image="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2019/01/luxutry-apartment-design-online-feature.jpg"
        />
      </div>
      
      
      
      <div className="properties__all">
        {props.items.map((item, id) => (
          <Link className="property__cardinfo" to={`/properties/${item.id}`}>
            <React.Fragment key={id}>
              <div className="property__card">
              <img src={item.src} alt={item.address} />
              <div className="property__text">
                <p>{item.address}</p>
                <p>{item.subtitle}</p>
                <p>${item.rent}</p>
              </div>
              
              </div>
            </React.Fragment>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Properties;
