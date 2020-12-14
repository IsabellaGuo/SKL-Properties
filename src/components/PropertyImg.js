import React from 'react';



function PropertyImg({ item }) {
    return (
        <div>
            {item.images.map((src) => (
                <img src={src} alt="pic" />
            ))}
        </div>
    );
}

export default PropertyImg
