import React from 'react'

function FeatureImg({ item }) {
    console.log("featureimg",item)
    return (
        <div>
            {item.images.map((src) => (
                <img src={src} alt="pic" />
            ))}
        </div>
    )
}

export default FeatureImg
