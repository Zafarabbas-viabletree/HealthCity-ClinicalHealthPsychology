// @flow
import React from "react";
import { css } from "aphrodite";
import { Images } from "../../../theme";
import styles from "./CBTSecStyles";
import { ROUTES } from "../../../constants";
import { NavLink } from "react-router-dom";
import { Button } from "../../../components";
export default function CBTSecView(props) {
  return (
    <section
      id="cbt"
      className={`pt-5 ${css([
        // styles.marginBottom,
        styles.CBTSect,
        // AppStyles.pxy_12,
      ])}`}
    >
      <div className={`container `}>
        <div className={`container`}>
          <div className={css(styles.CBTCont)}>
            <div className={`mt-5 ${css(styles.CBTHead)}`}>
              What Support clinical, counselling or health psychologists offer
              you?
            </div>

            <div className={css(styles.cardContent)}>
              Most psychologists are trained at doctor level to help you talk,
              process your feelings, gain a deep understanding, and acquire
              practical ways or techniques to cope with almost any difficulty to
              resolve your issues or achieve resilience to thrive in your life
              from relationships to business and career. Most psychologists may
              help you by using more than one set of treatment skills, e.g.
              Cognitive behavioural tehrapy (CBT), eye movement desensitisation
              reprocessing therapy (EMDR), counselling, coaching, etc.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
