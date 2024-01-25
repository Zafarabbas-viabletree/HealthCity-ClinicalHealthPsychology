// @flow
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { connect } from "react-redux";
import TeamMemberModalBoxView from "./TeamMemberModalBoxView";

class TeamMemberModalBoxController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    onCloseModal: PropTypes.func.isRequired,
    selectedItem: PropTypes.object,
  };

  static defaultProps = {};

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return <TeamMemberModalBoxView {...this.props} />;
  }
}

const mapStateToProps = ({}, ownProps) => {
  return {};
};

const actions = {};
export default connect(mapStateToProps, actions)(TeamMemberModalBoxController);
