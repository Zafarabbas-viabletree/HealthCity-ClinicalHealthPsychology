// @flow
import React from "react";
import PropTypes from "prop-types";

import TestimonialSecView from "./TestimonialSecView";

export default class TestimonialSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  constructor(props) {
    super(props);
  }
  nextClick = () => {
    this.slider.slickNext();
  };
  previousClick = () => {
    this.slider.slickPrev();
  };

  render() {
    return (
      <TestimonialSecView
        {...this.props}
        previousClick={this.previousClick}
        nextClick={this.nextClick}
      />
    );
  }
}
