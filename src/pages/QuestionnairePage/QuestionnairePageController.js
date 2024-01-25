// @flow
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getQuestionnaireDataById,
  goToLandingPage,
} from "../../helpers/dataHelper";
import QuestionnairePageView from "./QuestionnairePageView";

class QuestionnairePageController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      questionnairData: null,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.setQuestionnairData();
  }

  getquestionnaireId = () => {
    if (this.props.match && this.props.match.params.questionnaireId) {
      return this.props.match.params.questionnaireId;
    }

    return null;
  };

  setQuestionnairData = () => {
    const questionnaireId = this.getquestionnaireId();
    if (questionnaireId) {
      const questionnairData = getQuestionnaireDataById(questionnaireId);
      if (questionnairData) {
        this.setState({ questionnairData });
      } else {
        // no valid data found, redirect to landing page
        goToLandingPage(this.props.history);
      }
    } else {
      // no valid data found, redirect to landing page
      goToLandingPage(this.props.history);
    }
  };

  render() {
    const { questionnairData } = this.state;
    return (
      <QuestionnairePageView
        {...this.props}
        questionnairData={questionnairData}
      />
    );
  }
}

const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(withRouter(QuestionnairePageController));
