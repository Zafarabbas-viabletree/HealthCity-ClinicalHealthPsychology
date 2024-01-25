// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  mainCont: {
    width: "70%",
    "@media (max-width: 1199px)": {
      width: "80%",
    },
    "@media (max-width: 991px)": {
      width: "100%",
    },
  },
  emailCont: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "baseline",
    "@media (max-width: 520px)": {
      alignItems: "center",
      flexDirection: "column",
    },
  },
  emailIcon: {
    marginRight: 20,
    color: Colors.background.green,
    "@media (max-width: 520px)": {
      display: "none",
    },
  },
  formGroup: {
    marginBottom: 20,
  },
  formControl: {
    width: "330px",
    height: "42px",
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
    borderTopLeftRadius: ".25rem",
    borderBottomLeftRadius: ".25rem",
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    ":focus": {
      color: Colors.text.accent,
      backgroundColor: Colors.white,
      border: `solid 1px ${Colors.background.borderColor}`,
      outline: 0,
      boxShadow: "none",
    },
    "@media (max-width: 767px)": {
      width: "100%",
    },
    "@media (max-width: 520px)": {
      borderRadius: ".25rem",
    },
  },
  sendBtn: {
    borderRadius: ".25rem",
    border: "1px solid transparent",
    height: 42,
    width: 150,
    color: Colors.white,
    fontWeight: "bold",
    background: Colors.background.green,
  },
  formSubmitBtnContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "@media (max-width: 767px)": {
      justifyContent: "center",
    },
  },
});
