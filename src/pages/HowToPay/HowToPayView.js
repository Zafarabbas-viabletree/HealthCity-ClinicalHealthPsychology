// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./HowToPayStyles";
import { AppStyles } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Helmet } from "react-helmet";

export default function HowToPayView(props) {
  return (
    <div>
      <Helmet>
        <title>How To Pay | Clinical Or Health Psychology | Healthcity</title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="How To Pay?" />
      <div className={`container my-5`}>
        <h2
          className={`mb-3 ${css([
            AppStyles.headingOne,
            AppStyles.weight7,
            AppStyles.textAlignCenter,
          ])}`}
        >
          Paying Fees and Terms:-
        </h2>
        <p
          className={`mb-5 ${css([
            AppStyles.pera18,
            AppStyles.weight7,
            AppStyles.textAlignCenter,
          ])}`}
        >
          Remember the process starts with{" "}
          <NavLink to={ROUTES.BOOKING}> BOOK NOW </NavLink>
        </p>
        <h2 className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Payments:
          <span className={css(AppStyles.weight4)}>
            {" "}
            We offer a number of ways to help you pay for your services with
            Healthcity:{" "}
          </span>
        </h2>
        <p
          className={`mb-3 ${css([AppStyles.headingThree, AppStyles.weight7])}`}
        >
          Bank transfer is our preferred payment method:
        </p>

        <p className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Bank: <span className={css(AppStyles.weight4)}> HSBC</span>
        </p>
        <p className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Sort Code:
          <span className={css(AppStyles.weight4)}> 40 07 04</span>
        </p>
        <p className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Account number:{" "}
          <span className={css(AppStyles.weight4)}> 71828835</span>
        </p>
        <p className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Account name:{" "}
          <span className={css(AppStyles.weight4)}>
            {" "}
            Enaikidigha Trade & Investments Ltd (trading as Healthcity){" "}
          </span>
        </p>

        <h2 className={`mb-5 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Payment reference:
          <span className={css(AppStyles.weight4)}>
            {" "}
            Your initials, surname, and date you received the service e.g.
            J.Kane23/06/18{" "}
          </span>
        </h2>
        <p
          className={`mb-3 ${css([AppStyles.headingThree, AppStyles.weight7])}`}
        >
          Payment via Insurance Firms:
        </p>

        <p className={`mb-3 ${css([AppStyles.pera18])}`}>
          Therapy, Counselling, Psychology, and some other services can be paid
          via all health insurance firms including but not limited to:- Standard
          Life, Cigna, AVIVA, AXA PPP, BUPA International, Vitality (PruHealth).
          We require your full names, your address with full postcode (if
          applicable), a name of your Insurer, your Insurance Policy Number,
          your Authorisation Number from your Insurer, and the number of
          sessions author authorized Insurer.
        </p>
        <h2
          style={{ paddingLeft: 16 }}
          className={`mb-5 ${css([AppStyles.pera18, AppStyles.weight7])}`}
        >
          Note:
          <span className={css(AppStyles.weight4)}>
            {" "}
            BUPA UK is only accepted by some of our therapists so contact us.{" "}
          </span>
        </h2>
        <h2 className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Paying by Direct Debit:
          <span className={css(AppStyles.weight4)}>
            {" "}
            Clients can set up a direct debit payment using their bank.{" "}
          </span>
        </h2>
        <h2 className={`mb-5 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Paying with debit or credit card:
          <span className={css(AppStyles.weight4)}>
            {" "}
            Clients can pay via{" "}
            <a href="https://www.paypal.com/uk/signin" target="_blank">
              Paypal
            </a>{" "}
            or{" "}
            <a href="https://stripe.com/" target="_blank">
              ‘Stripe’
            </a>
            . They will charge you a small fee.{" "}
          </span>
        </h2>

        <h2 className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          Terms and conditions (inclusive of the above)
        </h2>
        <ul
          style={{ listStyle: "decimal", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>
              Payments for Counselling, therapy and treatment services:
            </span>{" "}
            All face to face, telephone, email and video-based services are paid
            in advance. This can be via bank transfer or PayPal. A receipt will
            be emailed to you. .
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>Travel Fees:</span> Please note
            that home and school visits requiring our therapist to use a public
            or private transport will incur an additional travel fee to reflect
            the therapist’s expenses and time away from the clinic.
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>Cancellation policy:</span>{" "}
            Services once booked are to be paid in full and no refund for
            canceled or missed sessions with or without notice.
          </li>
          <li className={`mb-3`}>
            <span style={{ fontWeight: 700 }}>Waiting rooms:</span> Please note
            that the waiting rooms in some of our offices or clinics are closed
            evenings and weekends, so clients will be asked to meet their
            Counsellors or therapists service deliverer (e.g. therapist) at the
            exact appointment time.{" "}
          </li>
        </ul>
      </div>
      <WebFooter />
    </div>
  );
}
