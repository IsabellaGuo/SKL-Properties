import React from "react";
import {
  Route,
  Link,
  useParams,
  useLocation,
  useRouteMatch,
} from 'react-router-dom';

import FeatureFloorplan from "./FeatureFloorplan.js";
import FeatureImg from "./FeatureImg.js";
import FeatureMap from "./FeatureMap.js";
import DataService from './DataService.js';
import PropertyWalkscore from './PropertyWalkscore.js';
import "../components/Feature.css";

function Feature(props) {
  console.log(props)
  
  const routeMatch = useRouteMatch();
  const params = useParams();
  const location = useLocation();
  const feature = props.items[0];
  console.log("work", feature);
  

  return (
    
    <div className="feature__wrapper">
     <div className="feature__banner">
         <div className="feature__title">
             <div className="feature__titleleft">
              <h1>{feature.address}</h1>
              <h2>{feature.subtitle}</h2>
              <h2>${feature.rent}</h2>
             </div>

          <nav className="feature__titleright">
            <Link to={`${routeMatch.url}/photos`}>Photos</Link>
            <Link to={`${routeMatch.url}/floorplan`}>Floorplan</Link>
            <Link to={`${routeMatch.url}/map`}>Map</Link>
          </nav>
      </div>
      {
        location.pathname === routeMatch.url &&
        <div>
          <img 
           className="feature__img"
            src={`/${feature.src}`} 
            alt="" 
          />

          <div className="feature__des">
            {feature.description}
          </div>
        </div>
      }
    </div>
      
      <Route path={`${routeMatch.path}/photos`}>
        <FeatureImg item={feature}  />
      </Route>
      <Route path={`${routeMatch.path}/map`}>
        <FeatureMap item={feature} />
      </Route>
      <Route path={`${routeMatch.path}/floorplan`}>
        <FeatureFloorplan item={feature} />
      </Route>
      
    </div>
    
  );
}

export default Feature;
