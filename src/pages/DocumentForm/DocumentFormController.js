// @flow
import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getDoctorSubmittedDocumentsRequest,
  submitDocToDoctorRequest,
} from "../../actions/GeneralActions";
import { uploadFiles } from "../../helpers/dataHelper";
import DocumentFormView from "./DocumentFormView";

class DocumentFormController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      adminData: null,
      userSelectedFiles: [],
      submitLoading: false,
      formError: null,
      userMessage: "",
      submittedSuccessfull: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getFormId = () => {
    if (this.props.match && this.props.match.params.formId) {
      return this.props.match.params.formId;
    }

    return null;
  };

  getData = () => {
    this.setState({ isLoading: true });

    const payload = {
      unique_id: this.getFormId(),
    };
    this.props.getDoctorSubmittedDocumentsRequest(payload, (response) => {
      if (response.status) {
        if (response.data.submitted_data) {
          // files already sumbitted, show thankyou component
          this.setState({
            submittedSuccessfull: true,
            isLoading: false,
            adminData: _.cloneDeep(response.data),
          });
        } else {
          this.setState({
            adminData: _.cloneDeep(response.data),
            isLoading: false,
          });
        }
      } else {
        this.setState({ isLoading: false });
      }
    });
  };

  onSubmit = async () => {
    const { userSelectedFiles, userMessage } = this.state;

    if (userSelectedFiles.length > 0) {
      const uploadedFiles = await this.uploadFiles();

      if (uploadedFiles) {
        const payload = {
          unique_id: this.getFormId(),
          documents: uploadedFiles,
          message: userMessage,
        };

        this.props.submitDocToDoctorRequest(payload, (success) => {
          this.setState({ submitLoading: false });
          if (success) {
            //
            this.setState({
              submittedSuccessfull: true,
            });
          } else {
            this.setState({
              formError: "Unable to submit, please contact administrator",
            });
          }
        });
      }
    } else {
      this.setState({ formError: "Please select file to submit." });
    }
  };

  uploadFiles = async () => {
    this.setState({ submitLoading: true });

    const { userSelectedFiles } = this.state;

    const uploadFilesRes = await uploadFiles(userSelectedFiles);
    if (uploadFilesRes.status) {
      return uploadFilesRes.data.files;
    } else {
      this.setState({ submitLoading: false });
      return null;
    }
  };

  onFileSelected = (files) => {
    this.setState({ userSelectedFiles: files, formError: null });
  };

  onUserMessageChange = (e) => {
    const value = e.target.value;
    this.setState({ userMessage: value });
  };

  render() {
    const {
      adminData,
      isLoading,
      submitLoading,
      formError,
      submittedSuccessfull,
    } = this.state;
    return (
      <DocumentFormView
        {...this.props}
        adminData={adminData}
        isLoading={isLoading}
        onSubmit={this.onSubmit}
        onFileSelected={this.onFileSelected}
        submitLoading={submitLoading}
        formError={formError}
        submittedSuccessfull={submittedSuccessfull}
        onUserMessageChange={this.onUserMessageChange}
      />
    );
  }
}

const mapStateToProps = ({}) => ({});

const actions = {
  getDoctorSubmittedDocumentsRequest,
  submitDocToDoctorRequest,
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(DocumentFormController));
