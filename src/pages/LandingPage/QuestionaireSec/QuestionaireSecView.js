// @flow
import React from "react";
import { css } from "aphrodite";
import _ from "lodash";
import { Images, AppStyles, Colors } from "../../../theme";
import { QuestionaireListing } from "../../../components";
import styles from "./QuestionaireSecStyles";

export default function QuestionaireSecView(props) {
  const { selectedQuestionnair } = props;

  return (
    <section>
      <QuestionaireListing questionnairData={selectedQuestionnair} />
    </section>
  );
}
