import React from "react";

const useContainerDimensions = (myRef: React.RefObject<HTMLElement> | React.RefObject<null>) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (!myRef) {
      return;
    }

    const getDimensions = () => ({
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight,
    });
    const handleResize = () => {
      setDimensions(getDimensions());
    };
    if (myRef.current) {
      setDimensions(getDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [myRef]);
  return dimensions;
};

export { useContainerDimensions };
