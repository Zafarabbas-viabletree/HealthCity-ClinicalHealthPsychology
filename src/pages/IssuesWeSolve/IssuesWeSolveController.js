// @flow
import React from "react";

import IssuesWeSolveView from "./IssuesWeSolveView";

export default class IssuesWeSolveController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <IssuesWeSolveView {...this.props} />;
  }
}
