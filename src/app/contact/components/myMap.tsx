"use client";
import { FC } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
type myMapProps = {};

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -35.33812199011957,
  lng: 149.2400876406805,
};

const MyMap: FC<myMapProps> = ({}) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GoogleMapsApi as string,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MyMap;
