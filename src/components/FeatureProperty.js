import React from 'react';
import { useHistory } from "react-router-dom";
import "../components/FeatureProperty.css";



function FeatureProperty({ id, address, rent, subtitle, image, description }) {

  const history = useHistory();
  console.log(history);

  const routeToShop = () => {
    history.push("/properties/feature");
  };
    return (
        <div className="feature">
            <img src={image} alt="" />
            <div className="feature__info">
                <h1>{address}</h1>
                <p className="feature__rent">
                    <small>$</small>
                    <strong>{rent}</strong>
                </p>
                <h2>{subtitle}</h2>
                <p className="feature__des">{description}</p>
            
            
            <button className="feature__button" onClick={routeToShop}>Read More</button>
            </div>
        </div>
    )
}

export default FeatureProperty;
