// @flow
import React from "react";

import KeepYouSaveView from "./KeepYouSaveView";

export default class KeepYouSaveController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <KeepYouSaveView {...this.props} />;
  }
}
