// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    maxWidth: 1100,
    margin: "0 auto",
  },
  headerGraphics: {
    width: "60%",
    // zIndex: '-999',
    position: "absolute",
    bottom: 0,
    right: 0,
    "@media (max-width: 1280px)": {
      width: "57%",
    },
    "@media (max-width: 1024px)": {
      width: "55%",
    },
    "@media (max-width: 980px)": {
      position: "static",
      width: "100%",
      top: 70,
    },
  },
  heroSection: {
    position: "relative",
    height: "auto",
    paddingBottom: 0,

    "@media (max-width: 992px)": {
      height: "auto",
      // paddingBottom: 850,
      paddingTop: "60px",
    },

    "@media (max-width: 767px)": {
      // paddingBottom: 400,
      paddingTop: "0",
    },
  },
  HeightVhs: {
    "@media (max-width: 992px)": {
      height: "auto !important",
    },
    /* height: '85vh' */
  },
  contactHeading: {
    color: Colors.background.primary,
    fontSize: 56,
    fontWeight: "bold",
    lineHeight: 1.21,
    marginBottom: 20,
    // width: "100%",
    // maxWidth: '390px'
  },
  contactDesc: {
    marginTop: 20,
    lineHeight: 1.47,
    color: Colors.text.accent,
  },
  formGroup: {
    marginBottom: 20,
  },
  phoneFormControl: {
    width: "100%",
    maxWidth: "310px",
    height: "42px",
    display: "flex",
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
    ":focus": {
      outline: 0,
    },
    "@media (max-width: 991px)": {
      maxWidth: "100%",
    },
  },
  formControl: {
    width: "100%",
    maxWidth: "251px",
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
    borderRadius: ".25rem",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    ":focus": {
      color: Colors.text.accent,
      backgroundColor: Colors.white,
      border: `solid 1px ${Colors.background.borderColor}`,
      outline: 0,
      boxShadow: "none",
    },
    "@media (max-width: 991px)": {
      maxWidth: "100%",
    },
  },

  formControlTextArea: {
    resize: "both",
    width: "100%",
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
    ":focus": {
      color: Colors.text.accent,
      backgroundColor: Colors.white,
      border: `solid 1px ${Colors.background.borderColor}`,
      outline: 0,
      boxShadow: "none",
    },
  },
  sendBtn: {
    border: "1px solid transparent",
    borderRadius: 1,
    height: 49,
    width: 119,
    color: Colors.white,
    fontWeight: "bold",
    background: Colors.background.green,
    "@media (max-width: 600px)": {
      marginTop: 15,
    },
  },
  formSubmitBtnContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "@media (max-width: 767px)": {
      justifyContent: "center",
    },
  },

  contactInfoBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch",
    alignItems: "center",
    background: Colors.background.secondary,
    width: 420,
    height: "370px",
    padding: 30,
    "@media (max-width: 991px)": {
      marginTop: 20,
    },
    "@media (max-width: 600px)": {
      width: "100%",
      height: "auto",
    },
  },
  contactInfoIcon: {
    width: 41,
  },
  contactInfoIconTwo: {
    width: 28,
  },
  contactInfoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.background.primary,
    marginTop: 30,
    textAlign: "center",
  },
  contactInfoDesc: {
    marginTop: 20,
    lineHeight: 1.5,
    textAlign: "center",
  },
  boxCont: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    "@media (max-width: 991px)": {
      flexDirection: "column",
    },
  },
  containerMargin: {
    marginTop: 100,
    "@media (max-width: 991px)": {
      marginTop: 50,
    },
  },
});
