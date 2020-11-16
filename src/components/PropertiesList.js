import React from 'react';
import { Link } from "react-router-dom";

function PropertiesList(props) {
  const { properties } = props
  
  return (
    <div className="properties__all">
        { properties.map((item, id) => {
          return (
            <Link key={`pc${id}`} className="property__cardinfo" to={`/properties/${item.id}`}>
              <div className="property__card">
                <img src={item.src} alt={item.address} />
                <div className="property__text">
                  <p>{item.address}</p>
                  <p>{item.subtitle}</p>
                  <p>${item.rent}</p>
                </div>
              </div>
            </Link>
          )
        }
        )}
      </div>
  )
}

export default PropertiesList;