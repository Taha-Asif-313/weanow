import { useState } from "react";

const useCheckWeather = () => {
  const [response, setResponse] = useState<object | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchWeather = async (city: string) => {
    if (!city) return;
    try {
      setLoading(true);
      setError(""); // Reset previous errors

      // Fetch current weather data for the city
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=156ba8419fcb4be388774417240708&q=${city}`
      );

      if (!res.ok) {
        setError("City not found or invalid request");
        setLoading(false);
        return;
      }

      const data = await res.json(); // Parse JSON data
      setResponse(data); // Store the data in state
    } catch (error: any) {
      console.error("Error fetching weather:", error.message);
      setError("Failed to fetch weather data");
      setResponse(null);
    } finally {
      setLoading(false); // Always stop loading
    }
  };

  return { response, loading, error, fetchWeather }; // Return weather data and fetch function
};

export default useCheckWeather;
