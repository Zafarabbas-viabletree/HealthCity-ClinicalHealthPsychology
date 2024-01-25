// @flow
import React from "react";
import { css } from "aphrodite";
import { Images, AppStyles } from "../../../theme";
import styles from "./TeamSecStyles";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../../constants";
import { Button } from "react-bootstrap";
import { OurTeamSection } from "../../../components";

export default function TeamSecView(props) {
  const { teamMembersData } = props;
  return (
    <section
      className={`py-5 ${css([
        // styles.marginBottom,
        styles.TeamSec,
        // AppStyles.pxy_12,
      ])}`}
    >
      <div className={`container`}>
        <div className={css(styles.teamContainer)}>
          <div className={`mt-5 ${css(styles.teamHead)}`}>Meet The Team</div>

          <div className={css(styles.cardContent)}>
            Healthcity’s core team and its associates include qualified
            psychologists, therapists, nurses, doctors and other professionals,
            as well as, former service users. They have relevant training,
            skills, and experiences culturally and professionally.Below just
            some of our team members. Behind the experienced directors and
            managers below stand a number of awesome, dedicated non-executive
            directors and advisors, clinicians, University researchers and
            client support staff who make us all look good and achieving.
          </div>
        </div>
        <div className={css(styles.teamSectionView)}>
          <OurTeamSection isShortView={true} />
        </div>
        {teamMembersData.length > 3 && (
          <div className={css(styles.teamBtnCont)}>
            <NavLink to={ROUTES.TEAM}>
              <Button className={css(styles.teamBtn)}>See All Team</Button>
            </NavLink>
          </div>
        )}
      </div>
    </section>
  );
}
