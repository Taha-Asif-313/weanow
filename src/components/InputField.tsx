import { Search } from "lucide-react";

interface SearchInputProps {
  searchCity: string;
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
  fetchWeather: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchCity,
  setSearchCity,
  fetchWeather,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="flex max-md:flex-col justify-center gap-3">
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchCity}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter city name..."
          className="w-full pl-12 pr-4 py-4 rounded-2xl bg-zinc-950/80 border border-zinc-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
        />
      </div>

      <button
        onClick={fetchWeather}
        className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 hover:to-yellow-500 hover:from-amber-500 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        <Search className="w-5 h-5" />
        Search
      </button>
    </div>
  );
};

export default SearchInput;
