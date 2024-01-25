// @flow
import React from "react";
import { css } from "aphrodite";
import { NavLink } from "react-router-dom";
import styles from "./ContactHeroSecStyles";
import { Images, AppStyles, Colors } from "../../../theme";
import { ROUTES } from "../../../constants";
import { Button } from "react-bootstrap";

export default function ContactHeroSecView(props) {
  return (
    <section className={` ${css([styles.heroSectionInner, AppStyles.pxy_12])}`}>
      <div className={`container`}>
        <div className={css(styles.heroContentCont)}>
          <h4 className={css(styles.heroContentHead)}>
            Booking Assistance
          </h4>
          <p className={css(styles.heroContentDesc)}>
            If you require assistance with booking, please contact:
            <br />
            <a
              style={{ color: Colors.white, textDecoration: "underline" }}
              href="mailto:info@healthcity.org.uk"
            >
              info@healthcity.org.uk
            </a>{" "}
            or phone{" "}
            <a
              style={{ color: Colors.white, textDecoration: "underline" }}
              href="tel:03338003006"
            >
              0333 800 3006
            </a>{" "}
            or{" "}
            <a
              style={{ color: Colors.white, textDecoration: "underline" }}
              href="tel:03337890012"
            >
              0333 789 0012
            </a>
          </p>
          {/* <p className={css(styles.heroContentDescTwo)}>
            NOTE: Once referred, we will assess your issues and think with you
            the best way forward. If another service is suited for your needs,
            we will refer/signpost you to them.
          </p> */}
        </div>
      </div>
    </section>
  );
}
