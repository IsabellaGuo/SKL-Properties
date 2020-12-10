import React, { useEffect, useState } from 'react';
import axios from 'axios';


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
