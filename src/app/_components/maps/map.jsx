"use client";

import { useEffect, useRef, useMemo, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map({ address }) {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [error, setError] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      try {
        const loader = new Loader({
          apiKey: `AIzaSyAVbv4oj4cC2wxrri5YZLMjOKjvq2X_3qo`,
          version: "weekly",
          libraries: ["places"], // Add any additional libraries
        });

        await loader.load();
        setMapLoaded(true);
      } catch (err) {
        setError(`Failed to load maps: ${err.message}`);
        console.error("Maps loading error:", err);
      }
    };

    if (!window.google?.maps?.Map) {
      loadMap();
    }
  }, []);

  useEffect(() => {
    if (!mapLoaded || !address) return;

    try {
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results?.[0]) {
          const map = new window.google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 15,
          });

          new window.google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        } else {
          setError(`Geocoding failed: ${status}`);
        }
      });
    } catch (err) {
      setError(`Map initialization error: ${err.message}`);
    }
  }, [mapLoaded, address]);

  if (error) {
    return <div className="text-red-500 p-4">{error}</div>;
  }

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
}

export default Map;
