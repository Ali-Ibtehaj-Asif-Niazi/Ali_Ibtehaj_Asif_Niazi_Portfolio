"use client";
import React, { createContext, useState, ReactNode } from "react";

export const AppContext = createContext({
  isPlaying: false,
  setIsPlaying: () => {},
});

export const IsPlayingProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AppContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </AppContext.Provider>
  );
};

