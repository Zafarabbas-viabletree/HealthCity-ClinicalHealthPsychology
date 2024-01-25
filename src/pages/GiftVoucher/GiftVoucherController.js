// @flow
import React from "react";

import GiftVoucherView from "./GiftVoucherView";

export default class GiftVoucherController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <GiftVoucherView {...this.props} />;
  }
}
