import L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export const MapContent = () => {
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconUrl: '/map/marker-icon.png',
      shadowUrl: '/map/marker-shadow.png',
    });
  }, []);
  return (
    <>
      <MapContainer
        center={[40.9820006, 29.1332118]}
        zoom={13}
        scrollWheelZoom={false}
        className="z-10 h-[calc(100vh-164px)] w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[40.9820006, 29.1332118]}>
          <Popup>TA Role</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};
