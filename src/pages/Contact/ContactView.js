// @flow
import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "aphrodite";
import styles from "./ContactStyles";
import {
  WebHeader,
  WebFooter,
  GoogleMap,
  ContactInfo,
  Button,
} from "../../components";
import { Images, AppStyles, Colors } from "../../theme";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUserClock } from "@fortawesome/free-solid-svg-icons";

//contactinfoboxcontainer
const infoBoxOne = () => {
  return (
    <div className={css(styles.contactInfoBox)}>
      <div>
        <FontAwesomeIcon
          style={{ fontSize: 41, color: Colors.background.primary }}
          icon={faUserClock}
        />
      </div>
      <h4 className={css(styles.contactInfoTitle)}>Operating Hours</h4>
      <p className={css(styles.contactInfoDesc)}>
        Services operate Monday to Saturday. Canary Wharf Reception Service
        opens to visitors 9 am to 5.30pm.
        <span style={{ marginTop: 10, display: "block" }}>
          Phone calls 8.30am to 9 pm.
        </span>
        <span style={{ marginTop: 10, display: "block" }}>
          Pre-booked services delivered 24 hours face to face, Skype, live chat,
          telephone, or Online.
        </span>
      </p>
    </div>
  );
};

//contactinfoboxcontainer
const infoBoxTwo = () => {
  return (
    <div className={css(styles.contactInfoBox)}>
      <div>
        <FontAwesomeIcon
          style={{ fontSize: 33, color: Colors.background.primary }}
          icon={faMapMarkerAlt}
        />
      </div>
      <h4 className={css(styles.contactInfoTitle)}>Office Location</h4>
      <p className={css(styles.contactInfoDesc)}>
        Healthcity, Davenport House,16 Pepper Street, Canary Wharf, London E14
        9RP, United Kingdom
        <span style={{ marginTop: 20, display: "block" }}>
          Tel No1:
          <a
            href="tel:03338003006"
            style={{ color: Colors.text.accent, textDecoration: "underline" }}
          >
            {" "}
            0333 800 3006{" "}
          </a>
        </span>
        <span style={{ marginTop: 5, display: "block" }}>
          Tel No2:{" "}
          <a
            href="tel:03337890012"
            style={{ color: Colors.text.accent, textDecoration: "underline" }}
          >
            {" "}
            0333 789 0012{" "}
          </a>
        </span>
      </p>
    </div>
  );
};

export default function TeamView(props) {
  const {
    fullname,
    email,
    fullnameRef,
    emailRef,
    addressRef,
    hearAboutRef,
    myMessageRef,
    subjectRef,
    phoneRef,
  } = props;

  return (
    <div>
      <Helmet>
        <title>Contact | Clinical Or Health Psychology | Healthcity</title>
        <meta name="description" content="Healthcity | Health is wealth" />
      </Helmet>
      <WebHeader />
      <section className={` ${css([styles.heroSection, AppStyles.pxy_12])}`}>
        <div className={`container ${css(styles.HeightVhs)}`}>
          <div className={`row mt-5 `}>
            <div className={`col-lg-6 col-md-12 col-sm-12 mt-3`}>
              <h2
                className={`${css([
                  AppStyles.headingOne,
                  AppStyles.blackColor,
                  styles.contactHeading,
                ])}`}
              >
                Contact us
              </h2>
              <p className={css(styles.contactDesc)}>
                Feel free to fill out the form below to ask any questions about
                Healthcity or our services and products and we will get back
                to you ASAP. We will endeavor to signpost you to a suitable
                provider should we not have the answers to your query.
              </p>

              {/* //form */}
              <div className={`mt-4`}>
                <form>
                  <div className={`form-row mb-1`}>
                    <div className={`col-md-6 ${css(styles.formGroup)}`}>
                      <input
                        type="text"
                        className={`${css(styles.formControl)}`}
                        name="fullname"
                        value={fullname}
                        onChange={(event) => {
                          props.setValue({
                            fullname: event.target.value,
                            fullnameError: "",
                          });
                        }}
                        placeholder="Full Name"
                        ref={fullnameRef}
                      />
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.fullnameError}
                      </span>
                    </div>
                    <div className={`col-md-6 ${css(styles.formGroup)}`}>
                      <input
                        type="email"
                        className={`${css(styles.formControl)}`}
                        name="email"
                        value={email}
                        onChange={(event) => {
                          props.setValue({
                            email: event.target.value,
                            emailError: "",
                          });
                        }}
                        placeholder="Email Address"
                        ref={emailRef}
                      />
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.emailError}
                      </span>
                    </div>
                  </div>
                  <div className={`form-row mb-1`}>
                    <div className={`col-md-6 ${css(styles.formGroup)}`}>
                      <PhoneInput
                        className={`phone-input-style ${css(
                          styles.phoneFormControl
                        )}`}
                        placeholder="Phone Number"
                        value={props.phoneNumber}
                        onChange={(contact) => {
                          props.setValue({
                            phoneNumber: contact,
                            phoneNumberError: "",
                          });
                        }}
                        defaultCountry="GB"
                        ref={phoneRef}
                      />

                      <span className={`${css(AppStyles.formError)}`}>
                        {props.phoneNumberError}
                      </span>
                    </div>

                    <div className={`col-md-6 ${css(styles.formGroup)}`}>
                      <input
                        type="text"
                        className={`${css(styles.formControl)}`}
                        name="address"
                        value={props.address}
                        onChange={(event) => {
                          props.setValue({
                            address: event.target.value,
                          });
                        }}
                        placeholder="Area You Live In?"
                        ref={addressRef}
                      />
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.addressError}
                      </span>
                    </div>
                  </div>

                  <div className={`form-row mb-1`}>
                    <div className={`col-md-6 ${css(styles.formGroup)}`}>
                      <input
                        type="text"
                        className={`${css(styles.formControl)}`}
                        name="hearAbout"
                        value={props.hearAbout}
                        onChange={(event) => {
                          props.setValue({
                            hearAbout: event.target.value,
                          });
                        }}
                        placeholder="How Did You Hear About Us?"
                        ref={hearAboutRef}
                      />
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.hearAboutError}
                      </span>
                    </div>
                    <div className={`col-md-6 ${css(styles.formGroup)}`}>
                      <input
                        type="text"
                        className={`${css(styles.formControl)}`}
                        name="subject"
                        value={props.subject}
                        onChange={(event) => {
                          props.setValue({
                            subject: event.target.value,
                            subjectError: "",
                          });
                        }}
                        placeholder="Subject"
                        ref={subjectRef}
                      />
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.subjectError}
                      </span>
                    </div>
                  </div>

                  <div className={`form-row align-items-center mb-3`}>
                    <div className={`form-group col-md-12`}>
                      <textarea
                        placeholder="Your Message Here"
                        className={`${css(styles.formControlTextArea)}`}
                        name="myMessage"
                        value={props.myMessage}
                        onChange={(event) => {
                          props.setValue({
                            myMessage: event.target.value,
                            myMessageError: "",
                          });
                        }}
                        ref={myMessageRef}
                        /* onKeyDown={(e) => {
                          if (e.key === "Enter") props.onSubmit();
                        }} */
                      ></textarea>
                      <span className={`${css(AppStyles.formError)}`}>
                        {props.myMessageError}
                      </span>
                    </div>
                  </div>
                </form>
                <div className={css(styles.formSubmitBtnContainer)}>
                  <Button
                    title="SEND"
                    isLoading={props.isLoading}
                    className={css(styles.sendBtn)}
                    onClick={() => props.onSubmit()}
                    ripple={false}
                  />
                </div>
                {props.successStatus && (
                  <p className={`alert alert-success mt-3`}>
                    {props.successMsg}
                  </p>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <GoogleMap center={{ lat: 51.488491, lng: -0.01649 }} zoom={15} />
            </div>
          </div>

          <div className={`mb-5 ${css(styles.containerMargin)}`}>
            <div className={css(styles.boxCont)}>
              {infoBoxOne()}
              {infoBoxTwo()}
            </div>
          </div>
        </div>
      </section>
      <WebFooter />
    </div>
  );
}
