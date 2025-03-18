## Weather App
- A simple and responsive React Weather App that fetches real-time weather data from the OpenWeatherMap API.

# Features
- Search for any city and get live weather updates.
- Displays temperature, humidity, and weather conditions.
- Loading state while fetching data.
- Handles invalid city names gracefully.

# API Source
- This app uses the OpenWeatherMap API to get real-time weather data.

# Explanation of useState and useEffect
- useState is used to manage the search input, weather data, and loading/error states.
- useEffect is used to fetch weather data when the user searches for a city.

# Code Quality
- Proper Component Structure
The app follows a modular approach, with components properly organized.
App.js contains the main logic, while styling is managed in index.css.

- API Error Handling
Displays an error message if the city is not found.
Shows a loading state while fetching data.

- Loading States
A loading spinner appears while data is being fetched.

Deployment
The app is hosted at: Live Demo
