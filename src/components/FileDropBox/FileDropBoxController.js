// @flow
import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import FileDropBoxView from "./FileDropBoxView";

export default class FileDropBoxController extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onFileSelected: PropTypes.func.isRequired,
    wrapperStyles: PropTypes.object,
  };

  static defaultProps = {
    label: "",
    wrapperStyles: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      files: [],
      isDragOver: false,
    };
  }

  onFileSelected = (newFiles) => {
    this.setState(
      (prevState, props) => ({
        files: [...prevState.files, ...newFiles],
        isDragOver: false,
      }),
      () => {
        this.props.onFileSelected(this.state.files);
      }
    );
  };

  onFileRemove = (removedFileIndex) => {
    this.setState(
      (prevState, props) => {
        const prevFilesList = _.cloneDeep(prevState.files);
        prevFilesList.splice(removedFileIndex, 1);
        return {
          files: prevFilesList,
          isDragOver: false,
        };
      },
      () => {
        this.props.onFileSelected(this.state.files);
      }
    );
  };

  onDragLeave = () => {
    this.setState({ isDragOver: false });
  };

  onDragEnter = () => {
    this.setState({ isDragOver: true });
  };

  render() {
    const { files, isDragOver } = this.state;
    return (
      <FileDropBoxView
        {...this.props}
        onFileSelected={this.onFileSelected}
        onFileRemove={this.onFileRemove}
        files={files}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.onDragLeave}
        isDragOver={isDragOver}
      />
    );
  }
}
