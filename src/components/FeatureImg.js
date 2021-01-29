import React from 'react';
import "./FeatureImg.css";

function FeatureImg({ item }) {
    console.log("featureimg",item)
    return (
        <div className="feature__imgs">
            {item.images.map((src) => (
                <img 
                className="feature__img"
                src={src} 
                alt="pic" />
            ))}
        </div>
    )
}

export default FeatureImg
