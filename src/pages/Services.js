// commit to commit again
import React from 'react'
import { GoogleMap, LoadScript, Marker, useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";
  
  import "@reach/combobox/styles.css";
  
  const containerStyle = {
    width: '100vw',
    height: '50vh'
  };
  
  const center = {
    lat: 39.768,
    lng: -86.158
  };
  
  const options = {
  
  }
  
    function Services() {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });
  
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";
  
  
    // const [map, setMap] = React.useState(null)
  
    // const onLoad = React.useCallback(function callback(map) {
    //   const bounds = new window.google.maps.LatLngBounds();
    //   map.fitBounds(bounds);
    //   setMap(map)
    // }, [])
  
    // const onUnmount = React.useCallback(function callback(map) {
    //   setMap(null)
    // }, [])
  
    return (
      <div>
        <h1>Find a Physician!</h1>
        <GoogleMap
          mapContainerStyle={containerStyle}
          zoom={8}
          center={center}
          options={options}
        ></GoogleMap>
      </div>
      
    )
  }
  
  // export function Search() {
  //   const { } = usePlacesAutocomplete({
  //     requestOptions: {
  //       location: { lat: () => 39.768, lng: () => -86.158 },
  //       radius: 80 * 1000,
  //     }
  //   })
  // }
  

export default Services 