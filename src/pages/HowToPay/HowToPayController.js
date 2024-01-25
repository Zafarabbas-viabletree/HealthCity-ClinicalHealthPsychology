// @flow
import React from "react";

import HowToPayView from "./HowToPayView";

export default class HowToPayController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <HowToPayView {...this.props} />;
  }
}
