// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./TeamStyles";
import { AppStyles, Images } from "../../theme";
import { WebHeader, WebFooter, OurTeamSection } from "../../components";
import { NavLink, Button } from "react-bootstrap";
import { HEADER_HEIGHT, ROUTES } from "../../constants";
import { Helmet } from "react-helmet";

export default function TeamView(props) {
  const scrollToFunction = () => {
    const elem = document.getElementById("team");
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - HEADER_HEIGHT,
        behavior: "smooth",
      });
    } else {
      window.location.href = `#team`;
    }
  };
  return (
    <div>
      <Helmet>
        <title>Team | Clinical Or Health Psychology | Healthcity</title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <div className={`container`} style={{ height: "auto" }}>
        <div className={css(styles.teamContainer)}>
          <div className={`mt-5 ${css(styles.teamHead)}`}>
            Meet The <br /> Team-Therapist
          </div>
          <div className={css(styles.cardBox)}>
            <div className={css(styles.cardContent)}>
              Healthcity’s core team and its associates include qualified
              psychologists, therapists, nurses, doctors and other
              professionals, as well as, former service users. They have
              relevant training, skills, and experiences culturally and
              professionally.Below just some of our team members. Behind the
              experienced directors and managers below stand a number of
              awesome, dedicated non-executive directors and advisors,
              clinicians, University researchers and client support staff who
              make us all look good and achieving.
            </div>
          </div>
          <div className={css(styles.arrowOuterCont)}>
            <div
              onClick={scrollToFunction}
              className={css(styles.arrowIconCont)}
            >
              <img src={Images.arrow_down} className={css(styles.arrowIcon)} />
            </div>
          </div>
        </div>
        <div className={css(styles.teamSectionView)}>
          <OurTeamSection />
        </div>
      </div>
      <WebFooter />
    </div>
  );
}
