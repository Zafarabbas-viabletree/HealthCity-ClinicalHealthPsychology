// @flow
import React from "react";
import _ from "lodash";
import { isValidPhoneNumber } from "react-phone-number-input";
import { connect } from "react-redux";
import moment from "moment";
import BookingFormView from "./BookingFormView";
import { bookAppointmentRequest } from "../../actions/GeneralActions";
import { strings, WEBSITE_SLUG, DATE_TIME_FORMAT2 } from "../../constants";
import Util from "../../services/Util";

export const TRAINEE_SERVICES_SLUG = "trainee-psychologist";
export const QUALIFIED_SERVICES_SLUG = "qualified-psychologist";
export const PREMIUM_SERVICES_SLUG = "premium-service-therapist";
export const FACE_2_FACE_SLUG = "ftf-therapy";
export const REMOTE_SLUG = "remote-therapy";
export const PAGE23_REPORT_SLUG = "23-pg-rp";
export const PAGE46_REPORT_SLUG = "46-pg-rp";
export const CERT_ATTENDENCE_SLUG = "cert-attendence";
export const NO_OPTION_SELECTED = "no-thanks-selected";
export const STRIPE_PAYMENT = "stripe";
export const BANK_PAYMENT = "bank";
export const INSURANCE_PAYMENT = "insurance";
export const ORGANIZATION_PAYMENT = "organization";

export const LIST_OF_SERVICES = [
  TRAINEE_SERVICES_SLUG,
  QUALIFIED_SERVICES_SLUG,
  PREMIUM_SERVICES_SLUG,
];

export const APPOINTMENT_SERVICES_PRICING = {
  [TRAINEE_SERVICES_SLUG]: {
    name: "Trainee Psychologist",
    options: {
      [FACE_2_FACE_SLUG]: { name: "Face to Face", price: 40 },
      [REMOTE_SLUG]: {
        name: "Remote Audio/Video Call",
        price: 35,
      },
      [PAGE23_REPORT_SLUG]: {
        name: "2 to 3 Pages Report",
        price: 40,
      },
      [PAGE46_REPORT_SLUG]: {
        name: "4 to 6 Pages Report",
        price: 70,
      },
      [CERT_ATTENDENCE_SLUG]: {
        name: "Letter to Confirm Treatment  Attended",
        price: 15,
      },
    },
  },

  [QUALIFIED_SERVICES_SLUG]: {
    name: "Qualified Psychologist",
    options: {
      [FACE_2_FACE_SLUG]: { name: "Face to Face", price: 100 },
      [REMOTE_SLUG]: {
        name: "Remote Audio/Video Call",
        price: 90,
      },
      [PAGE23_REPORT_SLUG]: {
        name: "2 to 3 Pages Report",
        price: 100,
      },
      [PAGE46_REPORT_SLUG]: {
        name: "4 to 6 Pages Report",
        price: 190,
      },
      [CERT_ATTENDENCE_SLUG]: {
        name: "Letter to Confirm Treatment  Attended",
        price: 15,
      },
    },
  },

  [PREMIUM_SERVICES_SLUG]: {
    name: "Premium Service Therapist",
    options: {
      [FACE_2_FACE_SLUG]: { name: "Face to Face", price: 150 },
      [REMOTE_SLUG]: {
        name: "Remote Audio/Video Call",
        price: 130,
      },
      [PAGE23_REPORT_SLUG]: {
        name: "2 to 3 Pages Report",
        price: 150,
      },
      [PAGE46_REPORT_SLUG]: {
        name: "4 to 6 Pages Report",
        price: 290,
      },
      [CERT_ATTENDENCE_SLUG]: {
        name: "Letter to Confirm Treatment Attended",
        price: 15,
      },
    },
  },
};

export const PAYMENT_METHOD = [
  { type: STRIPE_PAYMENT, title: "Stripe Payment" },
  { type: BANK_PAYMENT, title: "Bank transfer" },
  { type: INSURANCE_PAYMENT, title: "My insurance firm will pay" },
  { type: ORGANIZATION_PAYMENT, title: "My organization will pay" },
];

class BookingFormController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      bookingData: {
        fullname: "",
        email: "",
        phone: "",
        address: "",
        dateTime: null, //moment().add(1, "day").toDate(),

        /* fullname: "Zain",
        email: "zainmusani@gmail.com",
        phone: "+923343621094",
        address: "hello",
        dateTime: null, /// moment().add(1, "day").toDate(), */
      },
      isLoading: false,
      selectedService: TRAINEE_SERVICES_SLUG,
      selectedBaseService: null,
      selectedReportType: null,
      selectedAttendenceCert: null,
      selectedPaymentMethod: null,
      companyName: "",
      fullnameError: "",
      emailError: "",
      phoneError: "",
      addressError: "",
      dateTimeError: "",
      baseServiceError: "",
      paymentMethodError: "",
      companyNameError: "",
      totalPrice: 0,
      // bookingNumber: "3GTXF9U261",
      bookingNumber: null,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onServiceChange = (slug) => {
    if (slug !== this.state.selectedService) {
      this.setState({ selectedService: slug }, this.setTotalPrice);
    }
  };

  onBaseServiceChange = (slug) => {
    if (slug !== this.state.selectedBaseService) {
      this.setState(
        { selectedBaseService: slug, baseServiceError: "" },
        this.setTotalPrice
      );
    }
  };

  onReportTypeChange = (slug) => {
    if (slug !== this.state.selectedReportType) {
      this.setState({ selectedReportType: slug }, this.setTotalPrice);
    }
  };

  onAttendenceCertChange = (slug) => {
    if (slug !== this.state.selectedAttendenceCert) {
      this.setState({ selectedAttendenceCert: slug }, this.setTotalPrice);
    }
  };

  validateData = () => {
    const {
      selectedBaseService,
      selectedPaymentMethod,
      bookingData,
      companyName,
    } = this.state;
    const { fullname, email, address, phone, dateTime } = bookingData;
    const errors = {};
    let isValid = true;
    if (_.isEmpty(fullname)) {
      errors.fullnameError = strings.NAME_IS_REQUIRED;
    } else if (!Util.isValidfullname(fullname)) {
      errors.fullnameError = strings.INVALID_FULLNAME_ERROR;
      isValid = false;
    }

    if (_.isEmpty(email)) {
      errors.emailError = strings.EMAIL_IS_REQUIRED;
      isValid = false;
    } else if (!Util.isEmailValid(email)) {
      errors.emailError = strings.INVALID_EMAIL;
      isValid = false;
    }

    if (_.isEmpty(phone)) {
      errors.phoneError = strings.PHONE_IS_REQUIRED;
      isValid = false;
    } else if (!isValidPhoneNumber(phone)) {
      errors.phoneError = strings.INVALID_PHONE_NUMBER;
      isValid = false;
    }

    if (!_.isEmpty(address) && !Util.spaceNotAllowed(address)) {
      isValid = false;
      errors.addressError = strings.INVALID_FIELD;
    }

    if (_.isNull(dateTime)) {
      errors.dateTimeError = strings.TIME_SLOT_IS_REQUIRED;
      isValid = false;
    }

    if (_.isEmpty(errors) && _.isNull(selectedBaseService)) {
      // showing this error when all above form error resolved
      errors.baseServiceError = strings.PLEASE_SELECT_SESSION_TYPE;
      window.scrollTo({
        top: 1000,
        left: 0,
        behavior: "smooth",
      });

      isValid = false;
    }

    if (_.isEmpty(errors) && _.isNull(selectedPaymentMethod)) {
      // showing this error when all above form error resolved
      errors.paymentMethodError = strings.PLEASE_SELECT_PAYMENT_TYPE;
      isValid = false;
    }

    if (!_.isEmpty(errors)) {
      // set all errors in state
      this.setState({ ...errors });
      if (errors.fullnameError) {
        this.fullnameRef.focus();
      } else if (errors.emailError) {
        this.emailRef.focus();
      } else if (errors.phoneError) {
        this.phoneRef.focus();
      } else if (errors.addressError) {
        this.addressRef.focus();
      } else if (errors.dateTimeError) {
        window.scrollTo({
          top: 800,
          left: 0,
          behavior: "smooth",
        });
      }
    }

    // handling company name error
    if (
      selectedPaymentMethod === INSURANCE_PAYMENT ||
      selectedPaymentMethod === ORGANIZATION_PAYMENT
    ) {
      if (_.isEmpty(companyName)) {
        errors.companyNameError = strings.COMPANY_IS_REQUIRED;
        isValid = false;
      } else if (!Util.isValidfullname(companyName)) {
        errors.companyNameError = strings.INVALID_FIELD;
        isValid = false;
      }
      this.setState({ ...errors });
    }

    return isValid;
  };

  getTotalAmount = () => {
    let amount = 0;

    const paymentBreakup = this.getPaymentBreakup();

    if (paymentBreakup.length) {
      paymentBreakup.forEach((element) => {
        amount = amount + element.price;
      });
    }

    return amount;
  };

  getPaymentBreakup = () => {
    const {
      selectedService,
      selectedBaseService,
      selectedReportType,
      selectedAttendenceCert,
    } = this.state;

    const paymentBreakup = [];
    if (selectedService && selectedBaseService) {
      // if no thanks is selected then there will be no price
      const dataSet =
        APPOINTMENT_SERVICES_PRICING[selectedService].options[
          selectedBaseService
        ];
      if (dataSet) paymentBreakup.push(dataSet);
    }

    if (selectedService && selectedReportType) {
      // if no thanks is selected then there will be no price
      const dataSet =
        APPOINTMENT_SERVICES_PRICING[selectedService].options[
          selectedReportType
        ];
      if (dataSet) paymentBreakup.push(dataSet);
    }

    if (selectedService && selectedAttendenceCert) {
      // if no thanks is selected then there will be no price
      const dataSet =
        APPOINTMENT_SERVICES_PRICING[selectedService].options[
          selectedAttendenceCert
        ];
      if (dataSet) paymentBreakup.push(dataSet);
    }
    return paymentBreakup;
  };

  setTotalPrice = () => {
    this.setState({
      totalPrice: this.getTotalAmount(),
    });
  };

  validateStripe = () => {
    const { selectedPaymentMethod } = this.state;

    if (selectedPaymentMethod === STRIPE_PAYMENT) {
      this.setState({ isLoading: true });
      this.stripeReference.onStripeSubmit();
    } else {
      return true;
    }
  };
  onSubmit = () => {
    const isValidData = this.validateData();
    const isValidStripe = isValidData ? this.validateStripe() : false; // validate stripe if form data is already valid

    if (isValidData && isValidStripe) {
      this.performBooking();
    }
  };

  onPaymentMethodSelect = (selectedMethod) => {
    if (selectedMethod !== this.state.selectedPaymentMethod) {
      this.setState({
        selectedPaymentMethod: selectedMethod,
        companyName: "",
        paymentMethodError: "",
      });
    }
  };

  performBooking = (paymentData) => {
    const {
      bookingData,
      selectedService,
      selectedPaymentMethod,
      companyName,
      totalPrice,
    } = this.state;

    const { fullname, email, phone, address, dateTime } = bookingData;
    const payload = {
      total_price: totalPrice,
      service_name: APPOINTMENT_SERVICES_PRICING[selectedService].name,
      // serviceSlug: selectedService,
      payment_breakup: this.getPaymentBreakup(),
      user: {
        fullname,
        email,
        phone,
        address,
      },
      booking_time: moment(dateTime)
        // .subtract(10, "hours")
        .format(DATE_TIME_FORMAT2),
      payment_type: selectedPaymentMethod,
      website: WEBSITE_SLUG,
      company_name: companyName,
    };

    if (paymentData) payload["payment_detail"] = paymentData;

    this.setState({
      isLoading: true,
    });

    this.props.bookAppointmentRequest(payload, (response) => {
      this.setState({
        isLoading: false,
      });
      if (response.status) {
        this.setState({
          bookingNumber: response.data.booking_number,
        });

        window.scrollTo({
          top: 400,
          left: 0,
          behavior: "smooth",
        });
      }
    });
  };

  onNameChange = (e) => {
    this.setState({
      bookingData: {
        ...this.state.bookingData,
        ...{ fullname: e.target.value },
      },
      fullnameError: "",
    });
  };

  onAddressChange = (e) => {
    this.setState({
      bookingData: {
        ...this.state.bookingData,
        ...{ address: e.target.value },
      },
      addressError: "",
    });
  };

  onPhoneChange = (phone) => {
    this.setState({
      bookingData: {
        ...this.state.bookingData,
        ...{ phone },
      },
      phoneError: "",
    });
  };

  onEmailChange = (e) => {
    this.setState({
      bookingData: {
        ...this.state.bookingData,
        ...{ email: e.target.value },
      },
      emailError: "",
    });
  };

  onDateTimeChange = (dateTime) => {
    this.setState({
      bookingData: {
        ...this.state.bookingData,
        ...{ dateTime },
      },
      dateTimeError: "",
    });
  };

  onCompanyNameChange = (e) => {
    this.setState({
      companyName: e.target.value,
      companyNameError: "",
    });
  };

  onPaymentSuccess = (paymentData) => {
    this.performBooking(paymentData);
  };

  onPaymentError = () => {
    this.setState({ isLoading: false });
  };

  render() {
    const {
      bookingData,
      companyName,
      selectedService,
      selectedBaseService,
      selectedReportType,
      selectedAttendenceCert,
      selectedPaymentMethod,
      fullnameError,
      emailError,
      addressError,
      phoneError,
      dateTimeError,
      baseServiceError,
      paymentMethodError,
      companyNameError,
      totalPrice,
      isLoading,
      bookingNumber,
    } = this.state;
    return (
      <BookingFormView
        {...this.props}
        bookingData={bookingData}
        companyName={companyName}
        selectedService={selectedService}
        onServiceChange={this.onServiceChange}
        selectedBaseService={selectedBaseService}
        onBaseServiceChange={this.onBaseServiceChange}
        selectedReportType={selectedReportType}
        onReportTypeChange={this.onReportTypeChange}
        selectedAttendenceCert={selectedAttendenceCert}
        onAttendenceCertChange={this.onAttendenceCertChange}
        selectedPaymentMethod={selectedPaymentMethod}
        onPaymentMethodSelect={this.onPaymentMethodSelect}
        onInsCompanyNameChange={this.onInsCompanyNameChange}
        onOrgCompanyNameChange={this.onOrgCompanyNameChange}
        onNameChange={this.onNameChange}
        onEmailChange={this.onEmailChange}
        onAddressChange={this.onAddressChange}
        onPhoneChange={this.onPhoneChange}
        onDateTimeChange={this.onDateTimeChange}
        onCompanyNameChange={this.onCompanyNameChange}
        onSubmit={this.onSubmit}
        fullnameError={fullnameError}
        companyNameError={companyNameError}
        emailError={emailError}
        addressError={addressError}
        phoneError={phoneError}
        dateTimeError={dateTimeError}
        baseServiceError={baseServiceError}
        paymentMethodError={paymentMethodError}
        isLoading={isLoading}
        totalPrice={totalPrice}
        fullnameRef={(node) => (this.fullnameRef = node)}
        companyNameRef={(node) => (this.companyNameRef = node)}
        emailRef={(node) => (this.emailRef = node)}
        phoneRef={(node) => (this.phoneRef = node)}
        addressRef={(node) => (this.addressRef = node)}
        dateTimeRef={(node) => (this.dateTimeRef = node)}
        bookingNumber={bookingNumber}
        onPaymentSuccess={this.onPaymentSuccess}
        onPaymentError={this.onPaymentError}
        stripeRef={(node) => {
          return (this.stripeReference = node);
        }}
      />
    );
  }
}

const mapStateToProps = () => ({});

const actions = { bookAppointmentRequest };

export default connect(mapStateToProps, actions)(BookingFormController);
