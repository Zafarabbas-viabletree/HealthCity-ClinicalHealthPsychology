// @flow
import React from "react";
import PropTypes from "prop-types";

import CustomMarkerView from "./CustomMarkerView";

export default class CustomMarkerController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <CustomMarkerView {...this.props} />;
  }
}
