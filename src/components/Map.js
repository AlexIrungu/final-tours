import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ searchLocation, handleSearch }) => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [searchString, setSearchString] = useState("");

  const kenyaCenter = [-1.2921, 36.8219];
  const zoomLevel = 6;

  useEffect(() => {
    // Initialize the map
    const newMap = L.map(mapRef.current).setView(kenyaCenter, zoomLevel);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(newMap);
    setMap(newMap);

    // Cleanup the map when the component unmounts
    return () => {
      newMap.remove();
    };
  }, []);

  useEffect(() => {
    // Update the map center when searchLocation changes
    if (map && searchLocation) {
      map.setView(searchLocation, zoomLevel);
    }
  }, [map, searchLocation]);

  const handleInputChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(searchString);
    setSearchString("");
  };

  return (
    <div className="kenya-map-container w-full h-80">
      <div ref={mapRef} className="kenya-map w-full h-full" />
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a location..."
          value={searchString}
          onChange={handleInputChange}
        />
        <button className="search-button" onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Map;
