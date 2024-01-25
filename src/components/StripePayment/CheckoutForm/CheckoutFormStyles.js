// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../../theme";

export default StyleSheet.create({
  labelWrapper: {
    width: "350px",
  },
  formControl: {
    width: "100%",
    height: "48px",
    display: "block",
    // padding: ".375rem .75rem",
    padding: "13px 0 13px 16px",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: 1.5,
    color: Colors.text.accent,
    backgroundColor: Colors.white,
    backgroundClip: "padding-box",
    border: `solid 1px ${Colors.background.borderColor}`,
    borderRadius: ".25rem",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    boxShadow: "1px 1px 2px 0px #429f9461",
    ":focus": {
      outline: 0,
    },
    "@media (max-width: 410px)": {
      width: "70%",
    },
  },
});
