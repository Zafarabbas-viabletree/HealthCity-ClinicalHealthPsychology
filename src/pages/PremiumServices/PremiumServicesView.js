// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./PremiumServicesStyles";
import { AppStyles, Images } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Helmet } from "react-helmet";
import { Button } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function PremiumServicesView(props) {
  return (
    <div>
      <Helmet>
        <title>
          Premium Services | Clinical Or Health Psychology | Healthcity
        </title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="Premium Services" />
      <div className={`container my-5`}>
        <h2
          className={`mb-3 ${css([
            AppStyles.headingOne,
            AppStyles.weight7,
            AppStyles.textAlignCenter,
          ])}`}
        >
          Premium Service:-
        </h2>
        <p
          className={`mb-5 ${css([
            AppStyles.pera18,
            AppStyles.weight7,
            AppStyles.textAlignCenter,
          ])}`}
        >
          £150 per 50 minutes.
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
            This service is for anyone, who is able to and pays extra fee for
            their therapy.
          </li>
          <li className={`mb-3`}>
            The fees for the therapists giving this service are higher.
          </li>
          <li className={`mb-3`}>
            The therapist is either at a consultant level or a director level in
            Healthcity or outside Healthcity.
          </li>
          <li className={`mb-3`}>
            The therapist has provided therapy for at least 20 years.
          </li>
          <li className={`mb-3`}>
            If you want, you can have your first appointment the same day or
            within 3 days.
          </li>
        </ul>
        <h4
          className={`mb-3 ${css([AppStyles.headingThree, AppStyles.weight7])}`}
        >
          NOTE:
        </h4>
        <p className={`mb-3`} style={{ lineHeight: 1.4 }}>
          If you can not afford to pay for a Premium Service, it does not mean
          the therapy you receive from Healthcity is of a second or lower
          class. Every therapist is well trained to give you the best possible
          therapy to address the difficulty that brought you to Healthcity.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink to={ROUTES.BOOKING}>
            <Button className={css(styles.bookNowBtn)}>Book Now</Button>
          </NavLink>
        </div>

        <h4
          className={`my-3 ${css([AppStyles.headingThree, AppStyles.weight7])}`}
        >
          EXAMPLES OF SOME PREMIUM SERVICE THERAPISTS
        </h4>

        <h6
          className={`my-3 pt-3 ${css([AppStyles.weight7])}`}
          style={{ fontSize: 18 }}
        >
          Dr. Benaliligha Francis Selemo.
        </h6>
        <p className={`mb-3`} style={{ lineHeight: 1.4 }}>
          A male and Director of Healthcity. Clinical Psychologist, Chartered
          Psychologist, Accredited & Specialist Cognitive Behavioural
          Psychotherapist (CBT), Behavioural Couple Therapy Practitioner, Long
          Term Physical Health Conditions Practitioner, EX-National Health
          Service (NHS) Manager, Member of Chartered Management Institute,
          Associate Fellow British Psychological Society and Senior Associate of
          The Royal Society of Medicine. Has plus 25 years’ experience in
          assessing and treating clients overseas and UK.
        </p>

        <h6
          className={`my-3 pt-3 ${css([AppStyles.weight7])}`}
          style={{ fontSize: 18 }}
        >
          Daniel Mirea.
        </h6>
        <p className={`mb-3`} style={{ lineHeight: 1.4 }}>
          A Consultant Cognitive Behavioural (CBT) Psychotherapist, Senior
          Lecturer at a UK University & a Senior Clinical Consultant Partner at
          Healthcity. He has been working in mental health over 25 years. He
          has trained in all three waves of CBT, including Schema Therapy,
          Mindfulness, and DBT.
        </p>

        <h6
          className={`my-3 pt-3 ${css([AppStyles.weight7])}`}
          style={{ fontSize: 18 }}
        >
          Caroline Howard.
        </h6>
        <p className={`mb-3`} style={{ lineHeight: 1.4 }}>
          A female CBT Psychotherapist and a Specialist Partner in Healthcity.
          She is an accredited cognitive behavioral therapist, clinical
          supervisor, and trainer. She is a registered mental health nurse and
          has worked as a Community Psychiatric Nurse and as a Community Mental
          Health Specialist Lecturer. Caroline is a co-founder of the Chinese
          Mental Health Association, set up in 1992. Caroline also extends her
          therapy work to the Chinese Communities.
        </p>

        <h4 className={`mb-3 ${css([AppStyles.weight7])}`}>
          MORE PREMIUM THERAPISTS AVAILABLE IN Healthcity DIRECTORY OF PREMIUM
          THERAPISTS.
        </h4>
        <LazyLoadImage
          src={Images.premium_serv}
          width="100%"
          alt="Premium Service"
          effect="blur"
        />
      </div>
      <WebFooter />
    </div>
  );
}
