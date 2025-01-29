import React from "react";

const useContainerDimensions = (myRef: React.RefObject<HTMLElement>) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (!myRef.current) return;

    const getDimensions = () => ({
      width: myRef.current?.offsetWidth || 0,
      height: myRef.current?.offsetHeight || 0,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    setDimensions(getDimensions());

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);

  return dimensions;
};

export { useContainerDimensions };
