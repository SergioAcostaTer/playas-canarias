"use client";
import { useContainerDimensions } from "@/hooks/useContainerDimensions";
import React from "react";
import Map from "react-map-gl/maplibre";

export default function Home() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { width, height } = useContainerDimensions(ref as React.RefObject<HTMLDivElement>);

  return (
    <main className="flex flex-col h-full bg-gray-100 flex-1" ref={ref}>

      <div className="p-4 absolute top-0 left-0 right-0 bg-gray-900 text-white text-center">
        <button className="bg-gray-900 text-white p-2 rounded-md">locate me</button>
      </div>

      {width > 0 && height > 0 && (
        <Map
          initialViewState={{
            latitude: 28,
            longitude: -15.5,
            zoom: 6,
          }}
          style={{ width, height }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=bI4oYGzzakPOHE0Vtk5q"
        />
      )}
    </main>
  );
}
