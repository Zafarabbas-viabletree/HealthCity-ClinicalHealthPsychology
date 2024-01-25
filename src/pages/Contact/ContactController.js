// @flow
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import ContactView from "./ContactView";
import { getInTouchRequest } from "../../actions/GeneralActions";
import Util from "../../services/Util";
import { strings, WEBSITE_SLUG } from "../../constants";
import { isValidPhoneNumber } from "react-phone-number-input";

class ContactController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    fullname: "",
    fullnameError: "",
    phoneNumber: "",
    phoneNumberError: "",
    email: "",
    emailError: "",
    address: "",
    addressError: "",
    hearAbout: "",
    hearAboutError: "",
    myMessage: "",
    myMessageError: "",
    isLoading: false,
    successStatus: false,
    successMsg: "",
    subject: "",
    subjectError: "",
  };

  flushAlert = () => {
    this.setState((prevState, props) => ({
      successStatus: !prevState,
    }));
  };

  validateForm = () => {
    let isError = false;
    const errors = {
      fullnameError: "",
      phoneNumberError: "",
      emailError: "",
      addressError: "",
      hearAboutError: "",
      myMessageError: "",
      subjectError: "",
    };

    const {
      fullname,
      email,
      subject,
      myMessage,
      phoneNumber,
      address,
      hearAbout,
    } = this.state;

    // required + invalid regex check
    if (_.isEmpty(fullname)) {
      isError = true;
      errors.fullnameError = strings.IS_REQUIRED_ERROR;
    } else if (!Util.isValidfullname(fullname)) {
      isError = true;
      errors.fullnameError = strings.INVALID_FULLNAME_ERROR;
    }

    if (_.isEmpty(email)) {
      isError = true;
      errors.emailError = strings.IS_REQUIRED_ERROR;
    } else if (!Util.isEmailValid(email)) {
      isError = true;
      errors.emailError = strings.INVALID_EMAIL_ERROR;
    }

    if (_.isEmpty(subject)) {
      isError = true;
      errors.subjectError = strings.IS_REQUIRED_ERROR;
    } else if (!Util.spaceNotAllowed(subject)) {
      isError = true;
      errors.subjectError = strings.INVALID_FIELD;
    }
    if (_.isEmpty(myMessage)) {
      isError = true;
      errors.myMessageError = strings.IS_REQUIRED_ERROR;
    } else if (!Util.spaceNotAllowed(myMessage)) {
      isError = true;
      errors.myMessageError = strings.INVALID_FIELD;
    }

    //not required but invalid regex check
    if (!_.isEmpty(phoneNumber) && !isValidPhoneNumber(phoneNumber)) {
      isError = true;
      errors.phoneNumberError = strings.INVALID_PHONE_NUMBER;
    }
    if (!_.isEmpty(address) && !Util.spaceNotAllowed(address)) {
      isError = true;
      errors.addressError = strings.INVALID_FIELD;
    }
    if (!_.isEmpty(hearAbout) && !Util.spaceNotAllowed(hearAbout)) {
      isError = true;
      errors.hearAboutError = strings.INVALID_FIELD;
    }

    if (!_.isEmpty(errors)) {
      // set all errors in state
      this.setState({
        ...this.state,
        ...errors,
      });
      if (errors.fullnameError) {
        this.fullnameRef.focus();
      } else if (errors.emailError) {
        this.emailRef.focus();
      } else if (errors.phoneError) {
        this.phoneRef.focus();
      } else if (errors.addressError) {
        this.addressRef.focus();
      } else if (errors.hearAboutError) {
        this.hearAboutRef.focus();
      } else if (errors.subjectError) {
        this.subjectRef.focus();
      } else if (errors.myMessageError) {
        this.myMessageRef.focus();
      }
    }

    return isError;
  };

  setValue = (obj) => {
    this.setState(obj);
  };

  onSubmit = () => {
    if (!this.validateForm()) {
      // e.preventDefault();
      // TODO make request to server
      const {
        fullname,
        phoneNumber,
        email,
        hearAbout,
        address,
        myMessage,
        subject,
      } = this.state;

      const payload = {
        fullname,
        email: email.trim(),
        phone: phoneNumber,
        area: address,
        hear_from: hearAbout,
        subject,
        message: myMessage,
        website: WEBSITE_SLUG,
      };
      this.setState({
        isLoading: true,
      });

      this.props.getInTouchRequest(payload, (success) => {
        this.setState({
          isLoading: false,
        });
        if (success) {
          this.setState(
            {
              successStatus: true,
              successMsg: strings.CONTACT_FORM_SUCCESS_MESSAGE, //
              fullname: "",
              phoneNumber: "",
              email: "",
              area: "",
              address: "",
              hearAbout: "",
              myMessage: "",
              subject: "",
            },
            () => {
              setTimeout(() => {
                this.flushAlert();
              }, 10000);
            }
          );
        }
      });
    }
  };
  render() {
    const {
      fullname,
      fullnameError,
      phoneNumber,
      phoneNumberError,
      email,
      emailError,
      area,
      address,
      addressError,
      hearAbout,
      hearAboutError,
      myMessage,
      myMessageError,
      successStatus,
      successMsg,
      isLoading,
      subject,
      subjectError,
    } = this.state;
    return (
      <ContactView
        {...this.props}
        onSubmit={this.onSubmit}
        onInputChange={this.change}
        fullname={fullname}
        fullnameError={fullnameError}
        fullnameRef={(node) => (this.fullnameRef = node)}
        phoneNumber={phoneNumber}
        phoneNumberError={phoneNumberError}
        email={email}
        emailError={emailError}
        emailRef={(node) => (this.emailRef = node)}
        area={area}
        address={address}
        addressError={addressError}
        addressRef={(node) => (this.addressRef = node)}
        hearAbout={hearAbout}
        hearAboutError={hearAboutError}
        hearAboutRef={(node) => (this.hearAboutRef = node)}
        myMessage={myMessage}
        myMessageError={myMessageError}
        myMessageRef={(node) => (this.myMessageRef = node)}
        successMsg={successMsg}
        successStatus={successStatus}
        isLoading={isLoading}
        subject={subject}
        subjectError={subjectError}
        subjectRef={(node) => (this.subjectRef = node)}
        setValue={this.setValue}
        phoneRef={(node) => (this.phoneRef = node)}
      />
    );
  }
}

const mapStateToProps = ({ booking }) => ({
  booking,
});

const actions = { getInTouchRequest };

export default connect(mapStateToProps, actions)(ContactController);
