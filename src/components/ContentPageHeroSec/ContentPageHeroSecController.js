// @flow
import React from "react";
import PropTypes from "prop-types";
import ContentPageHeroSecView from "./ContentPageHeroSecView";

export default class ContentPageHeroSecController extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  render() {
    return <ContentPageHeroSecView {...this.props} />;
  }
}
