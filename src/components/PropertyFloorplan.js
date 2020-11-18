import React from 'react'

function PropertyFloorplan(props) {
    console.log("floorplan", props)
    return (
        <div>
            {props.item.floorPlan}
        </div>
    )
}

export default PropertyFloorplan
