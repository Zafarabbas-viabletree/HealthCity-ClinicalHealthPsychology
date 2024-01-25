// @flow
import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import _ from "lodash";
import styles from "./TeamMemberModalBoxStyles";
import { css } from "aphrodite";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faFileDownload } from "@fortawesome/free-solid-svg-icons";

export default function TeamMemberModalBoxView(props) {
  const { isModalOpen, onCloseModal, selectedItem } = props;

  return (
    <Modal
      center
      open={isModalOpen}
      onClose={onCloseModal}
      classNames={{
        overlay: "customOverlay",
        modal: "teamBoxModal",
      }}
    >
      <div className={css(styles.itemContainer)}>
        <div style={{ flex: "0 0 31%" }}>
          <LazyLoadImage
            src={selectedItem.profileImage}
            alt={selectedItem.profileImage}
            className={css(styles.itemImage)}
            effect="blur"
          />
        </div>
        <div className={`mt-3`}>
          <div className={`${css(styles.profileInnerCont)}`}>
            <div className={`${css(styles.profileHead)}`}>
              <div className={css(styles.itemName)}>{selectedItem.name}</div>
              <div className={css(styles.itemTitle)}>{selectedItem.titles}</div>
            </div>
            {!_.isNull(selectedItem.cv) && (
              <a href={selectedItem.cv} download>
                <div className={`${css(styles.downloadOption)}`}>
                  <span style={{ marginRight: 10 }}>Download CV</span>
                  <FontAwesomeIcon icon={faDownload} />
                </div>
              </a>
            )}
          </div>
          <div className={css(styles.itemDesc)}>
            {ReactHtmlParser(selectedItem.description)}
          </div>
        </div>
      </div>
    </Modal>
  );
}
