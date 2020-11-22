import React from 'react';

function FeatureFloorplan(props) {
    return (
        <img
          src={`/${props.item.floorPlan}`}
          alt={props.item.address}
        />
    )
}

export default FeatureFloorplan
