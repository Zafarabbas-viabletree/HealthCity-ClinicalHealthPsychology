// @flow
import React from "react";

import CBTSecView from "./CBTSecView";

export default class CBTSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return <CBTSecView {...this.props} />;
  }
}
