// @flow
import React from "react";

import TermsAndConditionsView from "./TermsAndConditionsView";

export default class TermsAndConditionsController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <TermsAndConditionsView {...this.props} />;
  }
}
