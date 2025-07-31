"use client";

import { useState } from "react";
import { getUserLocation, getCoordsFromZip } from "@utils/location_fetch/location_fetch";

export default function TestLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [zipInput, setZipInput] = useState("");
  const [zipCoords, setZipCoords] = useState(null);
  const [error, setError] = useState("");

  const testAutoLocation = async () => {
    setLoading(true);
    setError("");
    try {
      console.log("Testing getUserLocation function...");
      const loc = await getUserLocation();
      console.log("Auto location result:", loc);
      setLocation(loc);
      if (!loc) {
        setError("No location data returned");
      }
    } catch (error) {
      console.error("Auto location error:", error);
      setError(error.message || "Location detection failed");
    } finally {
      setLoading(false);
    }
  };

  const testZipLocation = async () => {
    if (!zipInput) return;
    setLoading(true);
    setError("");
    try {
      const coords = await getCoordsFromZip(zipInput);
      console.log("ZIP coordinates result:", coords);
      setZipCoords(coords);
      if (!coords) {
        setError("Invalid ZIP code or no coordinates found");
      }
    } catch (error) {
      console.error("ZIP location error:", error);
      setError(error.message || "ZIP conversion failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>📍 Location Functionality Test</h1>
      
      <div style={{ marginBottom: "2rem" }}>
        <h2>Auto Location Detection</h2>
        <button 
          onClick={testAutoLocation}
          disabled={loading}
          style={{ 
            padding: "10px 20px", 
            marginBottom: "1rem",
            backgroundColor: loading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Detecting..." : "Test Auto Location"}
        </button>
        
        {error && (
          <div style={{ 
            padding: "1rem", 
            backgroundColor: "#f8d7da", 
            color: "#721c24",
            borderRadius: "5px",
            marginBottom: "1rem"
          }}>
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {location && (
          <div style={{ 
            padding: "1rem", 
            backgroundColor: "#d4edda", 
            color: "#155724",
            borderRadius: "5px",
            marginTop: "1rem"
          }}>
            <h3>✅ Location Detected:</h3>
            <p><strong>Latitude:</strong> {location.latitude}</p>
            <p><strong>Longitude:</strong> {location.longitude}</p>
            <p><strong>City:</strong> {location.city}</p>
            <p><strong>ZIP:</strong> {location.zip}</p>
          </div>
        )}
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2>ZIP Code to Coordinates</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Enter ZIP code (e.g., 98101)"
            value={zipInput}
            onChange={(e) => setZipInput(e.target.value)}
            style={{ 
              padding: "10px", 
              border: "1px solid #ccc", 
              borderRadius: "5px",
              flex: 1
            }}
          />
          <button 
            onClick={testZipLocation}
            disabled={loading || !zipInput}
            style={{ 
              padding: "10px 20px",
              backgroundColor: loading || !zipInput ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: loading || !zipInput ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Converting..." : "Get Coordinates"}
          </button>
        </div>
        
        {zipCoords && (
          <div style={{ 
            padding: "1rem", 
            backgroundColor: "#d4edda", 
            color: "#155724",
            borderRadius: "5px"
          }}>
            <h3>✅ Coordinates for ZIP {zipInput}:</h3>
            <p><strong>Latitude:</strong> {zipCoords.lat}</p>
            <p><strong>Longitude:</strong> {zipCoords.lng}</p>
          </div>
        )}
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <h2>Database Format</h2>
        <p>When location is detected, it will be saved to the database in this format:</p>
        <pre style={{ 
          backgroundColor: "#f8f9fa", 
          padding: "1rem", 
          borderRadius: "5px",
          overflow: "auto"
        }}>
{`{
  "type": "Point",
  "coordinates": [longitude, latitude]
}`}
        </pre>
      </div>

      <div>
        <h2>Test Registration</h2>
        <p>Go to the <a href="/signup" style={{ color: "#007bff" }}>signup page</a> to test the full registration flow with location data.</p>
      </div>
    </div>
  );
} 