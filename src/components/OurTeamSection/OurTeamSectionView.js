// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./OurTeamSectionStyles";
import { Colors, Images } from "../../theme";
import { TeamMemberModalBox } from "../../components";
import { TEAM_MEMBER_COUNT } from "../../constants";
import { element } from "prop-types";
import { ToastBody } from "react-bootstrap";
import { BarLoader } from "react-spinners";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function OurTeamSectionView(props) {
  const {
    teamMembersData,
    showTeamModalVisibility,
    onCloseModal,
    setValue,
    onItemClickHandler,
    selectedItem,
    isLoading,
    isShortView,
  } = props;

  if (isLoading) {
    return (
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
    );
  }

  let mLength = isShortView ? TEAM_MEMBER_COUNT : teamMembersData.length;

  if (teamMembersData.length === 0) {
    // no data return null
    return null;
  }

  if (teamMembersData.length > 0)
    // have one or more records
    return (
      <>
        {showTeamModalVisibility && (
          <TeamMemberModalBox
            isModalOpen={showTeamModalVisibility}
            onCloseModal={onCloseModal}
            selectedItem={selectedItem}
          />
        )}

        <div id="team" className={`row ${css(styles.profileCont)}`}>
          {teamMembersData.slice(0, mLength).map((element) => {
            return (
              <div
                key={element.id}
                onClick={() => onItemClickHandler(element)}
                className={`col-lg-4 col-md-6 col-sm-12 ${css(
                  styles.profileInfoCont
                )}`}
              >
                <div className={css(styles.imageHead)}>
                  <LazyLoadImage
                    src={element.profileImage}
                    alt={element.profileImage}
                    className={css(styles.profileImage)}
                    effect="blur"
                  />
                </div>
                <div className={css(styles.profileContent)}>
                  <h4 className={css(styles.profileName)}>{element.name}</h4>
                  <h6 className={css(styles.profileTitles)}>
                    {element.titles}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
}
