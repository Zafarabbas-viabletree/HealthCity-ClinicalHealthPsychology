// @flow
import React from "react";
import _ from "lodash";
import { QUESTIONAIRE_ONE, strings } from "../../../constants";
import QuestionaireSecView from "./QuestionaireSecView";

export default class QuestionaireSecController extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <QuestionaireSecView
        {...this.props}
        selectedQuestionnair={_.cloneDeep(QUESTIONAIRE_ONE)}
      />
    );
  }
}
