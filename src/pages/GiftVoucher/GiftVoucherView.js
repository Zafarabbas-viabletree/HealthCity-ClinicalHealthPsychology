// @flow
import React from "react";
import { css } from "aphrodite";
import { NavLink } from "react-router-dom";
import styles from "./GiftVoucherStyles";
import { AppStyles, Images } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { Helmet } from "react-helmet";
import { ROUTES } from "../../constants";

export default function GiftVoucherView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Gift Vouchers | Clinical Or Health Psychology | Healthcity
        </title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Gift Vouchers" />
      <div className={`container my-5`}>
        <h2
          className={`mt-5 mb-3 ${css([
            AppStyles.heading24,
            AppStyles.weight7,
          ])}`}
        >
          Like to Buy a Gift Voucher for someone?
        </h2>
        <div className={`row`}>
          <div className={`col-lg-6 col-md-12 col-sm-12`}>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              You can give a family member, a friend or someone the gift of
              well-being, self-development or professional development. Do this
              by buying therapy sessions, training courses or other services
              offered by Healthcity. Subject to availability, the person
              receiving your gift voucher can receive a service from Health
              BJ-UK via face to face in our London venus or anywhere in the
              World via phone, Online or other facilities like Whatsapp, Skype,
              and Zoom.
            </p>

            <p>
              <NavLink to={ROUTES.CONTACT}>
                <span className={`${css([AppStyles.weight7])}`}>
                  Contact Us
                </span>
              </NavLink>{" "}
              for details
            </p>
          </div>
          <div className={`col-lg-6 col-md-12, col-sm-12}`}>
            <img src={Images.gift_image} alt="Healthcity" width="100%" />
          </div>
        </div>
      </div>
      <WebFooter />
    </div>
  );
}
