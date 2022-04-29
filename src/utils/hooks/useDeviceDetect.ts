import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

const useDeviceDetect = (device: string) => {
  const theme = useTheme();
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return device === "mobile"
    ? width <= theme.deviceSizes.mobile
    : width <= theme.deviceSizes.tablet;
};

export default useDeviceDetect;
