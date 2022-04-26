import React, { useEffect, useRef } from 'react';

const GoogleMapIconsMarkers = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  // list of icons
  const iconList = {
    icon1: 'https://imgur.com/Ysnz4tn.jpg', // parking available
    icon2: 'https://imgur.com/3m1EIhW.png', // "you are here"
    
  }
  // markers that use iconList 
  const markerList = [
   
            { lat: 45.49289062654996, lng: -73.58035977456319 , icon: iconList.icon2},
            { lat: 45.49347986122256, lng: -73.57970822189485, icon: iconList.icon1 },
            { lat: 45.493706693107335, lng: -73.57938463352563, icon: iconList.icon1 },
            { lat: 45.494306599346466, lng: -73.57874597227062, icon: iconList.icon1 },
            { lat: 45.49421907217822, lng: -73.57994508427967, icon: iconList.icon1 },
            { lat: 45.494155146085916, lng: -73.5798217026655, icon: iconList.icon1 },
            { lat: 45.49315864172925, lng: -73.57859325093901, icon: iconList.icon1 },
            { lat: 45.493004464008926, lng: -73.57875954789768, icon: iconList.icon1 },
            { lat:  45.493302044274536, lng: -73.57981433551375, icon: iconList.icon1 }

  ]

  useEffect(() => {
    googleMap = initGoogleMap();
    var bounds = new window.google.maps.LatLngBounds();
    markerList.map(x => {
      const marker = createMarker(x);
      bounds.extend(marker.position);
    });
    googleMap.fitBounds(bounds); // the map  containing all markers
  }, []);


  // to init. google map
  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: {  lat: 45.493563430970646, lng: -73.57952513900175  },
      zoom: 1
    });
  }

  // marker creation on google map
  const createMarker = (markerObj) => new window.google.maps.Marker({
    position: { lat: markerObj.lat, lng: markerObj.lng },
    map: googleMap,
    icon: {
      url: markerObj.icon,
      // set marker width and height
      scaledSize: new window.google.maps.Size(30, 30)
    }
  });

  return <div
    ref={googleMapRef}
    style={{ width: "100%", height: 670 }} // map view size
    zoom={1}

  />
}

export default GoogleMapIconsMarkers;