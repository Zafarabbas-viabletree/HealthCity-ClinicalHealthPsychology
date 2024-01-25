// @flow
import React from "react";
import _ from "lodash";
import { css } from "aphrodite";
import { BarLoader } from "react-spinners";
import { faDownload, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dropzone from "react-dropzone";
import styles from "./DocumentFormStyles";
import { AppStyles, Colors, Images } from "../../theme";
import { WebHeader, WebFooter, Button, FileDropBox } from "../../components";
import Util from "../../services/Util";
import { DATE_TIME_FORMAT1 } from "../../constants";
export default function DocumentFormView(props) {
  const {
    isLoading,
    adminData,
    onSubmit,
    onFileSelected,
    submitLoading,
    formError,
    submittedSuccessfull,
    userMessage,
    onUserMessageChange,
  } = props;

  return (
    <div>
      <WebHeader />

      {isLoading && (
        <div
          style={{
            height: "30vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BarLoader
            sizeUnit={"px"}
            size={150}
            color={Colors.background.primary}
          />
        </div>
      )}

      {!isLoading && !_.isNull(adminData) && (
        <>
          <div className={`${css([styles.heroWrapper])}`}>
            <div
              className={`pb-3 container d-flex p-0 ${css([AppStyles.flex1])}`}
            >
              <h1 className={`${css([styles.heading1, AppStyles.weight7])}`}>
                Documents
              </h1>
            </div>

            <div className={`container ${css([styles.heroBookingDetail])}`}>
              <div className="row">
                <div className="col-md-4">
                  <label className={`${css([styles.label1])}`}>
                    Booking number
                  </label>
                  <p className={`${css([styles.label2])}`}>
                    {adminData.booking.booking_number}
                  </p>
                </div>
                <div className="col-md-4">
                  <label className={`${css([styles.label1])}`}>Name</label>
                  <p className={`${css([styles.label2])}`}>
                    {adminData.booking.name}
                  </p>
                </div>
                <div className="col-md-4">
                  <label className={`${css([styles.label1])}`}>
                    Date & TIME
                  </label>
                  <p className={`${css([styles.label2])}`}>
                    {Util.getFormattedDateTime(
                      adminData.booking.booking_time,
                      DATE_TIME_FORMAT1
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`container my-5 mb-5`}>
            <div>
              {submittedSuccessfull && (
                <div className={`${css(styles.thankYouMessage)}`}>
                  <div className={`${css(styles.thankYouIconCont)}`}>
                    <FontAwesomeIcon
                      icon={faThumbsUp}
                      className={`${css(styles.thankYouIcon)}`}
                    />
                  </div>
                  <div className={`${css(styles.messageCont)}`}>
                    <h4
                      className={`${css(
                        AppStyles.weight7,
                        styles.messageHead
                      )}`}
                    >
                      Thank You
                    </h4>
                    <p className={`${css(styles.messageText)}`}>
                      We have received your documents. Our therapist will
                      contact you shortly.
                    </p>
                  </div>
                </div>
              )}
              {!submittedSuccessfull && (
                <div className="row">
                  <div className={`col-md-6 ${css([styles.wrapper1])}`}>
                    {!_.isNull(adminData.message) && (
                      <h1 className={`mb-2 ${css([styles.heading2])}`}>
                        Note From Therapist:
                      </h1>
                    )}
                    <p className={`${css([AppStyles.lineHeight1_3])}`}>
                      {adminData.message}
                    </p>

                    <h1 className={`mt-3 mb-2 ${css([styles.heading2])}`}>
                      File(s):
                    </h1>

                    <div className={`mt-2 ${css([styles.fileRow])}`}>
                      {adminData.files.map((file, index) => {
                        const arraySplitted = file.split(".");
                        const fileName =
                          arraySplitted[arraySplitted.length - 1];

                        return (
                          <div
                            className={`${css([styles.fileItem])}`}
                            key={index + 1}
                          >
                            <a
                              href={file}
                              download
                              target="_blank"
                              className={`${css([styles.fileAnchor])}`}
                            >
                              file{index + 1}.{fileName}{" "}
                              <FontAwesomeIcon
                                icon={faDownload}
                                className={`ml-1 ${css([
                                  AppStyles.font12Size,
                                ])}`}
                              />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div class={`col-md-6 ${css([styles.wrapper2])}`}>
                    <p className={`${css([AppStyles.lineHeight1_3])}`}>
                      Please write a message along with your document, if you
                      want
                    </p>

                    <textarea
                      placeholder="Write your message here"
                      className={`${css([styles.textArea])}`}
                      value={userMessage}
                      onChange={onUserMessageChange}
                    />
                    <FileDropBox
                      label="Upload files"
                      onFileSelected={onFileSelected}
                    />
                    <div className={css(styles.sendBtnWrapper)}>
                      <Button
                        title="Submit"
                        isLoading={submitLoading}
                        className={css(styles.sendBtn)}
                        onClick={onSubmit}
                        ripple={false}
                      />
                    </div>
                    <p className={css(styles.error)}>{formError}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      <WebFooter />
    </div>
  );
}
