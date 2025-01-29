"use client";
import { useContainerDimensions } from "@/hooks/useContainerDimensions";
import { useGeolocation } from "@uidotdev/usehooks";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Map from "react-map-gl/maplibre";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { width, height } = useContainerDimensions(ref as React.RefObject<HTMLDivElement>);

  // Estado del viewport
  const [viewport, setViewport] = useState({
    latitude: 28,
    longitude: -15.5,
    zoom: 6,
  });

  const state = useGeolocation();

  // Solo actualizar el viewport si hay coordenadas válidas
  useEffect(() => {
    if (state.latitude !== undefined && state.longitude !== undefined) {
      setViewport((prev) => ({
        ...prev,
        latitude: state.latitude,
        longitude: state.longitude,
        zoom: 10,
      }));
    }
  }, [state.latitude, state.longitude]);

  // Callback para manejar el movimiento del mapa sin generar un bucle infinito
  const handleMove = useCallback((evt: any) => {
    const { latitude, longitude, zoom } = evt.viewState;
    setViewport((prev) => {
      if (
        prev.latitude !== latitude ||
        prev.longitude !== longitude ||
        prev.zoom !== zoom
      ) {
        return { latitude, longitude, zoom };
      }
      return prev; // Evita actualizaciones innecesarias
    });
  }, []);

  // Callback para centrar el mapa en la ubicación del usuario
  const handleLocateMe = useCallback(() => {
    if (state.latitude !== undefined && state.longitude !== undefined) {
      setViewport({
        latitude: state.latitude ?? 28,
        longitude: state.longitude ?? -15.5,
        zoom: 10,
      });
    }
  }, [state.latitude, state.longitude]);

  return (
    <main className="flex flex-col h-full bg-gray-100 flex-1" ref={ref}>
      <div className="p-4 absolute bottom-0 left-0 right-0 bg-gray-900 text-white flex justify-between z-10">
        <button
          className="bg-gray-900 text-white p-2 rounded-md"
          onClick={handleLocateMe}
        >
          Locate Me
        </button>
      </div>

      {/* Solo renderizar el mapa si tiene dimensiones válidas */}
      {width > 0 && height > 0 && (
        <Map
          initialViewState={{
            latitude: viewport.latitude,
            longitude: viewport.longitude,
            zoom: viewport.zoom,
          }}
          viewState={viewport}
          onMove={handleMove}
          style={{ width, height }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=bI4oYGzzakPOHE0Vtk5q"
        />
      )}
    </main>
  );
}
