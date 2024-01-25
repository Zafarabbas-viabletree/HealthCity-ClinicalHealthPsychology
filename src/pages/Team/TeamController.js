// @flow
import React from "react";

import TeamView from "./TeamView";

export default class TeamController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <TeamView {...this.props} />;
  }
}
