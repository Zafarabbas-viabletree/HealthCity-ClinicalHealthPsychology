// @flow
import React from "react";
import PropTypes from "prop-types";

import WebFooterView from "./WebFooterView";
import { HEADER_HEIGHT, ROUTES, PRIVACY_POLICY } from "../../constants";

export default class WebFooterController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  scrollToFunction = () => {
    const elem = document.getElementById(PRIVACY_POLICY);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - HEADER_HEIGHT,
        behavior: "smooth",
      });
    } else {
      window.location.href = `${ROUTES.ABOUT_US}#${PRIVACY_POLICY}`;
    }
  };

  componentDidMount() {
    if (window.location.href.indexOf("#" + PRIVACY_POLICY) > -1) {
      setTimeout(() => {
        this.scrollToFunction();
      }, 1000);
    }
  }

  render() {
    return (
      <WebFooterView {...this.props} scrollToFunction={this.scrollToFunction} />
    );
  }
}
