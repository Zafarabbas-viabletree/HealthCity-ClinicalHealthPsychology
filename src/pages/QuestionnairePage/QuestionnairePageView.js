// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./QuestionnairePageStyles";
import { AppStyles } from "../../theme";
import { WebHeader, WebFooter, QuestionaireListing } from "../../components";
import { Helmet } from "react-helmet";

export default function QuestionnairePageView(props) {
  const { questionnairData } = props;

  if (questionnairData) {
    return (
      <div>
        <Helmet>
          <title>
            Questionnaire | Clinical Or Health Psychology | Healthcity
          </title>
          <meta name="description" content="Healthcity | Health is wealth" />
        </Helmet>
        <WebHeader isChildPage={true} />

        <QuestionaireListing questionnairData={questionnairData} />

        <WebFooter />
      </div>
    );
  }

  return null;
}
