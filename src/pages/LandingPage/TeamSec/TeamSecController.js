// @flow
import React from "react";
import { connect } from "react-redux";

import TeamSecView from "./TeamSecView";

class TeamSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <TeamSecView
        {...this.props}
        teamMembersData={this.props.teamMembersData}
      />
    );
  }
}

const mapStateToProps = ({ general }) => ({
  teamMembersData: general.teamMembersData,
});

const actions = {};

export default connect(mapStateToProps, actions)(TeamSecController);
