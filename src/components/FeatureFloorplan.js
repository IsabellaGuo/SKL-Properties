import React from 'react';
import "./FeatureFloorplan.css";

function FeatureFloorplan(props) {
    return (
        <img
         className="img"
          src={`/${props.item.floorPlan}`}
          alt={props.item.address}
        />
    )
}

export default FeatureFloorplan
