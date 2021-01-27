import React from 'react';



function PropertyImg({ item }) {
    console.log("img", item)
    return (
        <div>
            {item.images.map((src) => (
                <img src={src} alt="pic" />
            ))}
        </div>
    );
}

export default PropertyImg
