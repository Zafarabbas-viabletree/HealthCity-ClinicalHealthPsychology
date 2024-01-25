// @flow
import React from "react";

import ServicesView from "./ServicesView";

export default class ServicesController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <ServicesView {...this.props} />;
  }
}
