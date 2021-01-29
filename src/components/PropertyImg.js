import React from 'react';
import "./PropertyImg.css";


function PropertyImg({ item }) {
    console.log("img", item)
    return (
        <div className="property__imgs">
            {item.images.map((src) => (
                <img 
                className="property__img"
                src={src} 
                alt="pic" />
            ))}
        </div>
    );
}

export default PropertyImg
