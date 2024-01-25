// @flow
import React from "react";
import { css } from "aphrodite";
import _ from "lodash";
import moment from "moment";
import DatePicker from "react-datepicker";
import { NavLink } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import RadioSection from "./RadioSection";
import styles from "./BookingFormStyles";
import { AppStyles, Colors, Images } from "../../theme";
import { WebHeader, WebFooter, Button, StripePayment } from "../../components";
import {
  APPOINTMENT_SERVICES_PRICING,
  BANK_PAYMENT,
  CERT_ATTENDENCE_SLUG,
  FACE_2_FACE_SLUG,
  INSURANCE_PAYMENT,
  LIST_OF_SERVICES,
  NO_OPTION_SELECTED,
  ORGANIZATION_PAYMENT,
  PAGE23_REPORT_SLUG,
  PAGE46_REPORT_SLUG,
  PAYMENT_METHOD,
  REMOTE_SLUG,
  STRIPE_PAYMENT,
} from "./BookingFormController";
import {
  DATE_TIME_FORMAT1,
  HEADER_HEIGHT,
  ROUTES,
  strings,
} from "../../constants";
import Util from "../../services/Util";
import ContactHeroSec from "./ContactHeroSec";
import { getServiceImage } from "../../helpers/dataHelper";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class BookingFormView extends React.PureComponent {
  componentDidMount() {
    this.hashLinkScroll();
  }

  hashLinkScroll = function () {
    const { hash } = window.location;

    if (hash !== "") {
      const milliseconds = 0;

      setTimeout(function () {
        // eslint-disable-line prefer-arrow-callback
        const id = hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          // element.scrollIntoView();
          window.scrollTo({
            top: element.offsetTop - (HEADER_HEIGHT + 20),
            behavior: "smooth",
          });
        }
      }, milliseconds);
    }
  };

  render() {
    const {
      selectedService,
      bookingData,
      onServiceChange,
      onBaseServiceChange,
      selectedReportType,
      onReportTypeChange,
      onAttendenceCertChange,
      selectedAttendenceCert,
      selectedPaymentMethod,
      onPaymentMethodSelect,
      onNameChange,
      onEmailChange,
      onAddressChange,
      onPhoneChange,
      fullnameError,
      emailError,
      addressError,
      phoneError,
      dateTimeError,
      baseServiceError,
      paymentMethodError,
      onDateTimeChange,
      onSubmit,
      totalPrice,
      fullnameRef,
      emailRef,
      phoneRef,
      addressRef,
      dateTimeRef,
      bookingNumber,
      onPaymentSuccess,
      stripeRef,
      isLoading,
      onPaymentError,
      companyName,
      companyNameError,
      companyNameRef,
      onCompanyNameChange,
    } = this.props;
    const { fullname, email, phone, address, dateTime } = bookingData;
    const hasBaseServiceSelectionError = !_.isEmpty(baseServiceError);
    const bookingConfirmed = !_.isNull(bookingNumber);

    return (
      <>
        <Helmet>
          <title>
            Booking Form | Clinical Or Health Psychology | Healthcity
          </title>
          <meta name="description" content="Healthcity | Health is wealth" />
        </Helmet>
        <WebHeader />
        <ContactHeroSec />

        <div className={`container`}>
          {bookingConfirmed && (
            <div className={`my-5 ${css(AppStyles.textAlignCenter)}`}>
              <h2 className={`mt-5 ${css(styles.heading1)}`}>
                Appointment booking completed
              </h2>

              <h3 className={`mt-5 ${css(styles.heading2)}`}>
                Booking number: {bookingNumber}
              </h3>

              <p style={{ fontSize: 18 }}>
                Your appointment is received for
                {` ${Util.getFormattedDateTime(
                  dateTime,
                  DATE_TIME_FORMAT1
                )} (London Time)`}
              </p>

              <p className={`mt-2`} style={{ fontSize: 18 }}>
                we will contact you soon
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <NavLink to={ROUTES.HOME}>
                  <Button ripple={false} className={css([styles.backLink])}>
                    Back To Home
                  </Button>
                </NavLink>
              </div>
            </div>
          )}
          {!bookingConfirmed && (
            <div className={`mt-5 ${css(styles.formCont)}`}>
              <p className={css(styles.bookingDesc)}>
              Once referred or booked, your first appointment with us is an initial assessment/consultation. This will happen in confidence and safely with a professional for you to talk to and to explore your current issues that you require support with. The outcome of the initial assessment/ consultation, shall assist us to think with you the best way forward that includes matching you with and allocating you to the appropriate professional. If another service is suited for your needs, we will refer or signpost you to them.
              </p>
              {/* personal details */}
              <div className={css(styles.persDetailCont)}>
                <h2 className={css(styles.DetailsHead)}>Personal Details</h2>

                <div className={`form-row mt-3 mb-1`}>
                  <div className={`col-md-6 ${css(styles.formGroup)}`}>
                    <input
                      type="text"
                      className={`${css(styles.formControl)}`}
                      placeholder="Full Name"
                      value={fullname}
                      onChange={onNameChange}
                      ref={fullnameRef}
                    />
                    <span className={`${css(AppStyles.formError)}`}>
                      {fullnameError}
                    </span>
                  </div>
                  <div className={`col-md-6 ${css(styles.formGroup)}`}>
                    <input
                      type="email"
                      className={`${css(styles.formControl)}`}
                      placeholder="Email Address"
                      value={email}
                      onChange={onEmailChange}
                      ref={emailRef}
                    />
                    <span className={`${css(AppStyles.formError)}`}>
                      {emailError}
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
                      value={phone}
                      onChange={onPhoneChange}
                      defaultCountry="GB"
                      ref={phoneRef}
                    />
                    <span className={`${css(AppStyles.formError)}`}>
                      {phoneError}
                    </span>
                  </div>
                  <div className={`col-md-6 ${css(styles.formGroup)}`}>
                    <input
                      type="text"
                      className={`${css(styles.formControl)}`}
                      placeholder="Address"
                      value={address}
                      name="address"
                      onChange={onAddressChange}
                      ref={addressRef}
                    />
                    <span className={`${css(AppStyles.formError)}`}>
                      {addressError}
                    </span>
                  </div>
                </div>
              </div>
              {/* timeslot */}
              <div className={css(styles.timeDetailCont)}>
                <h2 className={css(styles.DetailsHead)}>
                  Preferable Time Slot{" "}
                </h2>
                <div className={`form-row mt-3 mb-1`}>
                  <div
                    className={`col-md-6 date-picker-style ${css(
                      styles.formGroup
                    )}`}
                  >
                    <DatePicker
                      className={`${css(styles.formControl)}`}
                      selected={dateTime}
                      onChange={onDateTimeChange}
                      showTimeSelect
                      placeholderText="Select Date / Time"
                      minDate={moment().add(1, "day").toDate()}
                      value={Util.getFormattedDateTime(
                        dateTime,
                        DATE_TIME_FORMAT1
                      )}
                      ref={dateTimeRef}
                    />
                    <p
                      className={css(
                        AppStyles.blackColor,
                        AppStyles.peraTwo,
                        AppStyles.mTop5,
                        AppStyles.mBottom10
                      )}
                    >
                      <span className={css(AppStyles.weight7)}>Note:</span> We
                      follow London time
                    </p>
                    <span className={`${css(AppStyles.formError)}`}>
                      {dateTimeError}
                    </span>
                  </div>
                </div>
              </div>
              {/* services */}
              <div className={css([styles.timeDetailCont])} id="fees">
                <h2 className={css(styles.DetailsHead)}>Services</h2>
                <div
                  className={`mt-3 mb-1 ${css([
                    styles.serviceBox,
                    hasBaseServiceSelectionError && styles.hasErrorBox,
                  ])}`}
                >
                  <h5 className={css(styles.boxInnerHead)}>
                    Book a 50 Minutes’ One to One Individual Session.
                  </h5>
                  <div className={`mb-4 ${css(styles.serviceInnerBox)}`}>
                    {LIST_OF_SERVICES.map((slug, index) => {
                      const isSelected = slug === selectedService;

                      return (
                        <div
                          key={index}
                          className={css([
                            isSelected
                              ? styles.selectedService
                              : styles.unSelectedService,
                          ])}
                          onClick={() => onServiceChange(slug)}
                        >
                          <FontAwesomeIcon
                            className={css([
                              isSelected
                                ? styles.selectedServiceImage
                                : styles.serviceImage,
                            ])}
                            icon={getServiceImage(slug)}
                            style={{ fontSize: 33 }}
                          />
                          <h6 className={css(styles.serviceText)}>
                            {" "}
                            {APPOINTMENT_SERVICES_PRICING[slug].name}
                          </h6>
                        </div>
                      );
                    })}
                  </div>

                  <div>
                    <RadioSection
                      onChange={onBaseServiceChange}
                      listData={[
                        {
                          value: FACE_2_FACE_SLUG,
                          text:
                            APPOINTMENT_SERVICES_PRICING[selectedService]
                              .options[FACE_2_FACE_SLUG].name,
                          price:
                            APPOINTMENT_SERVICES_PRICING[selectedService]
                              .options[FACE_2_FACE_SLUG].price,
                        },
                        {
                          value: REMOTE_SLUG,
                          text:
                            APPOINTMENT_SERVICES_PRICING[selectedService]
                              .options[REMOTE_SLUG].name,
                          price:
                            APPOINTMENT_SERVICES_PRICING[selectedService]
                              .options[REMOTE_SLUG].price,
                        },
                      ]}
                    />
                  </div>

                  {hasBaseServiceSelectionError && (
                    <span className={`${css(AppStyles.formError)}`}>
                      {baseServiceError}
                    </span>
                  )}
                </div>

                <div className={css(styles.timeDetailCont)}>
                  <div className={`mt-3 mb-1 ${css(styles.serviceBox)}`}>
                    <div className={css(styles.headingWrapper)}>
                      <h5 className={css(styles.boxInnerHead)}>
                        Written Reports
                      </h5>
                      <p>Optional</p>
                    </div>
                    <div>
                      <RadioSection
                        onChange={onReportTypeChange}
                        listData={[
                          {
                            value: PAGE23_REPORT_SLUG,
                            text:
                              APPOINTMENT_SERVICES_PRICING[selectedService]
                                .options[PAGE23_REPORT_SLUG].name,
                            price:
                              APPOINTMENT_SERVICES_PRICING[selectedService]
                                .options[PAGE23_REPORT_SLUG].price,
                          },
                          {
                            value: PAGE46_REPORT_SLUG,
                            text:
                              APPOINTMENT_SERVICES_PRICING[selectedService]
                                .options[PAGE46_REPORT_SLUG].name,
                            price:
                              APPOINTMENT_SERVICES_PRICING[selectedService]
                                .options[PAGE46_REPORT_SLUG].price,
                          },
                          {
                            value: NO_OPTION_SELECTED,
                            text: "No thanks",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>

                <div className={css(styles.timeDetailCont)}>
                  <div className={`mt-3 mb-1 ${css(styles.serviceBox)}`}>
                    <div className={css(styles.headingWrapper)}>
                      <h5 className={css(styles.boxInnerHead)}>
                        Letter to Confirm Treatment Attended
                      </h5>
                      <p>Optional</p>
                    </div>
                    <div>
                      <RadioSection
                        onChange={onAttendenceCertChange}
                        listData={[
                          {
                            value: CERT_ATTENDENCE_SLUG,
                            text:
                              APPOINTMENT_SERVICES_PRICING[selectedService]
                                .options[CERT_ATTENDENCE_SLUG].name,
                            price:
                              APPOINTMENT_SERVICES_PRICING[selectedService]
                                .options[CERT_ATTENDENCE_SLUG].price,
                          },

                          {
                            value: NO_OPTION_SELECTED,
                            text: "No thanks",
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className={css(styles.persDetailCont)}>
                <div className={` mb-4 ${css(styles.headingWrapper)}`}>
                  <h2 className={css(styles.DetailsHead)}>Payment</h2>
                  <p className={css(styles.DetailsHead)}>
                    Total: <span>£ {totalPrice}</span>
                  </p>
                </div>

                {PAYMENT_METHOD.map((item, index) => {
                  const isSelected = item.type === selectedPaymentMethod;
                  return (
                    <div
                      className={css(
                        isSelected
                          ? styles.selectedPayment
                          : styles.unselectedPayment
                      )}
                      onClick={() => {
                        onPaymentMethodSelect(item.type);
                      }}
                    >
                      <div style={{ fontWeight: 600 }}>{item.title}</div>

                      {isSelected && item.type === STRIPE_PAYMENT && (
                        <StripePayment
                          customerName={fullname}
                          amount={totalPrice}
                          onPaymentSuccess={onPaymentSuccess}
                          onPaymentError={onPaymentError}
                          ref={stripeRef}
                        />
                      )}

                      {isSelected && item.type === BANK_PAYMENT && (
                        <div style={{ fontSize: 15 }}>
                          <p>Bank : {strings.BANK_DETAILS.name}</p>
                          <p>Sort Code : {strings.BANK_DETAILS.sortCode}</p>
                          <p>
                            Account Number :{" "}
                            {strings.BANK_DETAILS.accountNumber}
                          </p>
                          <p>
                            Account Name : {strings.BANK_DETAILS.accountName}
                          </p>
                          <p>
                            Payment Reference :{" "}
                            {strings.BANK_DETAILS.paymentReference}
                          </p>
                          <p>IBAN : {strings.BANK_DETAILS.IBAN}</p>
                          <p>SWIFT : {strings.BANK_DETAILS.SWIFT}</p>
                        </div>
                      )}

                      {isSelected && item.type === INSURANCE_PAYMENT && (
                        <div>
                          <p>Please provide name of the insurance comapny</p>
                          <input
                            className={`mt-2 ${css(styles.formControl)}`}
                            placeholder="Insurance company"
                            onChange={onCompanyNameChange}
                            value={companyName}
                            // ref={companyNameRef}
                          />
                          <span className={`${css(AppStyles.formError)}`}>
                            {companyNameError}
                          </span>

                          <p className={`mt-1 ${css(styles.note)}`}>
                            <span className={css(AppStyles.weight7)}>
                              Note:
                            </span>{" "}
                            Healthcity works with almost all the health care
                            insurers
                          </p>
                        </div>
                      )}

                      {isSelected && item.type === ORGANIZATION_PAYMENT && (
                        <div>
                          <p>Please provide name of the organization</p>
                          <input
                            className={`mt-2 ${css(styles.formControl)}`}
                            placeholder="Organization name"
                            onChange={onCompanyNameChange}
                            value={companyName}
                            // ref={companyNameRef}
                          />
                          <span className={`${css(AppStyles.formError)}`}>
                            {companyNameError}
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })}

                <span className={`${css(AppStyles.formError)}`}>
                  {paymentMethodError}
                </span>
                <br />
                <div className={css(styles.formSubmitBtnContainer)}>
                  <Button
                    title="SEND"
                    isLoading={isLoading}
                    className={css(styles.sendBtn)}
                    onClick={onSubmit}
                    ripple={false}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <WebFooter />
      </>
    );
  }
}
