"use client"
import { Header } from "@/components/Header";
import Map from "react-map-gl/maplibre";

export default function Home() {
  return (
    <div>
      <Header />
      
      <Map
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=get_your_own_key"
    />

    </div>
  );
}
