import React, { useState, useEffect } from 'react';
import GoogleMapIconsMarkers from './GoogleMapIconsMarkers';
import NavBar from './NavBar';

const GOOGLE_MAP_API_KEY = 'AIzaSyBXs2c0Ul3OAB9W4i2ljJ_sWV1N1lLYsW0';

const loadGoogleMapScript = (callback) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
      callback();
    } else {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.addEventListener("load", callback);
    }
}

const GoogleMap = (props) => {
    const [loadMap, setLoadMap] = useState(false);
  
    useEffect(() => {
      loadGoogleMapScript(() => {
        setLoadMap(true)
      });
    }, []);
  
    return (
      <div className="GoogleMapDefault">
      <NavBar />

        {!loadMap ? <div>Loading...</div> : <GoogleMapIconsMarkers/>}
        
      </div>
    );
  }
  
  export default GoogleMap;