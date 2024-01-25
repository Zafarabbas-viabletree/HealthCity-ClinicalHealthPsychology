// @flow
import React from "react";

import EmptyPageView from "./EmptyPageView";

export default class EmptyPageController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <EmptyPageView {...this.props} />;
  }
}
