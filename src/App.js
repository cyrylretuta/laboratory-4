import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "d1f928e588157019b42a8d65769a45fc";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

function App() {
  const [city, setCity] = useState("Manila");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
      setWeather(response.data);
    } catch (err) {
      setError("City not found.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial", padding: "20px" }}>
      <h1>Weather App 🌤️</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={() => fetchWeather(city)} style={{ padding: "8px 12px" }}>
        Search
      </button>

      {/* Loading State */}
      {loading && <p>Loading...</p>}

      {/* Error Handling */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Weather Display */}
      {weather && (
        <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ccc", display: "inline-block" }}>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>{weather.weather[0].description}</p>
          <p>🌡️ Temperature: {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default App;