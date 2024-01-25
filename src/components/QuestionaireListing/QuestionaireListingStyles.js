// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Fonts, Images } from "../../theme";

export default StyleSheet.create({
  QuestionaireListing: {
    width: "100%",
    height: "100%",
    // marginTop: "100px",
    padding: "70px 0",
    backgroundColor: Colors.text.primary,
    "@media (max-width: 767px)": {
      padding: 30,
    },
  },
  questionaireHead: {
    color: Colors.white,
    lineHeight: 1.47,
    fontSize: 50,
    fontWeight: 600,
    textTransform: "capitalize",
    "@media (max-width: 991px)": {
      fontSize: 40,
      marginBottom: 70,
    },
    "@media (max-width: 767px)": {
      fontSize: 30,
    },
  },
  questionaireSubHead: {
    color: Colors.white,
    lineHeight: 1.47,
    fontSize: 20,
    fontWeight: 600,
    textTransform: "capitalize",
    marginBottom: 30,
  },
  quesInnerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    position: "relative",
    paddingBottom: 50,
    ":last-child": {
      paddingBottom: 58,
    },
  },
  quesNumber: {
    position: "absolute",
    color: "rgba(255, 255, 255, 0.1)",
    fontSize: 50,
    top: "-20px",
    left: 0,
  },
  question: {
    color: Colors.white,
    lineHeight: 1.47,
    fontSize: 18,
    flex: 1,
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  widthCss: {
    width: "50%",
    "@media (max-width: 767px)": {
      width: "100%",
    },
  },
  optionBtnCont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    "@media (max-width: 767px)": {
      flexDirection: "column",
    },
  },
  optionBtn: {
    width: "100%",
    height: "50px",
    color: Colors.white,
    background: Colors.background.lightBlueShade,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "transparent",
    marginLeft: 10,
    borderRadius: 1,
    fontSize: "14px",
    textTransform: "capitalize",
    ":first-child": {
      marginLeft: 0,
    },
    "@media (max-width: 767px)": {
      marginTop: 10,
      marginLeft: 0,
    },
  },
  selectedBtn: {
    width: "100%",
    height: "60px",
    color: Colors.white,
    background: Colors.background.green,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "transparent",
    marginLeft: 10,
    borderRadius: 1,
    textTransform: "capitalize",
    ":first-child": {
      marginLeft: 0,
    },
  },
  nextBtn: {
    width: 133,
    height: 55,
    color: Colors.white,
    fontWeight: 600,
    textTransform: "uppercase",
    fontSize: 18,
    background: Colors.background.green,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "transparent",
    marginBottom: 10,
    borderRadius: 1,
  },
  selectdOptionBtn: {
    backgroundColor: Colors.background.green,
  },
  errorArea: {
    color: Colors.red,
    fontSize: "16px",
    marginBottom: 20,
    fontWeight: "bold",
  },
  disclaimer: {
    fontSize: 13,
    color: Colors.white,
    fontWeight: "normal",
    lineHeight: 1.47,
  },
});
