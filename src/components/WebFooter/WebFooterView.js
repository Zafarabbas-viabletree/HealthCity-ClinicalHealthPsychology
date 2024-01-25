// @flow
import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "aphrodite";
import { Images, AppStyles, Colors } from "../../theme";
import styles from "./WebFooterStyles";
import { ROUTES } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faEnvelope,
  faPhone,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function WebFooterView(props) {
  const { scrollToFunction } = props;
  return (
    <footer className={`pt-5 ${css([styles.siteFooter])}`}>
      <div
        className={`container ${css([AppStyles.pxy_12, styles.footerWrap])}`}
      >
        <div className={css(styles.footerContainer)}>
          <div className={css([styles.footerItemOne])}>
            <NavLink to={ROUTES.HOME}>
              <img
                className={`${css(styles.footerLogoImg)}`}
                src={Images.hc_logo}
                alt=""
              />
            </NavLink>
            <p className={`mt-3 ${css(styles.logoCaption)}`}>
              Copyright © 2023. All rights reserved
            </p>
          </div>
          <div className={css([styles.footerItemTwo])}>
            <h6
              className={`mb-4 ${css(
                AppStyles.whiteColor,
                AppStyles.heading16,
                AppStyles.font18Size,
                AppStyles.weight7
              )}`}
            >
              Quick Links
            </h6>
            <ul
              style={{ padding: 0 }}
              className={`${css(AppStyles.whiteColor)}`}
            >
              <li
                style={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <NavLink className={css(styles.footerLink)} to={ROUTES.CONTACT}>
                  Contact
                </NavLink>
              </li>
              <li
                style={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <NavLink
                  className={css(styles.footerLink)}
                  to={`${ROUTES.BOOKING}#fees`}
                >
                  Fees
                </NavLink>
              </li>
              <li
                style={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <NavLink
                  className={css(styles.footerLink)}
                  to={ROUTES.HOW_TO_PAY}
                >
                  How To Pay
                </NavLink>
              </li>
              <li
                style={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <NavLink
                  className={css(styles.footerLink)}
                  to={ROUTES.KEEP_YOU_SAVE}
                >
                  Keep You Save
                </NavLink>
              </li>
              <li
                style={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <NavLink
                  className={css(styles.footerLink)}
                  to={ROUTES.TERMS_AND_CONDITIONS}
                >
                  Terms & Conditions
                </NavLink>
              </li>
              <li
                style={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <a
                  className={css(styles.footerLink, AppStyles.pointer)}
                  onClick={scrollToFunction}
                >
                  Privacy Policy
                </a>
              </li>
              <li
                style={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <NavLink
                  className={css(styles.footerLink)}
                  to={ROUTES.EXTERNAL_LINKS}
                >
                  External Links
                </NavLink>
              </li>

              <li
                style={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <NavLink
                  className={css(styles.footerLink)}
                  to={ROUTES.GIFT_VOUCHERS}
                >
                  Gift Vouchers
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={css([styles.footerItemThree])}>
            <h6
              className={`mb-4 ${css(
                AppStyles.whiteColor,
                AppStyles.heading16,
                AppStyles.font18Size,
                AppStyles.weight7
              )}`}
            >
              Contact Info
            </h6>

            <ul
              style={{ padding: 0 }}
              className={`${css(AppStyles.whiteColor)}`}
            >
              <li
                tyle={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <span
                  style={{ display: "inline-block" }}
                  className={css(AppStyles.whiteColor, AppStyles.heading16)}
                >
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <a
                  href="tel:03338003006"
                  style={{
                    color: Colors.white,
                    marginLeft: 5,
                    marginLeft: 5,
                  }}
                >
                  0333 800 3006
                </a>
              </li>
              <li
                tyle={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <span
                  style={{ display: "inline-block" }}
                  className={css(AppStyles.whiteColor, AppStyles.heading16)}
                >
                  <FontAwesomeIcon icon={faPhoneAlt} />
                </span>
                <a
                  href="tel:03337890012"
                  style={{
                    color: Colors.white,
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  0333 789 0012{" "}
                </a>
              </li>
              <li
                tyle={{ listStyle: "none" }}
                className={`mb-3 ${css(AppStyles.whiteColor)}`}
              >
                <span
                  style={{ display: "inline-block" }}
                  className={css(AppStyles.whiteColor, AppStyles.heading16)}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <a
                  href="mailto:info@healthcity.org.uk"
                  style={{
                    color: Colors.white,
                    marginLeft: 5,
                  }}
                >
                  {" "}
                  info@healthcity.org.uk{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className={css([styles.footerItemFour])}>
            <div className={css(styles.socialIconsCont)}>
              <a
                href="https://www.facebook.com/HealthCityandTwinBrain"
                target="_blank"
                className={css(styles.socialIconsSpace)}
              >
                <img src={Images.fb_icon} className={css(styles.iconCss)} />
              </a>
              <a
                href="https://www.instagram.com/healthcity35/"
                target="_blank"
                className={css(styles.socialIconsSpace)}
              >
                <img src={Images.insta_icon} className={css(styles.iconCss)} />
              </a>

              <a
                href="https://uk.linkedin.com/in/health-city-811349108"
                target="_blank"
              >
                <img
                  src={Images.linkedin_icon}
                  className={css(styles.iconCss)}
                />
              </a>
            </div>

            {/* card div */}
            <div className={css(styles.cardOptionsCont)}>
              <div className={css(styles.cardsSpace)}>
                <img className={css(styles.cardCss)} src={Images.visa_card} />
              </div>
              <div className={css(styles.cardsSpace)}>
                <img className={css(styles.cardCss)} src={Images.master_card} />
              </div>
              <div className={css(styles.cardsSpace)}>
                <img className={css(styles.cardCss)} src={Images.paypal} />
              </div>
              <div>
                <img
                  className={css(styles.cardCss)}
                  src={Images.american_express}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
