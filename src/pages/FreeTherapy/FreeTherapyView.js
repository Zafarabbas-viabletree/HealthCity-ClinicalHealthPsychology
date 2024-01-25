// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./FreeTherapyStyles";
import { AppStyles, Images } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function FreeTherapyView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Free, Low Cost Or Discounted Therapy Service | Cognitive behavior
          therapy | Healthcity
        </title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Free, Low Cost or Discounted Therapy Service" />
      <div className={`container my-5`}>
        <h2
          className={`mb-3 ${css([
            AppStyles.headingOne,
            AppStyles.weight7,
            AppStyles.textAlignCenter,
          ])}`}
        >
          FREE, LOW COST OR DISCOUNTED THERAPY SERVICE:-
        </h2>
        <p
          className={`mb-5 ${css([
            AppStyles.pera18,
            AppStyles.weight7,
            AppStyles.textAlignCenter,
          ])}`}
        >
          £xxx AS ADVERTISED BY THE THERAPIST
        </p>

        <h4
          className={`mb-3 ${css([AppStyles.headingThree, AppStyles.weight7])}`}
        >
          FEATURES:
        </h4>
        <ul
          style={{ listStyle: "disc", paddingLeft: 36 }}
          className={`mb-3 ${css(AppStyles.pera18)}`}
        >
          <li className={`mb-3`}>
            This service is provided through the portal or directory of Free,
            Low Cost or Discount Wellbeing Services Providers at twinbrain.org.
            After you have finished reading the information on this page, click
            the link here to be re-directed to{" "}
            <a href="https://www.twinbrain.org/" target="_blank">
              {" "}
              www.twinbrain.org{" "}
            </a>{" "}
            website.
          </li>
          <li className={`mb-3`}>
            The portal or directory will contain only providers who have agreed
            to offer Free, Low Cost or Discount Wellbeing Services.
          </li>
          <li className={`mb-3`}>
            The portal or directory will help you to search for Free, Low Cost
            or Discount Wellbeing Services Providers globally.
          </li>
          <li className={`mb-3`}>
            When you search, you will see results shown by distance from you,
            starting from your nearby local wellbeing services providers to
            globally providers.
          </li>
          <li className={`mb-3`}>
            The portal or directory will have qualified counselling, cognitive
            behavioural therapists, psychologists, psychotherapists, medical
            doctors, coaching, fitness gyms, medical doctors who provide talking
            treatments, nutritionists and many more.
          </li>
        </ul>
        <p className={`mb-3`} style={{ lineHeight: 1.4 }}>
          <span className={css(AppStyles.weight7)}>Note: </span> At the moment
          the TwinBrain App is awaiting to be released to the public and then we
          shall recruit providers who agreed to offer Free, Low Cost or Discount
          Wellbeing Services. Come back to check on this page for the link to
          the App. Our sincere apologies for any inconvenience.
        </p>

        <LazyLoadImage
          src={Images.free_discounted}
          width="100%"
          alt="Free Therapy"
          effect="blur"
        />
      </div>
      <WebFooter />
    </div>
  );
}
