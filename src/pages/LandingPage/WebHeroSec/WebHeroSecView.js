// @flow
import React, { useRef } from "react";
import { css } from "aphrodite";
import { NavLink } from "react-router-dom";
import styles from "./WebHeroSecStyles";
import { Images, AppStyles, Colors } from "../../../theme";
import { HEADER_HEIGHT, ROUTES } from "../../../constants";
import { Button } from "react-bootstrap";

export default function WebHeroSecView(props) {
  const scrollToFunction = () => {
    const elem = document.getElementById("cbt");
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - HEADER_HEIGHT,
        behavior: "smooth",
      });
    } else {
      window.location.href = `#cbt`;
    }
  };
  return (
    <section className={` ${css([styles.heroSectionInner, AppStyles.pxy_12])}`}>
      <div className={`container`}>
        <div className={css(styles.cardBox)}>
          <div className={css(styles.cardSubHeading)}>
            Clinical Or Health Psychology
          </div>
          <div className={css(styles.cardHeading)}>
            CHP Can Be Highly Effective For Many Disorders
          </div>
          <NavLink to={ROUTES.BOOKING}>
            <Button className={css([styles.bookNowBtn])}>Book Now</Button>
          </NavLink>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div
              onClick={scrollToFunction}
              className={css(styles.arrowIconCont)}
            >
              <img src={Images.arrow_down} className={css(styles.arrowIcon)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
