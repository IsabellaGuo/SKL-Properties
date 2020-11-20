import React, { useEffect, useState } from "react";
import { Route, Link, useParams, useLocation, useRouteMatch } from "react-router-dom";
import PropertyDescription from "./PropertyDescription.js";
import PropertyFloorplan from "./PropertyFloorplan.js";
import PropertyImg from "./PropertyImg.js";
import "../components/Property.css";
import PropertyMap from "./PropertyMap.js"
import DataService from './DataService.js';

function Property(props) {
    const params = useParams();
    console.log(params);
    const routeMatch = useRouteMatch();
    console.log(routeMatch);
  
    const selectedProperty = props.items.find(
      item => item.id === Number(params.id)
    );
    console.log("selectedProperty", selectedProperty);
    return (
      <div className="property__wrapper">
        <div className="property__banner">
          <div className="property__title">
            <div className="property__titleleft">
              <h1>{selectedProperty.address}</h1>
              <h2>{selectedProperty.subtitle}</h2>
              <h2>${selectedProperty.rent}</h2>
            </div>
  
            <nav className="property__titleright">
              <Link
                className="property__des"
                to={`${routeMatch.url}/description`}
              >
                Description
              </Link>
              <Link className="property__photo" to={`${routeMatch.url}/photos`}>
                Photos
              </Link>
              <Link className="property__fp" to={`${routeMatch.url}/floorplan`}>
                Floorplan
              </Link>
              <Link className="property__map" to={`${routeMatch.url}/map`}>
                Map
              </Link>
            </nav>
          </div>
  
          <div className="property__img">
            <img src={`../${selectedProperty.src}`} alt={selectedProperty.address} />
          </div>
        </div>
  
        <Route path={`${routeMatch.path}/description`}>
          <PropertyDescription item={selectedProperty} />
        </Route>
        <Route path={`${routeMatch.path}/photos`}>
          <PropertyImg item={selectedProperty} />
        </Route>
        <Route path={`${routeMatch.path}/floorplan`}>
          <PropertyFloorplan item={selectedProperty} />
        </Route>
        <Route path={`${routeMatch.path}/map`}>
          <PropertyMap item={selectedProperty} />
        </Route>
      </div>
    );
  }
  
  export default Property;

{/*function Property(props) {
  const [properties, setProperties] = useState([])
  const [obj, setObj] = useState({})
  // const location = useLocation();
  const params = useParams();
  const routeMatch = useRouteMatch();
  // const id = location.pathname.split('/')[1];
  // const paramsID = params.id
  // console.log({location, id, paramsID})
  // console.log(routeMatch);

  useEffect(() => {
    const selected = properties.find(
      item => item.id === Number(params.id)
    );
    console.log(selected)
    setObj(selected)
  }, [properties])

  const getJSON = (jsonData) => {
    setProperties(jsonData)
  }

  const selectedProperty = obj

  console.log("selectedProperty", selectedProperty);
  return (
    <div className="property__wrapper">
      <div className="property__banner">
        <div className="property__title">
          <div className="property__titleleft">
            <h1>{selectedProperty.address}</h1>
            <h2>{selectedProperty.subtitle}</h2>
            <h2>${selectedProperty.rent}</h2>
          </div>

          <nav className="property__titleright">
            <Link
              className="property__des"
              to={`${routeMatch.url}/description`}
            >
              Description
            </Link>
            <Link className="property__photo" to={`${routeMatch.url}/photos`}>
              Photos
            </Link>
            <Link className="property__fp" to={`${routeMatch.url}/floorplan`}>
              Floorplan
            </Link>
            <Link className="property__map" to={`${routeMatch.url}/map`}>
              Map
            </Link>
          </nav>
        </div>

        <div className="property__img">
          <img src={`../${selectedProperty.src}`} alt={selectedProperty.address} />
        </div>
      </div>

      <Route path={`${routeMatch.path}/description`}>
        <PropertyDescription item={selectedProperty} />
      </Route>
      <Route path={`${routeMatch.path}/photos`}>
        <PropertyImg item={selectedProperty} />
      </Route>
      <Route path={`${routeMatch.path}/floorplan`}>
        <PropertyFloorplan item={selectedProperty} />
      </Route>
      <Route path={`${routeMatch.path}/map`}>
        <PropertyMap item={selectedProperty} />
      </Route>
      <DataService getData={getJSON} />
    </div>
  );
}

export default Property;*/}
