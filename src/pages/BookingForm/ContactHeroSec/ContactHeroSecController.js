// @flow
import React from "react";
import { ROUTES } from "../../../constants";
import ContactHeroSecView from "./ContactHeroSecView";

export default class ContactHeroSecController extends React.Component {
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
      <ContactHeroSecView
        {...this.props}
        getInTouch={this.getInTouch}
        freeTrialPress={this.freeTrialPress}
      />
    );
  }
}
