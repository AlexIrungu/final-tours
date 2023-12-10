import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SearchBox from "./SearchBox";

const icon = L.icon({
  iconUrl: "./placeholder.png",
  iconSize: [38, 38],
});

const initialPosition = [-1.286389, 36.817223]; // Adjusted coordinates for Kenya

function ResetCenterView(props) {
  const { selectPosition } = props;
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView(
        L.latLng(selectPosition.lat, selectPosition.lon),
        map.getZoom(),
        {
          animate: true,
        }
      );
    }
  }, [selectPosition, map]);

  return null;
}

function Maps(props) {
  const { selectPosition, setSelectPosition } = props; // Include setSelectPosition
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <SearchBox selectPosition={selectPosition} onLocationSelect={setSelectPosition} /> {/* Pass the setSelectPosition prop to the SearchBox component */}
      
      <MapContainer
        center={initialPosition}
        zoom={8}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=pBSuTyT10yTHHD4BfbuT"
        />
        {selectPosition && (
          <Marker position={locationSelection} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        )}
        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
    </div>
  );
}

export default Maps;
