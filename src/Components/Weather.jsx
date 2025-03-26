import { useState, useEffect } from "react";
import { FaSearch, FaMapMarkerAlt, FaCloudSun } from "react-icons/fa";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("London");
  const [error, setError] = useState(null);
  const [inputLocation, setInputLocation] = useState(location);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${location}`
        );
        const data = await response.json();

        if (response.ok) {
          setWeather(data);
          setError(null);
        } else {
          setError(data.error.message);
        }
      } catch (error) {
        console.error(error);
        setError("Error fetching weather data.");
      }
      setLoading(false);
    };

    fetchWeather();
  }, [location]);

  const handleLocationChange = (e) => {
    setInputLocation(e.target.value);
  };

  const handleSearch = () => {
    setLocation(inputLocation);
  };

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-b from-gray-600 to-gray-800 text-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center gap-2">
        <FaCloudSun className="text-3xl" />
        <h3 className="text-2xl font-bold">Weather App</h3>
      </div>

      {/* Input Field & Search Button */}
      <div className="flex mt-4 bg-white p-2 rounded-lg shadow-sm">
        <input
          type="text"
          className="flex-1 px-3 py-2 text-gray-800 rounded-l-lg focus:outline-none"
          placeholder="Enter location"
          value={inputLocation}
          onChange={handleLocationChange}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-400 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-white flex items-center"
        >
          <FaSearch />
        </button>
      </div>

      {/* Weather Details */}
      {loading ? (
        <p className="text-center mt-4">Fetching weather...</p>
      ) : error ? (
        <p className="text-red-300 text-center mt-4">{error}</p>
      ) : weather ? (
        <div className="mt-6 text-center">
          <div className="flex justify-center items-center gap-2">
            <FaMapMarkerAlt className="text-lg" />
            <h4 className="text-xl font-semibold">{weather.location.name}, {weather.location.country}</h4>
          </div>

          <img
            src={weather.current.condition.icon}
            alt="Weather icon"
            className="mx-auto my-2 w-20"
          />
          <p className="text-lg">{weather.current.condition.text}</p>
          <p className="text-2xl font-semibold">{weather.current.temp_c}°C</p>

          <div className="mt-3 flex justify-between">
            <p className="text-sm">Humidity: {weather.current.humidity}%</p>
            <p className="text-sm">Wind: {weather.current.wind_kph} kph</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherCard;
