import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

const libraries = ["places"];
const mapContainerStyle = {
  width: "70vw",
  height: "100vh",
  margin: "35px"
};

function FeatureMap(props) {
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
    <div>
      <GoogleMap
        className="map__container"
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default FeatureMap;
