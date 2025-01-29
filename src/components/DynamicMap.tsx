"use client";

import { BeachService } from "@/services/beachServices";
import { useGeolocation } from "@uidotdev/usehooks";
import React, { useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { BeachPreview, Page } from "@/types";
import "leaflet/dist/leaflet.css";

const customIcon = L.icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapContent = ({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

export default function DynamicMap() {
  const geolocation = useGeolocation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);
  const { getNearbyBeaches } = BeachService;
  const [beaches, setBeaches] = useState<BeachPreview[]>([]);

  const [viewport, setViewport] = useState({
    center: [28, -15.7] as [number, number],
    zoom: 7.5,
  });

  const handleLocateMe = () => {
    if (geolocation.latitude && geolocation.longitude) {
      const newCenter: [number, number] = [
        geolocation.latitude,
        geolocation.longitude,
      ];

      setViewport((prev) => ({ ...prev, center: newCenter, zoom: 14 }));

      getNearbyBeaches(geolocation.latitude, geolocation.longitude)
        .then((beaches: Page<BeachPreview>) => {
          setBeaches(beaches.content);
        })
        .catch(console.error);
    }
  };

  return (
    <main className="h-screen w-full relative">
      <div className="p-4 absolute bottom-14 left-0 right-0 bg-gray-900 text-white flex justify-between z-[1000] h-18">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLocateMe}
        >
          Locate Me
        </button>
      </div>

      <MapContainer
        center={viewport.center}
        zoom={viewport.zoom}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
        className="z-0"
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <MapContent center={viewport.center} zoom={viewport.zoom} />

        {geolocation.latitude && geolocation.longitude && (
          <Marker
            position={[geolocation.latitude, geolocation.longitude]}
            icon={customIcon}
          >
            <Popup>Your Location</Popup>
          </Marker>
        )}

        {beaches.map((beach) => (
          <Marker
            key={beach.id}
            position={[beach.latitude, beach.longitude]}
            icon={customIcon}
          >
            <Popup>{beach.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </main>
  );
}
