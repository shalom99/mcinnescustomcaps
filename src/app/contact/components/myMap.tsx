'use client'
import { FC, useState, useCallback, } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
type myMapProps = {
  
}

const containerStyle = {
    width: '600px',
    height: '400px'
  };
  
  const center = {
    lat: -35.33812199011957,
    lng: 149.2400876406805
  };

const MyMap: FC<myMapProps> = ({}) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAtHRg8SJquJrfog7TZO0TL8_J1-wYYhnE"
      })

      const [map, setMap] = useState(null)
    //   const [zoom, setZoom] = useState(18)

    //   const onLoad = useCallback(function callback(map:any) {
    //     // This is just an example of getting and using the map instance!!! don't just blindly copy!
    //     const bounds = new window.google.maps.LatLngBounds(center);
    //     map.fitBounds(bounds);
    
    //     setMap(map)
        
    //   }, [])

    //   const onUnmount = useCallback(function callback(map:any) {
    //     setMap(null)
    //   }, [])
      return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        //   onLoad={onLoad}
        //   onUnmount={onUnmount}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
}

export default MyMap