// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./QuestionnaireResultStyles";
import { AppStyles } from "../../theme";
import { WebHeader, WebFooter } from "../../components";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants";
import { Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import {
  getQuestionnaireDataById,
  getQuestionnaireResultHeadingById,
} from "../../helpers/dataHelper";

export default function QuestionnaireResultView(props) {
  const {
    questionnairResult,
    questionnaireId,
    onNextQuestionnairClick,
  } = props;

  console.log({ questionnairResult });
  if (questionnairResult) {
    const isLastQuestionnaire = questionnaireId == 3;
    return (
      <div>
        <Helmet>
          <title>
            Questionnaire Result | Clinical Or Health Psychology | Healthcity
          </title>
          <meta name="description" content="Healthcity | Health is wealth" />
        </Helmet>
        <WebHeader isChildPage={true} />

        <div className={css(styles.questionaireResultsCont)}>
          <h1 className={css(styles.questionnaireResultHead)}>
            {questionnairResult.detailDesc}
          </h1>
          <p
            className={css(
              AppStyles.heading24,
              AppStyles.mTop10,
              AppStyles.mBottom10,
              AppStyles.textAlignCenter
            )}
          >
            <span className={css(AppStyles.weight7)}>Your Score:</span>{" "}
            {questionnairResult.totalScore}
          </p>

          <ul className={css(styles.resultCriteriaBox)}>
            <h2 className={css(styles.resultCriteriaHead)}>Results Criteria</h2>
            {getQuestionnaireDataById(questionnaireId).results.map((item) => {
              return <li>{`${item.description}: ${item.min}-${item.max}`}</li>;
            })}
          </ul>
          <p className={css(styles.questionnaireResultPara)}>
            {questionnairResult.suggestion}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <NavLink to={ROUTES.BOOKING}>
              <Button className={css(styles.appointmentBtn)}>
                Book An Appointment
              </Button>
            </NavLink>
          </div>
        </div>
        {!isLastQuestionnaire && (
          <div className={css(styles.questionaireBackCont)}>
            <div className={`container`}>
              <div className={css(styles.questionaireBackRow)}>
                <div>
                  <p className={css(styles.questionairePara)}>
                    {getQuestionnaireResultHeadingById(questionnaireId)}
                  </p>
                </div>

                <div>
                  <button
                    className={css(styles.nextQuestionaireBtn)}
                    onClick={onNextQuestionnairClick}
                  >
                    Take questionnaire
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <WebFooter />
      </div>
    );
  }

  return null;
}
