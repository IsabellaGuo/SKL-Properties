import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import MapStyles from "./MapStyles.js";
import "./PropertyMap.css";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh"
};
const center = {
  lat: 48.45454,
  lng: -123.33043
};
const options = {
    
}
const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
function PropertyMap() {
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
      ></GoogleMap>
    </div>
  );
}

export default PropertyMap;
