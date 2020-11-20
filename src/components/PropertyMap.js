import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import MapStyles from "./MapStyles.js";
import "./PropertyMap.css";
import Properties from "./Properties.js";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
};

const options = {
    
}
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
function PropertyMap(props) {
  const center = {
      lat: props.item.la,
      lng: props.item.lo
    }

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Lading Maps";
  return (
    <div>
      <GoogleMap
        className = "map__container"
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        options={options}
        >
      <Marker position={center} />
        
      </GoogleMap>
    </div>
  );
}

export default PropertyMap;
