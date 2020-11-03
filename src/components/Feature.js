import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import FeatureDescription from "./FeatureDescription.js";
import FeatureFloorplan from "./FeatureFloorplan.js";
import FeatureImg from "./FeatureImg.js";
import "../components/Feature.css";

function Feature() {
    
    const routeMatch = useRouteMatch();
    //console.log(routeMatch)

    

    
    return (
        <div className="feature__wrapper">
            <h1>123 Yates Street</h1>
            
                <h2>2 Bedroom, 2 Bathroom, 1 kitchen</h2>
                <h2>$2800</h2>
            
            
            <img src="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2019/01/luxutry-apartment-design-online-feature.jpg" alt="" />
            <nav className="feature__subNav">
                            <Link className="feature__des" to={`${routeMatch.url}/description`}>Description</Link>
                            <Link className="feature__photo" to={`${routeMatch.url}/photos`}>Photos</Link>
                            <Link className="feature__fp" to={`${routeMatch.url}/floorplan`}>Floorplan</Link>
                            <Link className="feature__map" to={`${routeMatch.url}/map`}>Map</Link>
            </nav>

        <Route path={`${routeMatch.path}/description`}>
            <FeatureDescription  />
        </Route>
        <Route path={`${routeMatch.path}/photos`}>
            <FeatureImg />
        </Route>
        <Route path={`${routeMatch.path}/floorplan`}>
            <FeatureFloorplan  />
        </Route>
        </div>
    );
}

export default Feature;

