"use client";
import React from "react";
import Map from "react-map-gl/maplibre";

export default function Home() {
  const ref = React.useRef(null);
  const { width, height } = useContainerDimensions(ref);


  return (
    <main className="flex flex-col h-full bg-gray-100 flex-1" ref={ref}>
      {/* <Map
        initialViewState={{
          latitude: 28,
          longitude: -15.5,
          zoom: 6,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=bI4oYGzzakPOHE0Vtk5q"
      /> */}
    </main>
  );
}
