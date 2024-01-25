// @flow
import React from "react";
import { css } from "aphrodite";
import styles from "./EmptyPageStyles";
import { AppStyles } from "../../theme";
import { WebHeader, WebFooter } from "../../components";
export default function EmptyPageView(props) {
  return (
    <div>
      <WebHeader isChildPage={true} bannerTitle={"Terms of Use"} />

      <WebFooter />
    </div>
  );
}
