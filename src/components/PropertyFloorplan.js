import React from 'react'

function PropertyFloorplan(props) {
    console.log("floorplan", props)
    return (
        <img
          src={`/${props.item.floorPlan}`}
          alt={props.item.address}
        />
        
    )
}

export default PropertyFloorplan
