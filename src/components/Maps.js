import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Search, Plus, Minus, Layers, MapPin, Image as ImageIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import "leaflet/dist/leaflet.css"; // Leaflet CSS
import L from "leaflet"; // Leaflet library
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch"; // For improved search
import MarkerClusterGroup from "react-leaflet-cluster"; // For clustering markers
import SearchBox from "./SearchBox";

// Fix Leaflet's default icon issue
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Custom map controls component
const MapControls = ({ onStyleChange }) => {
  const map = useMap();

  return (
    <div className="absolute right-4 top-4 flex flex-col gap-2">
      {/* Zoom controls */}
      <div className="bg-white rounded-lg shadow-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => map.zoomIn()}
          className="p-2 hover:bg-gray-100 border-b"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => map.zoomOut()}
          className="p-2 hover:bg-gray-100"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      {/* Map style selector */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="bg-white rounded-lg shadow-lg">
            <Layers className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => onStyleChange('streets')}>
            Streets
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStyleChange('satellite')}>
            Satellite
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStyleChange('terrain')}>
            Terrain
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStyleChange('hybrid')}>
            Hybrid
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

// Component to handle map initialization and routing
const MapController = ({ userLocation, selectPosition }) => {
  const map = useMap();
  const routingControl = useRef(null);

  useEffect(() => {
    if (userLocation) {
      map.setView([userLocation.lat, userLocation.lon], 13);
    }
  }, [userLocation, map]);

  useEffect(() => {
    if (userLocation && selectPosition) {
      if (routingControl.current) {
        map.removeControl(routingControl.current);
      }

      routingControl.current = L.Routing.control({
        waypoints: [
          L.latLng(userLocation.lat, userLocation.lon),
          L.latLng(selectPosition.lat, selectPosition.lon)
        ],
        routeWhileDragging: true,
        lineOptions: {
          styles: [{ color: '#6366f1', weight: 4 }]
        },
        show: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true
      }).addTo(map);
    }

    return () => {
      if (routingControl.current) {
        map.removeControl(routingControl.current);
      }
    };
  }, [map, userLocation, selectPosition]);

  return null;
};

// Location Images component
const LocationImages = ({ position }) => {
  const [images, setImages] = useState([]);
  
  useEffect(() => {
    const fetchNearbyImages = async () => {
      if (!position) return;
      
      try {
        const response = await fetch(
          `https://api.mapillary.com/v4/images?radius=100&limit=5&` +
          `longitude=${position.lon}&latitude=${position.lat}`,
          {
            headers: {
              'Authorization': 'OAuth pBSuTyT10yTHHD4BfbuT' // Replace with your API key
            }
          }
        );
        const data = await response.json();
        setImages(data.features || []);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchNearbyImages();
  }, [position]);

  if (images.length === 0) return null;

  return (
    <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-2 max-w-md">
      <div className="flex items-center gap-2 mb-2">
        <ImageIcon className="h-4 w-4" />
        <span className="font-medium">Nearby Images</span>
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((image) => (
          <img
            key={image.id}
            src={`https://thumbnails.mapillary.com/v4/${image.id}/thumb-1024.jpg`}
            alt="Location"
            className="h-24 w-32 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

// Points of Interest (POI) component
const PointsOfInterest = ({ position }) => {
  const [pois, setPois] = useState([]);
  const map = useMap();

  useEffect(() => {
    if (!position) return;

    const fetchPois = async () => {
      try {
        const response = await fetch(
          `https://overpass-api.de/api/interpreter?data=[out:json];node[amenity](${position.lat - 0.01},${position.lon - 0.01},${position.lat + 0.01},${position.lon + 0.01});out;`
        );
        const data = await response.json();
        setPois(data.elements || []);
      } catch (error) {
        console.error("Error fetching POIs:", error);
      }
    };

    fetchPois();
  }, [position]);

  return (
    <MarkerClusterGroup>
      {pois.map((poi) => (
        <Marker
          key={poi.id}
          position={[poi.lat, poi.lon]}
          icon={L.divIcon({
            html: `<div class="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>`,
            className: 'custom-marker'
          })}
        >
          <Popup>{poi.tags.name || 'Unnamed POI'}</Popup>
        </Marker>
      ))}
    </MarkerClusterGroup>
  );
};

const Maps = () => {
  const [selectPosition, setSelectPosition] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [mapStyle, setMapStyle] = useState('streets');
  const mapRef = useRef(null);

  // Map style URLs
  const mapStyles = {
    streets: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    satellite: "https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=pBSuTyT10yTHHD4BfbuT",
    terrain: "https://api.maptiler.com/maps/terrain-v2/{z}/{x}/{y}.png?key=pBSuTyT10yTHHD4BfbuT",
    hybrid: "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=pBSuTyT10yTHHD4BfbuT"
  };

  // Handle location selection from search
  const handleLocationSelect = (location) => {
    setSelectPosition({
      lat: parseFloat(location.lat),
      lon: parseFloat(location.lon),
      display_name: location.display_name,
    });

    if (mapRef.current) {
      mapRef.current.flyTo([location.lat, location.lon], 15); // Higher zoom for detail
    }
  };

  // Add geosearch control to the map
  useEffect(() => {
    if (mapRef.current) {
      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        autoComplete: true,
        autoCompleteDelay: 250,
      });
      mapRef.current.addControl(searchControl);

      return () => mapRef.current.removeControl(searchControl);
    }
  }, [mapRef]);

  // Get user location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => console.error("Error getting location:", error),
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="w-full h-screen relative">
      <SearchBox onLocationSelect={handleLocationSelect} />
      <MapContainer
        center={[0, 0]}
        zoom={2}
        maxZoom={20} // Increased max zoom
        className="w-full h-full"
        zoomControl={false}
        whenCreated={(map) => (mapRef.current = map)}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url={mapStyles[mapStyle]}
        />

        <MapController userLocation={userLocation} selectPosition={selectPosition} />

        {userLocation && (
          <Marker
            position={[userLocation.lat, userLocation.lon]}
            icon={L.divIcon({
              html: `<div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>`,
              className: 'custom-marker'
            })}
          >
            <Popup>You are here</Popup>
          </Marker>
        )}

        {selectPosition && (
          <Marker
            position={[selectPosition.lat, selectPosition.lon]}
            icon={L.divIcon({
              html: `<div class="w-8 h-8 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-500" />
              </div>`,
              className: 'custom-marker'
            })}
          >
            <Popup>{selectPosition.display_name}</Popup>
          </Marker>
        )}

        <PointsOfInterest position={selectPosition || userLocation} />
        <MapControls onStyleChange={setMapStyle} />
        {selectPosition && <LocationImages position={selectPosition} />}
      </MapContainer>
    </div>
  );
};

export default Maps;