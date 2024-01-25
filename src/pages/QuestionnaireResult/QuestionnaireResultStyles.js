// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  questionaireResultsCont: {
    width: "100%",
    maxWidth: 915,
    margin: "0 auto",
    padding: " 100px 0",
    "@media (max-width: 767px)": {
      padding: "50px 15px",
      maxWidth: "100%",
    },
  },
  questionnaireResultHead: {
    textAlign: "center",
    color: Colors.background.primary,
    fontSize: 40,
    lineHeight: 1.2,
    fontWeight: "bold",
    textTransform: "capitalize",
    "@media (max-width: 767px)": {
      fontSize: 30,
    },
  },
  questionnaireResultPara: {
    margin: "20px 0",
    textAlign: "center",
    lineHeight: 1.47,
    fontSize: 18,
    "@media (max-width: 767px)": {
      fontSize: 15,
    },
  },
  appointmentBtn: {
    margin: "0 auto",
    width: 300,
    height: 55,
    backgroundColor: Colors.background.green,
    color: Colors.white,
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "transparent",
    borderRadius: 1,
  },
  questionaireBackCont: {
    background: Colors.text.primary,
    padding: " 100px 0",
    "@media (max-width: 767px)": {
      padding: "50px 0",
    },
  },
  questionaireBackRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 991px)": {
      flexDirection: "column",
    },
  },
  questionairePara: {
    color: Colors.white,
    fontWeight: 600,
    fontSize: 32,
    lineHeight: 1.44,
    width: "100%",
    maxWidth: 700,
    textTransform: "capitalize",
    "@media (max-width: 570px)": {
      textAlign: "center",
    },
  },
  nextQuestionaireBtn: {
    width: 235,
    height: 55,
    border: "transparent",
    background: Colors.white,
    color: Colors.text.primary,
    fontSize: 18,
    fontWeight: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "uppercase",
    "@media (max-width: 991px)": {
      marginTop: 20,
    },
  },
  resultCriteriaBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    margin: "0 auto",
    width: 330,
    lineHeight: 1.4,
    fontSize: 14,
    color: Colors.text.primary,
    border: `1px solid ${Colors.text.primary}`,
    "@media (max-width: 359px)": {
      width: "100%",
    },
  },
  resultCriteriaHead: {
    fontWeight: "bold",
    marginBottom: 5,
    color: Colors.text.primary,
  },
});
