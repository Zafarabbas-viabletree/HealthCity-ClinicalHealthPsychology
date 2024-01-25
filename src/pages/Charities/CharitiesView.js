// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./CharitiesStyles";
import { AppStyles } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Helmet } from "react-helmet";

export default function CharitiesView(props) {
  return (
    <div>
      <Helmet>
        <title>Charities | Clinical Or Health Psychology | Healthcity</title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Charities & Community" />
      <div className={`container my-5`}>
        <p className={`mb-3 ${css([AppStyles.pera18, AppStyles.weight7])}`}>
          As a Healthcare Social Enterprise, we take our corporate community
          social responsibility very seriously and at heart. We put some of our
          profits and resources back to help people and communities. We are not
          like some private health care providers who are only focused on
          providing care service and profit making.
        </p>
        <h2
          style={{
            paddingLeft: 16,
          }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          (a) <span style={{ fontWeight: 700 }}> Gratis Christi Trust.</span>
        </h2>

        <p className={`mb-3 ${css(AppStyles.pera18)}`}>
          This is the UK registered charity that is a partner of Healthcity.
        </p>
        <ul
          style={{ listStyle: "disc", paddingLeft: 16 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li className={`mb-3`}>
            It funds complimentary or discounted Counselling and therapy service
            for people who can’t pay full fees. To benefit from this offer, you
            have to be introduced or recommended to Healthcity. (Terms and
            Conditions apply).
          </li>
          <li className={`mb-3`}>
            It offers financial and other resource assistance on the need basis
            to people, especially ex-clients of Healthcity.
          </li>
          <li className={`mb-3`}>
            People who have completed an episode of care at Healthcity or are
            waiting for authorization or are delayed for authorization for extra
            sessions may also be offered at least one complimentary follow-up
            Counselling or therapy session (Terms and Conditions apply).
          </li>
        </ul>
        <p className={`mb-3 ${css(AppStyles.pera18)}`}>
          <NavLink to={ROUTES.CONTACT}>Contact us </NavLink> for details.
        </p>
        <h2
          style={{
            paddingLeft: 16,
          }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          (b){" "}
          <span style={{ fontWeight: 700 }}>
            {" "}
            Other Charities and Community Projects.
          </span>
        </h2>
        <p className={`mb-3 ${css(AppStyles.pera18)}`}>
          We work closely with and support activities of local health, as well
          as, community professionals and groups by donating resources or
          offering our expertise in specific areas of community needs.
        </p>
        <p className={`mb-3 ${css(AppStyles.pera18)}`}>
          <NavLink to={ROUTES.CONTACT}>Contact us </NavLink> for details.
        </p>
      </div>
      <WebFooter />
    </div>
  );
}
