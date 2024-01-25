// @flow
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTeamMembersRequest } from "../../actions/GeneralActions";
import OurTeamSectionView from "./OurTeamSectionView";

class OurTeamSectionController extends React.Component {
  static propTypes = {
    isShortView: PropTypes.bool,
  };

  static defaultProps = {
    isShortView: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      showTeamModalVisibility: false,
      selectedItem: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.props.getTeamMembersRequest(() => {
      this.setState({
        isLoading: false,
      });
    });
  }

  onCloseModal = () => {
    this.setState({
      showTeamModalVisibility: false,
    });
  };

  setValue = (obj) => {
    this.setState(obj);
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

    /*  this.setState(
      {
        selectedItemImage: item.profileImage,
        selectedItemTitle: item.titles,
        selectedItemName: item.name,
        selectedItemDescription: item.description,
      },
      () => {
        this.setState({
          showTeamModalVisibility: true,
        });
      }
    ); */
  };

  render() {
    const { showTeamModalVisibility, selectedItem, isLoading } = this.state;
    return (
      <OurTeamSectionView
        {...this.props}
        showTeamModalVisibility={showTeamModalVisibility}
        selectedItem={selectedItem}
        isLoading={isLoading}
        onCloseModal={this.onCloseModal}
        setValue={this.setValue}
        onItemClickHandler={this.onItemClickHandler}
      />
    );
  }
}

const mapStateToProps = ({ general }) => ({
  teamMembersData: general.teamMembersData,
});

const actions = { getTeamMembersRequest };

export default connect(mapStateToProps, actions)(OurTeamSectionController);
