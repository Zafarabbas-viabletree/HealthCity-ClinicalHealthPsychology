// @flow
import React from "react";

import ResourceHubXView from "./ResourceHubXView";

export default class ResourceHubXController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <ResourceHubXView {...this.props} />;
  }
}
