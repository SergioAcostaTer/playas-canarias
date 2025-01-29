"use client";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../components/DynamicMap"), {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <DynamicMap />
    </div>
  );
};

export default Page;
