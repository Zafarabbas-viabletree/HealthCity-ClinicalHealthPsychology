// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./ContentPageHeroSecStyles";
import { AppStyles } from "../../theme";

export default function ContentPageHeroSecView(props) {
  return (
    <section className={` ${css([styles.heroSectionInner, AppStyles.pxy_12])}`}>
      <div className={`container`}>
        <div className={css(styles.heroContentCont)}>
          <h4 className={css(styles.heroContentHead)}>{props.title}</h4>
        </div>
      </div>
    </section>
  );
}
