import { Heart } from "lucide-react";
import CheckWeather from "./CheckWeather";

const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-black text-white overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-primary/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] bg-emerald-500/20 blur-[100px] rounded-full animate-pulse delay-500" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Header Section */}
      <header className="container mx-auto px-4 pt-16 pb-10 text-center">
        <div className="inline-flex  max-md:flex-col items-center justify-center gap-4 mb-6">
          <img src="/weather-icon.svg" alt="Logo" className="w-16 h-16" />
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            What’s <span className="text-primary">Weather!</span>
          </h1>
        </div>

        <p className="text-sm md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Get real-time weather updates for any city worldwide — powered by
          accurate forecasts and sleek design.
        </p>
      </header>

      {/* Main Weather Checker */}

      <CheckWeather />

      {/* Footer */}
      <footer className="text-center flex items-center justify-center text-gray-500 py-6 border-t border-white/5 text-sm">
        Built with <span><Heart size={20} className="fill-red-600 text-red-600 mx-2"/></span> by Taha Asif
      </footer>
    </div>
  );
};

export default Home;
