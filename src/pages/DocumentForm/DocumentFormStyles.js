// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images } from "../../theme";

export default StyleSheet.create({
  heroWrapper: {
    flex: 1,
    position: "relative",
    background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${Images.written_reports})`,
    backgroundPosition: "10% 30",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 767px)": {
      height: "60vh",
    },
  },
  heroBookingDetail: {
    background: Colors.background.secondary,
    paddingTop: "25px",
    paddingBottom: 0,
    paddingRight: "40px",
    paddingLeft: "40px",
  },
  heading1: {
    fontSize: "50px",
    textTransform: "capitalize",
    lineHeight: 1.22,
    color: Colors.white,
    alignSelf: "flex-end",
    "@media (max-width: 767px)": {
      paddingLeft: "15px",
      paddingRight: "15px",
    },
  },
  label1: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  label2: {
    color: Colors.text.primary,
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "8px",
    marginBottom: "25px",
  },
  heading2: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  wrapper1: {
    paddingRight: "60px",
    minHeight: "280px",
    borderRight: "2px solid #e0e0e0",
    "@media (max-width: 767px)": {
      borderRight: "none",
    },
  },
  fileRow: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
  },
  fileItem: {
    backgroundColor: Colors.background.primary,
    color: Colors.white,
    padding: "6px 20px",
    marginRight: "10px",
    marginBottom: "10px",
    borderRadius: "10px",
    cursor: "pointer",
  },
  fileAnchor: {
    color: Colors.white,
  },
  textArea: {
    width: "100%",
    minHeight: "100px",
    padding: "10px",
    borderColor: Colors.background.borderColor,
    borderRadius: "5px",
    resize: "none",
    marginTop: "20px",
  },
  wrapper2: {
    paddingLeft: "40px",
    "@media (max-width: 767px)": {
      paddingLeft: "15px",
      marginTop: "15px",
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
    marginTop: 20,
  },
  sendBtnWrapper: {
    width: 119,
  },
  error: { color: Colors.red, fontSize: "14px", marginTop: "10px" },
  thankYouMessage: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "end",
    "@media (max-width: 767px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  thankYouIconCont: {
    borderRadius: "100%",
    border: `3px solid ${Colors.text.primary}`,
    width: 122,
    height: 122,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  thankYouIcon: {
    fontSize: 70,
    color: Colors.text.primary,
  },
  messageCont: {
    marginLeft: 30,
    "@media (max-width: 767px)": {
      textAlign: "center",
      marginTop: 20,
      marginLeft: 0,
    },
  },
  messageHead: {
    color: Colors.text.primary,
    fontSize: 30,
    marginBottom: 16,
  },
  messageText: {
    color: Colors.text.secondary,
    lineHeight: 1.44,
    fontS: 18,
  },
});
