// @flow
import React from "react";
import PropTypes from "prop-types";

import BooksPDFSecView from "./BooksPDFSecView";

export default class BooksPDFSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};
  constructor(props) {
    super(props);
    this.state = {
      showTeamModalVisibility: false,
      selectedItem: null,
    };
  }

  onCloseModal = () => {
    this.setState({
      showTeamModalVisibility: false,
    });
  };

  onItemClickHandler = (item) => {
    this.setState(
      {
        selectedItem: item,
      },
      () => {
        this.setState({
          showTeamModalVisibility: true,
        });
      }
    );
  };

  render() {
    const { showTeamModalVisibility, selectedItem } = this.state;
    return (
      <BooksPDFSecView
        {...this.props}
        showTeamModalVisibility={showTeamModalVisibility}
        selectedItem={selectedItem}
        onCloseModal={this.onCloseModal}
        onItemClickHandler={this.onItemClickHandler}
      />
    );
  }
}
