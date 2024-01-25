// @flow
import React from "react";
import PropTypes from "prop-types";

import WebHeaderView from "./WebHeaderView";

export default class WebHeaderController extends React.Component {
  static propTypes = {
    showSignupBtn: PropTypes.bool,
    showLoginBtn: PropTypes.bool,
    isLoginModalVisible: PropTypes.bool,
    setValue: PropTypes.func,
    showCreateShift: PropTypes.bool,
  };

  static defaultProps = {
    showSignupBtn: true,
    showLoginBtn: true,
    isLoginModalVisible: false,
    setValue: () => {},
    showCreateShift: true,
  };

  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
    };
  }

  onHamburgeClick = () => {
    this.setState({ showMobileMenu: true });
    document.body.style.overflow = "hidden";
  };
  componentDidMount() {
    document.body.style.overflow = "auto";
  }

  onHamburgeHide = () => {
    this.setState({ showMobileMenu: false });
    document.body.style.overflow = "auto";
  };

  render() {
    const { showMobileMenu } = this.state;
    return (
      <WebHeaderView
        {...this.props}
        onHamburgeClick={this.onHamburgeClick}
        onHamburgeHide={this.onHamburgeHide}
        showMobileMenu={showMobileMenu}
      />
    );
  }
}
