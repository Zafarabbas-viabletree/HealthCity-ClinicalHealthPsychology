// @flow
import React from "react";
import PropTypes from "prop-types";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import CheckoutFormView from "./CheckoutFormView";
import { getCardIntentRequestHelper } from "../../../helpers/dataHelper";

class CheckoutFormController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
    };
  }

  onFormSubmitClick = () => {
    this.onSubmitClick();
  };

  onSubmitClick = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    // event.preventDefault();
    const { stripe, elements, customerName, amount } = this.props;
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const payload = { amount: amount * 100, currency: "GBP" };
    getCardIntentRequestHelper(payload, async (response) => {
      if (response.status) {
        const result = await stripe.confirmCardPayment(
          response.data.client_secret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: customerName,
              },
            },
          }
        );
        if (result.error) {
          // Show error to your customer (e.g., insufficient funds)
          this.setState({ errorMessage: result.error.message });
          this.props.onPaymentError(result.error.message);
        } else {
          // The payment has been processed!
          if (result.paymentIntent.status === "succeeded") {
            // Show a success message to your customer
            // There's a risk of the customer closing the window before callback
            // execution. Set up a webhook or plugin to listen for the
            // payment_intent.succeeded event that handles any business critical
            // post-payment actions.
            this.props.onPaymentSuccess({
              payment_id: result.paymentIntent.id,
            });
          }
        }
      } else {
        // stop loading
      }
    });
  };

  render() {
    const { errorMessage } = this.state;
    return (
      <CheckoutFormView
        {...this.props}
        onSubmitClick={this.onSubmitClick}
        errorMessage={errorMessage}
      />
    );
  }
}

//class CheckoutFormController extends React.Component
export default class InjectedCheckoutForm extends React.Component {
  onFormSubmitClick = () => {
    this.checkoutFormReference.onFormSubmitClick();
  };

  render() {
    return (
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <CheckoutFormController
            stripe={stripe}
            elements={elements}
            {...this.props}
            ref={(node) => (this.checkoutFormReference = node)}
          />
        )}
      </ElementsConsumer>
    );
  }
}
