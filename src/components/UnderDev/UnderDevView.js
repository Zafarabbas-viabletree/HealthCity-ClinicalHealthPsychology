// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./UnderDevStyles";
import { AppStyles } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "..";

export default function UnderDevView(props) {
  const {
    email,
    name,
    nameError,
    emailError,
    onSubmit,
    isLoading,
    successMsg,
    setValue,
    successStatus,
  } = props;
  return (
    <section className={` ${css([styles.heroSection, AppStyles.pxy_12])}`}>
      <div className={`container ${css(styles.HeightVhs)}`}>
        <div className={`row mt-5 mb-3 `}>
          <div className={`col-lg-12 col-md-12 col-sm-12 mt-3`}>
            <h2
              className={`mt-5 mb-3 ${css([
                AppStyles.headingOne,
                AppStyles.blackColor,
                styles.lineHeight12,
              ])}`}
            >
              Coming Soon - Get notified by email
            </h2>
          </div>
        </div>
        <div className={`${css(styles.mainCont)}`}>
          <form>
            <div className={`form-row mb-1`}>
              <div className={`col-md-6 ${css(styles.formGroup)}`}>
                <input
                  type="text"
                  className={`${css(styles.formControl)}`}
                  name="name"
                  value={name}
                  onChange={(event) => {
                    setValue({
                      name: event.target.value,
                      nameError: "",
                    });
                  }}
                  placeholder="Full Name"
                />
                <span className={`${css(AppStyles.formError)}`}>
                  {nameError}
                </span>
              </div>
              <div className={`col-md-6 ${css(styles.formGroup)}`}>
                <input
                  type="email"
                  className={`${css(styles.formControl)}`}
                  name="email"
                  value={email}
                  onChange={(event) => {
                    setValue({
                      email: event.target.value,
                      emailError: "",
                    });
                  }}
                  placeholder="Email address"
                />
                <span className={`${css(AppStyles.formError)}`}>
                  {emailError}
                </span>
              </div>
            </div>
          </form>

          <div className={css(styles.formSubmitBtnContainer)}>
            <Button
              title="Notify me"
              isLoading={isLoading}
              className={css(styles.sendBtn)}
              onClick={() => onSubmit()}
              ripple={false}
            />
          </div>

          {successStatus && (
            <p className={`alert alert-success mt-3`}>{successMsg}</p>
          )}
        </div>
      </div>
    </section>
  );
}
