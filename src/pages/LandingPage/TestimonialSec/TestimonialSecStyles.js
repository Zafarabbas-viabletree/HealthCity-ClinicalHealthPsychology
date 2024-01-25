// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images } from "../../../theme";
// import { Colors } from "../../theme";

export default StyleSheet.create({
  testimonialBox: {
    position: "relative",
    width: 335,
    height: "auto",
    minHeight: 361,
    background: Colors.background.secondary,
    padding: "35px 38.3px 33px 36.2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    ":before": {
      content: '""',
      width: 34,
      height: 31,
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      background: `url(${Images.inverted_commas}) no-repeat`,
      backgroundSize: "contain",
      //   backgroundPosition: "10% 10%",
    },
    "@media (max-width: 1199px)": {
      width: "90%",
    },
    "@media (max-width: 767px)": {
      width: "100%",
      alignItems: "center",
      padding: 10,
      textAlign: "center",
    },
  },

  boxContent: {
    lineHeight: 1.5,
    fontS: Colors.text.accent,
    opacity: 0.6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  prevNextContainer: {
    marginTop: 30,
    display: "flex",
    justifyContent: "flex-start",
  },
  prevBtn: {
    border: "transparent",
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  nextBtn: {
    marginLeft: 18,
    border: "transparent",
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  arrowIcon: {
    width: 28,
  },
});
