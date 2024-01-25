// @flow
import React from "react";
import { css } from "aphrodite";
import { NavLink } from "react-router-dom";
import styles from "./ServHeroSecStyles";
import { Images, AppStyles, Colors } from "../../../theme";
import { ROUTES } from "../../../constants";
import { Button } from "react-bootstrap";

export default function ServHeroSecView(props) {
  return (
    <section className={` ${css([styles.heroSectionInner, AppStyles.pxy_12])}`}>
      <div className={`container`}>
        <div className={css(styles.heroContentCont)}>
          <h4 className={css(styles.heroContentHead)}>
            Mental Health & Wellness Services and Sessions
          </h4>
          <p className={css(styles.heroContentDesc)}>
            Learn to monitor, manage, and improve your mental health with guided
            professional help.
          </p>
        </div>
      </div>
    </section>
  );
}
