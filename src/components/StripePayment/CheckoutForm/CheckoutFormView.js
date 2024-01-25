// @flow
import React from "react";
import _ from "lodash";
import { css } from "aphrodite";
import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import styles from "./CheckoutFormStyles";
import { AppStyles } from "../../../theme";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      width: "100%",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

export default function CheckoutFormView(props) {
  const { onSubmitClick, stripe, errorMessage } = props;
  return (
    <form>
      <label className={`${css([styles.labelWrapper, AppStyles.mTop10])}`}>
        <span
          style={{ display: "block" }}
          className={css(AppStyles.weight6, AppStyles.pBottom5)}
        >
          Card details
        </span>
        <CardElement
          className={css(styles.formControl)}
          options={CARD_ELEMENT_OPTIONS}
        />
      </label>

      {!_.isNull(errorMessage) && (
        <p className={css(AppStyles.formError, AppStyles.mTop10)}>
          {errorMessage}
        </p>
      )}
    </form>
  );
}
