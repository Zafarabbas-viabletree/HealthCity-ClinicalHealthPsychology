// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./GoogleMapStyles";
import GoogleMapReact from "google-map-react";
import { CustomMarker } from "../../components";

export default function GoogleMapView(props) {
  const { center, zoom } = props;
  return (
    <div className={css(styles.mapContainer)}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAP4548ivkyekRGYogdySUuFU-kbDH1270" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <CustomMarker />
      </GoogleMapReact>
    </div>
  );
}
