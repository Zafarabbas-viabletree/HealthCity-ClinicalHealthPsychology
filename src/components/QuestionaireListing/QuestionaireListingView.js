// @flow
import React from "react";
import { css } from "aphrodite";
import _ from "lodash";
import styles from "./QuestionaireListingStyles";
import { Button } from "react-bootstrap";
import { AppStyles } from "../../theme";

export default function QuestionaireListingView(props) {
  const {
    selectedQuestionnair,
    onAnswerSelect,
    selectedAnswers,
    onSubmit,
    error,
  } = props;
  if (selectedQuestionnair) {
    return (
      <section className={` ${css([styles.QuestionaireListing])}`}>
        <div className={`container `}>
          <div className={`row`}>
            <div className={`col-lg-4 col-md-12 col-sm-12`}>
              <div className={css(styles.questionaireHead)}>
                {selectedQuestionnair.title}
              </div>
            </div>
            <div className={`col-lg-8 col-md-12 col-sm-12`}>
              <div className={css(styles.questionaireSubHead)}>
                {selectedQuestionnair.subTitle}
              </div>
              {!_.isNull(selectedQuestionnair) &&
                selectedQuestionnair.questions.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={css(styles.quesInnerContainer)}
                    >
                      <span className={css(styles.quesNumber)}>
                        {"0" + item.id}
                      </span>
                      <h6 className={css(styles.question)}>{item.question}</h6>
                      <div
                        className={css([
                          styles.optionBtnCont,
                          item.options.length === 2 && [
                            styles.optionBtnCont,
                            styles.widthCss,
                          ],
                        ])}
                      >
                        {item.options.map((option) => {
                          const isSelected =
                            !_.isNull(selectedAnswers[item.id].selectedValue) &&
                            selectedAnswers[item.id].selectedValue ===
                              option.value;

                          return (
                            <Button
                              key={option.value}
                              className={css([
                                styles.optionBtn,
                                isSelected && styles.selectdOptionBtn,
                              ])}
                              onClick={() => onAnswerSelect(item, option)}
                            >
                              {option.title}
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              {!_.isNull(error) && (
                <p className={css(styles.errorArea)}>{error}</p>
              )}
              <Button className={css(styles.nextBtn)} onClick={onSubmit}>
                Next
              </Button>

              <div className={`my-3`}>
                <p className={css(styles.disclaimer)}>
                  <span className={css(AppStyles.weight7)}>Disclaimer:</span>{" "}
                  The questions and the questionnaires on this website do not
                  give you a diagnosis. You must ask to be assessed by and to
                  ask for and use expert medical advice from a qualified medical
                  health professional if you are worried about your health or
                  the health of someone else. Healthcity and its affiliated
                  organisations do not provide Emergency Services, as such the
                  phone numbers, emails and other contact details must not be
                  used by you if you are risk to yourself or to other people. If
                  you are at risk or feel distressed, do contact your local
                  emergency services or your local family doctor for urgent
                  advice and support. You can also find helplines on the Keep
                  Save/Risk Menus of this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
