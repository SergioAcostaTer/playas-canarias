"use client";
import { useContainerDimensions } from "@/hooks/useContainerDimensions";
import { useGeolocation } from "@uidotdev/usehooks";
import React, { useEffect, useState, useRef } from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useContainerDimensions(ref as React.RefObject<HTMLDivElement>);
  
  const [viewport, setViewport] = useState({
    latitude: 28,
    longitude: -15.5,
    zoom: 6,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  const location = useGeolocation();

  useEffect(() => {
    if (location.latitude && location.longitude) {
      setViewport({
        ...viewport,
        latitude: location.latitude,
        longitude: location.longitude,
      });
    }
  }, [location]);

  const handleLocate = () => {
    if (location.latitude && location.longitude) {
      setViewport(prev => ({
        ...prev,
        latitude: location.latitude,
        longitude: location.longitude,
        zoom: 15,
      }));
    } else {
      alert("Ubicación no disponible.");
    }
  };

  return (
    <main className="relative flex flex-col h-screen bg-gray-100" ref={ref}>
      {width > 0 && height > 0 && (
        <Map
          viewState={viewport}
          onMove={(evt) => setViewport(evt.viewState)}
          style={{ width, height }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=bI4oYGzzakPOHE0Vtk5q"
        />
      )}

      <div className="absolute bottom-5 left-5 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg z-10 flex items-center gap-2">
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 transition rounded-md"
          onClick={handleLocate}
        >
          📍 Localizarme
        </button>
      </div>
    </main>
  );
}
