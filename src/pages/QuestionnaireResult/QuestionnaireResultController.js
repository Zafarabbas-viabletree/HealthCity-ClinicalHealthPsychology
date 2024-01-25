// @flow
import React from "react";
import { ROUTES } from "../../constants";
import QuestionnaireResultView from "./QuestionnaireResultView";

export default class QuestionnaireResultController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      questionnairResult: null,
      questionnaireId: null,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.setQuestionnairResult();
  }

  getquestionnaireId = () => {
    if (this.props.match && this.props.match.params.questionnaireId) {
      return this.props.match.params.questionnaireId;
    }

    return null;
  };

  setQuestionnairResult = () => {
    const questionnaireId = this.getquestionnaireId();
    let questionnairResult = null;

    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.questionnairResult
    ) {
      questionnairResult = this.props.location.state.questionnairResult;
    }

    if (questionnaireId && questionnairResult) {
      this.setState({ questionnairResult, questionnaireId });
    } else {
      // no valid data found, redirect to that questionnaire
      this.props.history.push(`${ROUTES.QUESTIONNAIRE}/${questionnaireId}`);
    }
  };

  onNextQuestionnairClick = () => {
    const { questionnaireId } = this.state;
    if (questionnaireId == 1) {
      // go to next questionnaire
      this.props.history.push(`${ROUTES.QUESTIONNAIRE}/2`);
    } else if (questionnaireId == 2) {
      // go to next questionnaire
      this.props.history.push(`${ROUTES.QUESTIONNAIRE}/3`);
    }
  };

  render() {
    const { questionnairResult, questionnaireId } = this.state;
    return (
      <QuestionnaireResultView
        {...this.props}
        questionnairResult={questionnairResult}
        questionnaireId={questionnaireId}
        onNextQuestionnairClick={this.onNextQuestionnairClick}
      />
    );
  }
}
