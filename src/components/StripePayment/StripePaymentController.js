// @flow
import React from "react";
import PropTypes from "prop-types";
import StripePaymentView from "./StripePaymentView";

export default class StripePaymentController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  onStripeSubmit = () => {
    this.checkoutReference.onFormSubmitClick();
  };

  render() {
    return (
      <StripePaymentView
        {...this.props}
        checkoutRef={(node) => {
          return (this.checkoutReference = node);
        }}
      />
    );
  }
}
