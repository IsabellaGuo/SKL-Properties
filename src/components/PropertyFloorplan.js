import React from 'react';
import "./PropertyFloorplan.css";

function PropertyFloorplan(props) {
    console.log("floorplan", props)
    return (
      
        <img
          className="img"
          src={`/${props.item.floorPlan}`}
          alt={props.item.address}
        />
      
        
        
    )
}

export default PropertyFloorplan
