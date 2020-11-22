import React from "react";
import { Route, Link, useRouteMatch } from "react-router-dom";

import FeatureFloorplan from "./FeatureFloorplan.js";
import FeatureImg from "./FeatureImg.js";
import FeatureMap from "./FeatureMap.js";
import "../components/Feature.css";

function Feature(props) {
  console.log("feature", props);
  const routeMatch = useRouteMatch();
  //console.log(routeMatch)
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
        
        <Link className="feature__photo" to={`${routeMatch.url}/photos`}>
          Photos
        </Link>
        <Link className="feature__fp" to={`${routeMatch.url}/floorplan`}>
          Floorplan
        </Link>
        <Link className="feature__map" to={`${routeMatch.url}/map`}>
          Map
        </Link>
      </nav>
      </div>
      <div className="feature__img">
      <img src={`/${feature.src}`} alt="" />
      </div>
     </div>
      
      <Route path={`${routeMatch.path}/photos`}>
        <FeatureImg item={feature}  />
      </Route>
      <Route path={`${routeMatch.path}/floorplan`}>
        <FeatureFloorplan item={feature} />
      </Route>
      <Route path={`${routeMatch.path}/map`}>
        <FeatureMap item={feature} />
      </Route>
    </div>
  );
}

export default Feature;
