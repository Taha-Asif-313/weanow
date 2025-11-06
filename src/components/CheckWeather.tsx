import React, { useState, useRef } from "react";
import SearchInput from "./InputField";
import WeatherCard from "./WeatherCard";
import { WeatherApiResponse } from "../types/global";
import Loading from "./Loading";
import toast from "react-hot-toast";

const CheckWeather: React.FC = () => {
  const [response, setResponse] = useState<WeatherApiResponse | null>(null);
  const [searchCity, setSearchCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey: string = import.meta.env.VITE_API_KEY;

  // Ref for WeatherCard scroll
  const cardRef = useRef<HTMLDivElement | null>(null);

  const fetchWeather = async () => {
    if (!searchCity) return;
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchCity}`
      );

      if (!res.ok) {
        const errorMsg = "City not found or invalid request";
        setError(errorMsg);
        toast.error(errorMsg);
        return;
      }

      const data: WeatherApiResponse = await res.json();
      setResponse(data);

      // ✅ Smooth scroll to WeatherCard with offset (fixes scroll lock)
      setTimeout(() => {
        if (cardRef.current) {
          const cardTop = cardRef.current.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: cardTop - 100, // 🔹 offset so header still visible
            behavior: "smooth",
          });
        }
      }, 400);
    } catch (error: any) {
      console.error("Error fetching weather:", error.message);
      const errorMsg = "Failed to fetch weather data";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="pb-16"> {/* removed min-h-screen to allow full-page scroll */}
      <div className="container mx-auto px-4">
        <div className="max-w-full mx-auto">
          <SearchInput
            searchCity={searchCity}
            setSearchCity={setSearchCity}
            fetchWeather={fetchWeather}
          />

          <div ref={cardRef} className="scroll-mt-24"> {/* scroll margin top for extra offset */}
            {response && (
              <WeatherCard
                name={response.location.name}
                region={response.location.region}
                country={response.location.country}
                description={response.current.condition.text}
                icon={response.current.condition.icon}
                temp={response.current.temp_c}
                humidity={response.current.humidity}
                cloud={response.current.cloud}
                wind_kph={response.current.wind_kph}
                wind_dir={response.current.wind_dir}
                feelslike_c={response.current.feelslike_c}
                pressure_mb={response.current.pressure_mb}
                vis_km={response.current.vis_km}
                localtime={response.location.localtime}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckWeather;
