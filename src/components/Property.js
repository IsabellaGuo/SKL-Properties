import React, { useEffect, useState } from "react";
import {
  Route,
  Link,
  useParams,
  useLocation,
  useRouteMatch
} from "react-router-dom";

import PropertyFloorplan from "./PropertyFloorplan.js";
import PropertyImg from "./PropertyImg.js";
import "../components/Property.css";
import PropertyMap from "./PropertyMap.js";
import DataService from "./DataService.js";

function Property(props) {
  let selectedProperty;
  const [properties, setProperties] = useState([])
  const [obj, setObj] = useState({})
  const params = useParams();
  const routeMatch = useRouteMatch();
  // const id = location.pathname.split('/')[1];
  // const paramsID = params.id
  // console.log({location, id, paramsID})
  // console.log(routeMatch);

  useEffect(() => {
    let isMounted = true;
    if (props.length > 0 && isMounted) {
      const selected = props.find(
        item => item.id === Number(params.id)
      );
      setObj(selected)
      console.log({selected})
    }
    return () => { isMounted = false };
  })

  const getJSON = (jsonData) => {
    setProperties(jsonData)
  }

  // useEffect(() => {
  //   const json = properties.find(
  //     item => item.id === Number(params.id)
  //   );
  //   const selected = props.find(
  //     item => item.id === Number(params.id)
  //   );
  //   console.log({json, selected})
  //   props ? setObj(selected) : setObj(json);
  // }, [properties])

  useEffect(() => {
    console.log({obj})
  }, [obj])

  selectedProperty = obj
  return (
    <>
    { selectedProperty &&
      <div className="property__wrapper">
        <div className="property__banner">
          <div className="property__title">
            <div className="property__titleleft">
              <h1>{selectedProperty.address}</h1>
              <h2>{selectedProperty.subtitle}</h2>
              <h2>${selectedProperty.rent}</h2>
            </div>

            <nav className="property__titleright">
              
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
    }
    </>
  );
}

export default Property;
