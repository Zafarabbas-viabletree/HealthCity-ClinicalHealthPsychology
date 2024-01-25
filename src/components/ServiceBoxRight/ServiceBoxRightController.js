// @flow
import React from "react";
import PropTypes from "prop-types";

import ServiceBoxRightView from "./ServiceBoxRightView";

export default class ServiceBoxRightController extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    anchorText: PropTypes.any,
    link: PropTypes.any,
    externalLink: PropTypes.string,
  };

  static defaultProps = {};

  render() {
    return <ServiceBoxRightView {...this.props} />;
  }
}
