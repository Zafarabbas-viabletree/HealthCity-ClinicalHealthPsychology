// @flow
import React from "react";

import AboutUsView from "./AboutUsView";

export default class AboutUsController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <AboutUsView {...this.props} />;
  }
}
