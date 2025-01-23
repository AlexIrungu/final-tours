// constants.js


// Maps.js
import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import SearchBox from "./SearchBox";
import { INITIAL_POSITION, ICON_CONFIG, USER_ICON_CONFIG } from './Constants';
import { useState } from "react";

const icon = L.icon(ICON_CONFIG);
const userIcon = L.icon(USER_ICON_CONFIG);

function ResetCenterView({ selectPosition }) {
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

ResetCenterView.propTypes = {
  selectPosition: PropTypes.object.isRequired,
};

function Maps({ selectPosition, setSelectPosition }) {
  const [userLocation, setUserLocation] = useState(null);
  const locationSelection = [selectPosition?.lat, selectPosition?.lon];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="map-container">
      <SearchBox selectPosition={selectPosition} onLocationSelect={setSelectPosition} />
      
      <MapContainer
        center={INITIAL_POSITION}
        zoom={8}
        className="map"
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
         {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lon]} icon={userIcon}>
            <Popup>
              You are here.
            </Popup>
          </Marker>
        )}
        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
    </div>
  );
}

Maps.propTypes = {
  selectPosition: PropTypes.object.isRequired,
  setSelectPosition: PropTypes.func.isRequired,
};

export default Maps;