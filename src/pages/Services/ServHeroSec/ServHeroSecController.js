// @flow
import React from "react";
import { ROUTES } from "../../../constants";
import ServHeroSecView from "./ServHeroSecView";

export default class ServHeroSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  getInTouch = () => {
    const contactForm = document.getElementById("contactForm");
    window.scrollTo({
      top: contactForm.offsetTop,
      behavior: "smooth",
    });
  };

  freeTrialPress = () => {
    this.props.history.push(`${ROUTES.BOOKINGS}`);
  };

  render() {
    return (
      <ServHeroSecView
        {...this.props}
        getInTouch={this.getInTouch}
        freeTrialPress={this.freeTrialPress}
      />
    );
  }
}
