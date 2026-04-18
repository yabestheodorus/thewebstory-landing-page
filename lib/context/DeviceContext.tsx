"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface DeviceContextType {
  isMobile: boolean; // < 1024px (includes sm and md)
}

const DeviceContext = createContext<DeviceContextType>({
  isMobile: false,
});

export const DeviceProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initial check
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();

    // Listener for resize
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);
