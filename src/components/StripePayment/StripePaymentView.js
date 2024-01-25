// @flow
import React from "react";
import { css } from "aphrodite";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import styles from "./StripePaymentStyles";

export default function StripePaymentView(props) {
  const stripePromise = loadStripe(
    `pk_live_51ILtWeKH6e14ItxUsXeBX9varFD5AAPfyZpPUe0M1UcD9fQFYR6nmrvPE6TyRi6RPyL8l0UeKQtsDYqG88HjfwmG00YFmcnOvw`
  );
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm {...props} ref={props.checkoutRef} />
      </Elements>
    </div>
  );
}
