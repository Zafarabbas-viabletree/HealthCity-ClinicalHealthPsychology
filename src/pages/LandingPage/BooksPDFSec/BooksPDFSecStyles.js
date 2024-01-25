// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images } from "../../../theme";
// import { Colors } from "../../theme";

export default StyleSheet.create({
  bookPdfContainer: {
    position: "relative",
  },
  bookImage: {
    width: 254,
    height: "auto",
    "@media(max-width: 991px)": {
      width: "100%",
    },
  },
  bookBox: {
    padding: "41px",
    position: "absolute",
    top: 34,
    right: 0,
    width: 353,
    minHeight: 364,
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    "@media(max-width: 991px) and (min-width: 480px)": {
      height: "400px",
      top: 0,
      bottom: 0,
      margin: "auto",
    },
    "@media (max-width: 479px)": {
      position: "relative",
      top: 20,
      boxShadow: "none",
      // padding: 0,
      marginBottom: 50,
      width: "100%",
    },
  },
  bookHeading: {
    color: "rgba(255, 255, 255, 0.5)",
    position: "relative",
    textAlign: "center",
    ":before": {
      content: "''",
      position: "absolute",
      width: 70,
      height: 1,
      background: "rgba(255, 255, 255, 0.5)",
      display: "inline-block",
      top: 5,
      left: 0,
    },
    "@media(max-width: 991px)": {
      fontSize: 20,
      color: "rgba(255, 255, 255, 0.8)",
      ":before": {
        color: "rgba(255, 255, 255, 0.8)",
      },
    },
  },
  bookTitle: {
    fontSize: 32,
    color: Colors.white,
    fontWeight: 600,
    margin: "18px 0",
    lineHeight: 1.4,
    "@media(max-width: 991px) and (min-wdith: 480px)": {
      fontSize: 40,
    },
  },
  downloadBtn: {
    width: 163,
    height: 52,
    background: Colors.white,
    borderRadius: 1,
    border: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    textTransform: "uppercase",
  },

  wrapper: {
    backgroundColor: Colors.lightGray,
    padding: "50px 0",
  },
});
