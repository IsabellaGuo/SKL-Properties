import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import "../components/Properties.css";
import SearchIcon from "@material-ui/icons/Search";
import "./Properties.css";
import FeatureProperty from "./FeatureProperty.js";
import PropertiesList from "./PropertiesList.js";

import PropertyCard from "./PropertyCard.js";

function Properties(props) {
  const featuredCard = props.items[0];
  const properties = props.items.slice(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchResults) {
      setFilteredItems(searchResults);
    } else {
      setFilteredItems(properties);
    }
    if (searchTerm.length === 0) {
      setFilteredItems(properties)
    }
  }, [searchResults, searchTerm]);

  useEffect(() => {
    const results = props.items.filter(item =>
      item.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results)
    console.log({ searchTerm, searchResults, properties });
  }, [searchTerm]);

  return (
    <div className="properties__banner">
      {props.items && (
        <>
          <section className="properties__search">
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
          </section>

          {
            searchResults.length > 0 ?
            <>
              { filteredItems.map((item, id) => {
                return (
                  <Link className="property__cardinfo" to={`/properties/${item.id}`}>
                    <React.Fragment key={`pc${id}`}>
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
                )
                })
              }
            </>
             :
             <>
              {featuredCard && (
                <FeatureProperty
                  className="Properties__feature"
                  id={featuredCard.id}
                  address={featuredCard.address}
                  rent={featuredCard.rent}
                  subtitle={featuredCard.subtitle}
                  description={featuredCard.description}
                  image={featuredCard.src}
                />
              )}
              <PropertiesList properties={properties} />

             </>
          }

        </>
      )}
    </div>
  );
}

export default Properties;
