// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./AboutUsStyles";
import { AppStyles, Images } from "../../theme";
import { WebHeader, WebFooter, ContentPageHeroSec } from "../../components";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Helmet } from "react-helmet";

export default function AboutUsView(props) {
  return (
    <div>
      <Helmet>
        <title>About Us | Clinical Or Health Psychology | Healthcity</title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <ContentPageHeroSec title="About Us" />
      <div className={`container my-5`}>
        <div className={`row my-5`}>
          <div className={`col-lg-6 col-md-12 col-sm-12`}>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Healthcity is a UK based healthcare social enterprise in London,
              supporting family’s psychological, physical, financial, legal, and
              housing well-being. It was founded in 2007.
            </p>
            <ul
              style={{ listStyle: "disc", paddingLeft: 16 }}
              className={`mb-3 ${css(AppStyles.pera18)}`}
            >
              <li className={`mb-3`}>
                We offer Counseling, Therapy and Well-being Associated services
                globally.
              </li>
              <li className={`mb-3`}>
                The full fee is paid by those who can afford and people who
                can’t pay full fees we offer complimentary or discounted
                services.
              </li>
              <li className={`mb-3`}>
                We put some of our profits and resources back to help people and
                communities.
              </li>
              <li className={`mb-3`}>
                We are not like some private health care providers who are only
                focused on providing care service and profit making.
                <NavLink to={ROUTES.CHARITIES}> Read more</NavLink>
              </li>
            </ul>
          </div>
          <div
            className={`col-lg-6 col-md-12, col-sm-12 ${css(
              styles.aboutImgCont
            )}`}
          >
            <img
              src={Images.about_img}
              alt="Healthcity"
              width="100%"
              className={css(styles.aboutImg)}
            />
          </div>
        </div>

        <div className={`row my-3 py-3`}>
          <div className={`col-lg-12 col-md-12, col-sm-12`}>
            <h1
              style={{ textTransform: "uppercase" }}
              className={`my-2 mb-2 ${css([
                AppStyles.headingOne,
                AppStyles.textAlignCenter,
              ])}`}
            >
              Customer Satisfaction, Confidentiality and Quality Control
            </h1>
            <h6
              className={`my-3 ${css(AppStyles.headingT22, AppStyles.weight7)}`}
            >
              Your Reviews and Feedback:
            </h6>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Have a look at what other people have said about our services. We
              take your feedback serious and shall celebrate the good ones and
              shall act to improve on the areas of a gap you identified. We
              invite you to give us your views on{" "}
              <a href="https://www.trustpilot.com/" target="_blank">
                TrustPilot
              </a>
              ,{" "}
              <a href="https://www.careopinion.org.uk/" target="_blank">
                care opinion{" "}
              </a>
              , or{" "}
              <a
                href="https://www.facebook.com/HealthCityandTwinBrain"
                target="_blank"
              >
                {" "}
                Facebook
              </a>
              .
            </p>

            <h6
              className={`mb-3 ${css(AppStyles.headingT22, AppStyles.weight7)}`}
            >
              If you are not satisfied:
            </h6>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              If you are not happy with or if things did not go right with your
              first Counselling or therapy session, we are here to offer you a
              complimentary session at no extra fee. See{" "}
              <NavLink to={ROUTES.TERMS_AND_CONDITIONS}>
                {" "}
                Our Terms and Conditions.
              </NavLink>
            </p>

            <h6
              className={`mb-3 ${css(AppStyles.headingT22, AppStyles.weight7)}`}
            >
              We treat your personal information with care:
            </h6>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              We abide by the UK and international requirements to treat your
              personal information in confidence. Enaikidigha Trade Ltd, trading
              as Healthcity, is registered with the UK{" "}
              <a href="https://ico.org.uk/" target="_blank">
                Information Commissioner’s Office
              </a>{" "}
              (No. ZA272034).
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Professional Registration, Accreditation, and Regulatory Agencies:
            </p>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Each practitioner in Healthcity upholds the ethical standards of
              quality care, clients’ safety and confidentiality, and client
              safety, as required by the professional agency they belong. These
              agencies include the following that you can click for more
              details:
            </p>

            <div className={css(styles.partnerCont)}>
              <img
                src={Images.partnerOne}
                className={css(styles.partnerImage)}
              />
              <img
                src={Images.partnerTwo}
                className={css(styles.partnerImage)}
              />
              <img
                src={Images.partnerThree}
                className={css(styles.partnerImage)}
              />
              <img
                src={Images.partnerFour}
                className={css(styles.partnerImage)}
              />
              <img
                src={Images.partnerFive}
                className={css(styles.partnerImage)}
              />
              <img
                src={Images.partnerSix}
                className={css(styles.partnerImage)}
              />
              <img
                src={Images.partnerSeven}
                className={css(styles.partnerImage)}
              />
              <img
                src={Images.partnerEight}
                className={css(styles.partnerImage)}
              />
            </div>
          </div>
        </div>

        <div id="privacy-policy" className={`row my-3 py-3`}>
          <div className={`col-lg-12 col-md-12, col-sm-12`}>
            <h1
              style={{ textTransform: "uppercase" }}
              className={`my-2 mb-2 ${css([
                AppStyles.headingOne,
                AppStyles.textAlignCenter,
              ])}`}
            >
              Privacy - How do we use your information?
            </h1>
            <p className={`mb-3 ${css(AppStyles.pera18)}`}>
              Your privacy is important and we take it seriously. Your personal
              information will only be used to administer your subscription (if
              any) and your website account (if any) and to offer the services
              and products you asked from us, example in relationship to your
              request for treatments, self-help resources, training etc.
            </p>
          </div>
        </div>
      </div>
      <WebFooter />
    </div>
  );
}
