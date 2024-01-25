// @flow
import React from "react";

import TwinBrainView from "./TwinBrainView";

export default class TwinBrainController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <TwinBrainView {...this.props} />;
  }
}
