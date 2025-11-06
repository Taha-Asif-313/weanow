import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App.tsx";
import { WeatherProvider } from "./context/weatherContext.tsx";

createRoot(document.getElementById("root")!).render(
  <WeatherProvider>
    <StrictMode>
      <App />
      <Toaster />
    </StrictMode>
  </WeatherProvider>
);
