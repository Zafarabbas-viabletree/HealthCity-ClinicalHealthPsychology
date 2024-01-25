// @flow
import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import QuestionaireListingView from "./QuestionaireListingView";
import { ROUTES, strings } from "../../constants";

class QuestionaireListingController extends React.Component {
  static propTypes = {
    questionnairData: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedQuestionnair: null,
      selectedAnswers: null,
      error: null,
      questionnairResult: null,
    };
  }

  componentDidMount() {
    this.setQuestionnairInitalData();
  }

  setQuestionnairInitalData = () => {
    const dataSet = this.props.questionnairData;
    const { questions } = dataSet;
    const answersDataSet = {};

    questions.forEach(({ id }) => {
      answersDataSet[id] = { selectedValue: null };
    });

    this.setState({
      selectedQuestionnair: dataSet,
      selectedAnswers: answersDataSet,
    });
  };

  onAnswerSelect = (item, option) => {
    this.setState({
      selectedAnswers: {
        ...this.state.selectedAnswers,
        ...{ [item.id]: { selectedValue: option.value } },
      },
      error: null,
      questionnairResult: null,
    });
  };

  allAnswersSubmited = () => {
    const { selectedAnswers } = this.state;
    let isValid = true;

    for (const property in selectedAnswers) {
      if (_.isNull(selectedAnswers[property].selectedValue)) {
        isValid = false;
      }
    }
    return isValid;
  };

  getResultOfSelectedQuestionnair = () => {
    const { selectedAnswers, selectedQuestionnair } = this.state;
    let total = 0;
    let resultDataSet = null;
    for (const property in selectedAnswers) {
      const selectedValue = selectedAnswers[property].selectedValue;
      if (!_.isNull(selectedValue)) {
        total = total + selectedValue;
      }
    }

    selectedQuestionnair.results.forEach((element) => {
      if (total >= element.min && total <= element.max) {
        resultDataSet = element;
      }
    });
    if (resultDataSet) {
      return { ...resultDataSet, ...{ totalScore: total } };
    }
    return resultDataSet;
  };

  onSubmit = () => {
    const isValid = this.allAnswersSubmited();
    const { questionnairData } = this.props;
    if (isValid) {
      this.props.history.push(
        `${ROUTES.QUESTIONNAIRE_RESULT}/${questionnairData.id}`,
        {
          questionnairResult: this.getResultOfSelectedQuestionnair(),
        }
      );
    } else {
      this.setState({ error: strings.QUESTIONNAIR_FORM_INVALID });
    }
  };

  render() {
    const {
      selectedQuestionnair,
      selectedAnswers,
      error,
      questionnairResult,
    } = this.state;
    return (
      <QuestionaireListingView
        {...this.props}
        selectedQuestionnair={selectedQuestionnair}
        onAnswerSelect={this.onAnswerSelect}
        selectedAnswers={selectedAnswers}
        onSubmit={this.onSubmit}
        error={error}
        questionnairResult={questionnairResult}
      />
    );
  }
}

const mapStateToProps = ({}) => ({});

const actions = {};

export default connect(
  mapStateToProps,
  actions
)(withRouter(QuestionaireListingController));
