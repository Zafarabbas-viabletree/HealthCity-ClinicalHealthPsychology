// @flow
import React from "react";
import { css } from "aphrodite";
import { Images, AppStyles } from "../../../theme";
import styles from "./CTABannerSecStyles";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { Button } from "react-bootstrap";
export default function CTABannerSecView(props) {
  return (
    <section
      className={` ${css([
        // styles.marginBottom,
        styles.CTABannerSec,
        // AppStyles.pxy_12,
      ])}`}
    >
      <div className={`container `}>
        <div className={css(styles.ctaContent)}>
          Our services are starting from as low as £35
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink to={ROUTES.BOOKING}>
            <Button className={css([styles.ctaBtn])}>Book Now</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
