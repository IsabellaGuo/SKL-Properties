import React from 'react';
import "./PropertyFloorplan.css";

function PropertyFloorplan(props) {
    console.log("floorplan", props)
    return (
      <div className="img">
        <img
          
          src={`/${props.item.floorPlan}`}
          alt={props.item.address}
        />
      </div>
        
        
    )
}

export default PropertyFloorplan
