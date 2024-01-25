// @flow
import React from "react";

import CharitiesView from "./CharitiesView";

export default class CharitiesController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <CharitiesView {...this.props} />;
  }
}
