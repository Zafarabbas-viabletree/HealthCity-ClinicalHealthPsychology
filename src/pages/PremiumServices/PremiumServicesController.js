// @flow
import React from "react";

import PremiumServicesView from "./PremiumServicesView";

export default class PremiumServicesController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <PremiumServicesView {...this.props} />;
  }
}
