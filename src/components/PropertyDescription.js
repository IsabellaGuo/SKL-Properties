import React from 'react';
import "./PropertyDescription.css";

function PropertyDescription(props) {
    return (
        <div className="PropertyDescription__main">
            {props.item.description}
        </div>
    )
}

export default PropertyDescription
