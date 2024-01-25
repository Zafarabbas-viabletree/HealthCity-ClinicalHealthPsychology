// @flow
import React from "react";

import FreeTherapyView from "./FreeTherapyView";

export default class FreeTherapyController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <FreeTherapyView {...this.props} />;
  }
}
