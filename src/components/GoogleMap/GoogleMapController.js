// @flow
import React from "react";
import PropTypes from "prop-types";

import GoogleMapView from "./GoogleMapView";

export default class GoogleMapController extends React.Component {
  static propTypes = {
    center: {
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    },
    zoom: PropTypes.number.isRequired,
  };

  static defaultProps = {};

  render() {
    return <GoogleMapView {...this.props} />;
  }
}
