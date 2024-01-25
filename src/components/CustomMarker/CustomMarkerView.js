// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./CustomMarkerStyles";
import { Colors, Images } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function CustomMarkerView(props) {
  return (
    <div>
      <FontAwesomeIcon
        style={{ fontSize: 33, color: Colors.background.primary }}
        icon={faMapMarkerAlt}
      />
    </div>
  );
}
