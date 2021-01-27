import React, { useState } from 'react';
import {
  Route,
  Link,
  useParams,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';

import PropertyFloorplan from './PropertyFloorplan.js';
import PropertyImg from './PropertyImg.js';
import '../components/Property.css';
import PropertyMap from './PropertyMap.js';
import DataService from './DataService.js';
import PropertyWalkscore from './PropertyWalkscore.js';

function Property(props) {
  console.log("properties", props)
  const [property, setProperty] = useState({});
  const params = useParams();
  const location = useLocation();
  const routeMatch = useRouteMatch();

  const getJSON = (data) => {
    const item = data.find((item) => item.id === Number(params.id));
    if (item && Object.keys(item).length > 0) {
      setProperty(item);
    }
  };

  const selectedProperty = props
    ? props.items.find((item) => item.id === Number(params.id))
    : property;

  return (
    <>
      {selectedProperty && (
        <div className="property__wrapper">
          <div className="property__banner">
            <div className="property__title">
              <div className="property__titleleft">
                <h1>{selectedProperty.address}</h1>
                <h2>{selectedProperty.subtitle}</h2>
                <h2>${selectedProperty.rent}</h2>
              </div>

              <nav className="property__titleright">
                <Link to={`${routeMatch.url}/photos`}>Photos</Link>
                <Link to={`${routeMatch.url}/floorplan`}>Floorplan</Link>
                <Link to={`${routeMatch.url}/map`}>Map</Link>
              </nav>
            </div>
            {
              location.pathname === routeMatch.url &&
              <div className="property__imgdes">
                <img
                  src={`/${selectedProperty.src}`}
                  alt={selectedProperty.address}
                />

                <div className="property__des">
                  {selectedProperty.description}
                </div>
              </div>
            }
          </div>

          <Route path={`${routeMatch.path}/photos`}>
            <PropertyImg item={selectedProperty} />
          </Route>
          <Route path={`${routeMatch.path}/map`}>
            <PropertyMap item={selectedProperty} />
            <PropertyWalkscore item={selectedProperty} />
          </Route>
          <Route path={`${routeMatch.path}/floorplan`}>
            <PropertyFloorplan item={selectedProperty} />
            
          </Route>
          { props.items.length === 0 && <DataService getData={getJSON} /> }
        </div>
      )}
    </>
  );
}

export default Property;