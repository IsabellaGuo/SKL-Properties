import React from 'react';
import { Link, useHistory } from "react-router-dom";
import "../components/FeatureProperty.css";



function FeatureProperty({ id, address, rent, subtitle, image, description, lat, lng, floorplan }) {

  const history = useHistory();
  console.log(history);

  const routeToFeature = () => {
    history.push("/properties/feature");
  };
    return (
        <Link key={`pc${id}`} className="feature" to={
            `/properties/feature`}
        >
            <img src={image} alt="" />
            <div className="feature__info">
                <h1>{address}</h1>
                <p className="feature__rent">
                    <small>$</small>
                    <strong>{rent}</strong>
                </p>
                <h2>{subtitle}</h2>
                <p className="featurecard__des">{description}</p>
            
            
            <button className="feature__button" onClick={routeToFeature}>Read More</button>
            </div>
        </Link>
    )
}

export default FeatureProperty;
