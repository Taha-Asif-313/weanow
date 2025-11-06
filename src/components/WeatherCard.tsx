import { WeatherData } from "../types/global";
import {
  MapPin,
  Clock,
  Thermometer,
  Droplets,
  Cloud,
  Wind,
  Gauge,
  Eye,
  Navigation,
} from "lucide-react";

const WeatherCard = ({
  name,
  region,
  country,
  description,
  icon,
  temp,
  humidity,
  cloud,
  wind_kph,
  wind_dir,
  feelslike_c,
  pressure_mb,
  vis_km,
  localtime,
}: WeatherData) => {
  return (
    <div className="mt-10 rounded-3xl p-6 md:p-8 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-white/10 shadow-xl shadow-primary/10 backdrop-blur-xl text-white transition-transform hover:scale-[1.02] duration-300">
      {/* Header - Location + Time */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-1">
          <MapPin className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {name}, {region}
          </h2>
        </div>
        <p className="text-gray-400 text-sm md:text-base">{country}</p>

        <div className="flex items-center justify-center gap-1 mt-2 text-gray-500 text-sm">
          <Clock className="w-4 h-4" />
          <span>{localtime}</span>
        </div>
      </div>

      {/* Main Weather Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-br from-zinc-800/40 to-black/50 p-6 rounded-2xl border border-white/5 mb-10">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <img
              src={`https:${icon}`}
              alt={description}
              className="w-20 filter drop-shadow-lg"
            />

            <span className="text-5xl md:text-6xl font-extrabold">
              {temp}°C
            </span>
          </div>
          <p className="capitalize text-lg md:text-xl text-gray-300">
            {description}
          </p>
          <p className="text-gray-400 text-sm flex items-center justify-center sm:justify-start gap-1 mt-2">
            <Thermometer className="w-4 h-4" />
            Feels like <span className="text-white ml-1">{feelslike_c}°C</span>
          </p>
        </div>
      </div>

      {/* Weather Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {/* Humidity */}
        <div className="p-4 bg-zinc-800/50 rounded-2xl border border-white/10 text-center hover:border-primary/40 transition">
          <Droplets className="w-7 h-7 mx-auto text-sky-400 mb-2" />
          <p className="text-2xl font-bold">{humidity}%</p>
          <p className="text-gray-400 text-sm mt-1">Humidity</p>
        </div>

        {/* Cloud Coverage */}
        <div className="p-4 bg-zinc-800/50 rounded-2xl border border-white/10 text-center hover:border-primary/40 transition">
          <Cloud className="w-7 h-7 mx-auto text-gray-300 mb-2" />
          <p className="text-2xl font-bold">{cloud}%</p>
          <p className="text-gray-400 text-sm mt-1">Cloud Cover</p>
        </div>

        {/* Wind Speed + Direction */}
        <div className="p-4 bg-zinc-800/50 rounded-2xl border border-white/10 text-center hover:border-primary/40 transition">
          <Wind className="w-7 h-7 mx-auto text-emerald-400 mb-2" />
          <p className="text-2xl font-bold">{wind_kph} km/h</p>
          <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mt-1">
            <Navigation className="w-3 h-3" />
            {wind_dir}
          </div>
        </div>

        {/* Pressure */}
        <div className="p-4 bg-zinc-800/50 rounded-2xl border border-white/10 text-center hover:border-primary/40 transition">
          <Gauge className="w-7 h-7 mx-auto text-purple-400 mb-2" />
          <p className="text-2xl font-bold">{pressure_mb} mb</p>
          <p className="text-gray-400 text-sm mt-1">Pressure</p>
        </div>

        {/* Visibility */}
        <div className="p-4 bg-zinc-800/50 rounded-2xl border border-white/10 text-center hover:border-primary/40 transition col-span-2 md:col-span-1">
          <Eye className="w-7 h-7 mx-auto text-yellow-400 mb-2" />
          <p className="text-2xl font-bold">{vis_km} km</p>
          <p className="text-gray-400 text-sm mt-1">Visibility</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
