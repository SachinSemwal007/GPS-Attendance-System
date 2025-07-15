import { useState } from "react";

export default function Dashboard() {
  const [location, setLocation] = useState(null);

  const handleMarkAttendance = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        alert("Attendance marked with GPS location!");
        // Later: Save to backend/local DB here
      },
      (error) => {
        alert("Failed to get location: " + error.message);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>
      <button
        onClick={handleMarkAttendance}
        className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700"
      >
        Mark Attendance
      </button>

      {location && (
        <div className="mt-4 text-center">
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      )}
    </div>
  );
}
