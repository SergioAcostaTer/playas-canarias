"use client";
import { Header } from "@/components/Header";
import Map from "react-map-gl/maplibre";

export default function Home() {



  return (
    <div>
      <Header />

      <div className="text-center p-4 bg-gray-100">

      </div>

      <Map
        initialViewState={{
          latitude: 28,
          longitude: -15.5,
          zoom: 6,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=bI4oYGzzakPOHE0Vtk5q"
      />
    </div>
  );
}
