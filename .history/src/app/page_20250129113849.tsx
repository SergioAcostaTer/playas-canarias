"use client";
import { useContainerDimensions } from "@/hooks/useContainerDimensions";
import { useGeolocation } from "@uidotdev/usehooks";
import React, { useEffect, useState, useRef } from "react";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useContainerDimensions(ref as React.RefObject<HTMLDivElement>);

  // Estado del viewport del mapa
  const [viewport, setViewport] = useState({
    latitude: 28,
    longitude: -15.5,
    zoom: 6,
    bearing: 0,
    pitch: 0,
    padding: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  // Estado separado para la ubicación del usuario
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);

  const location = useGeolocation();

  // Actualizar la ubicación del usuario solo cuando cambie
  useEffect(() => {
    if (location.latitude && location.longitude) {
      setUserLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    }
  }, [location.latitude, location.longitude]);

  // Mover el mapa al hacer clic en "Localizarme"
  const handleLocate = () => {
    if (userLocation) {
      setViewport(prev => ({
        ...prev,
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        zoom: 12,
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

      {/* Botón de Localizarme con mejor diseño */}
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
