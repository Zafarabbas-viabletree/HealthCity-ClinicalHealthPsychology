// @flow
import React from "react";

import ExternalLinksView from "./ExternalLinksView";

export default class ExternalLinksController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <ExternalLinksView {...this.props} />;
  }
}
