import React from 'react'

function PropertyCard(props) {
    console.log("aaa", props)
    return (
     
            <div className="property__text">
                   
                    <p>{props.name}</p>
                    <p>{props.img}</p>
                   
            </div>
        
    )
}

export default PropertyCard;

