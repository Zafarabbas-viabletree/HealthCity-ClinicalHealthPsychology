// @flow
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import UnderDevView from "./UnderDevView";
import Util from "../../services/Util";
import { ROUTES, strings } from "../../constants";
import { subscriptionRequest } from "../../actions/GeneralActions";
import { connect } from "react-redux";

class UnderDevController extends React.Component {
  static propTypes = {
    pageName: PropTypes.any.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      isLoading: false,
      successStatus: false,
      successMsg: "",
    };
  }

  flushAlert = () => {
    this.setState((prevState, props) => ({
      successStatus: !prevState,
    }));
  };

  validateEmail = () => {
    let isError = false;
    const errors = { emailError: "", nameError: "" };
    const { email, name } = this.state;

    if (_.isEmpty(name)) {
      isError = true;
      errors.nameError = strings.NAME_IS_REQUIRED;
    } else if (!Util.isValidfullname(name)) {
      isError = true;
      errors.nameError = strings.INVALID_FULLNAME_ERROR;
    }
    if (_.isEmpty(email)) {
      isError = true;
      errors.emailError = strings.EMAIL_IS_REQUIRED;
    } else if (!Util.isEmailValid(email)) {
      isError = true;
      errors.emailError = strings.INVALID_EMAIL_ERROR;
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  setValue = (obj) => {
    this.setState(obj);
  };

  onSubmit = () => {
    if (!this.validateEmail()) {
      const { email, name } = this.state;
      const { pageName } = this.props;

      const payload = {
        email: email.trim(),
        page: pageName,
        name: name, //remove this field
      };
      this.setState({
        isLoading: true,
      });

      this.props.subscriptionRequest(payload, (success) => {
        this.setState({
          isLoading: false,
        });
        if (success) {
          this.setState(
            {
              successStatus: true,
              successMsg: strings.NOTIFY_SUCCESS_MESSAGE, //
              email: "",
              name: "",
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
      name,
      nameError,
      emailError,
      email,
      successMsg,
      successStatus,
      isLoading,
    } = this.state;
    return (
      <UnderDevView
        {...this.props}
        onSubmit={this.onSubmit}
        name={name}
        nameError={nameError}
        email={email}
        emailError={emailError}
        successMsg={successMsg}
        successStatus={successStatus}
        isLoading={isLoading}
        setValue={this.setValue}
      />
    );
  }
}

const mapStateToProps = ({ subsEmail }) => ({
  subsEmail,
});

const actions = { subscriptionRequest };

export default connect(mapStateToProps, actions)(UnderDevController);
