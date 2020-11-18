import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import FeatureProperty from "./FeatureProperty.js";
import PropertiesList from "./PropertiesList.js";
import PropertyCard from "./PropertyCard.js";
import "./Properties.css";
import "../components/Properties.css";
import SearchBar from "./SearchBar.js";

function Properties(props) {
  console.log("properties", props)
  const featuredCard = props.items[0];
  const properties = props.items.slice(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = props.items.filter(item =>
      item.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    if (searchTerm.length === 0) {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="properties__banner">
      {props.items && (
        <>
          <SearchBar handleChange={handleChange} searchTerm={searchTerm} />

          {searchResults.length > 0 ? (
            <>
              <PropertiesList properties={searchResults} />
            </>
          ) : (
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
          )}
        </>
      )}
    </div>
  );
}

export default Properties;
