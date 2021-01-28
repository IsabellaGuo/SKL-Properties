import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";





const libraries = ["places"];
const mapContainerStyle = {
  width: "64vw",
  height: "100vh",

};

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
function PropertyMap(props) {
  const center = {
    lat: props.item.la,
    lng: props.item.lo
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Lading Maps";

  

  return (
    
      <GoogleMap
        className="map"
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
       
      >
        <Marker position={center} />
      </GoogleMap>

   
    

  );
}



export default PropertyMap;
