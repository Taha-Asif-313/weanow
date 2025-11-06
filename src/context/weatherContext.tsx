import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context state
interface WeatherContextType {
  weatherData: object | null;
  setweatherData: (value: object) => void;
}

// Create the context with a default value
const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

// Create a provider component
interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {
  const [weatherData, setweatherData] = useState<object | null>(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setweatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to use the context
export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeatherContext must be used within an WeatherProvider");
  }
  return context;
};
