// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  innerContainer: {
    padding: "60px 0",
    position: "relative",
    height: 580,
    "@media (max-width: 767px)": {
      padding: "40px 0",
      height: "auto",
    },
  },
  servImg: {
    width: 550,
    height: "auto",
    float: "right",
    "@media (max-width: 767px)": {
      width: "100%",
    },
  },

  servDetailBox: {
    background: Colors.background.secondary,
    padding: "53px 44px 53px 61px",
    position: "absolute",
    top: 200,
    left: 0,
    width: 611,
    height: "auto",
    boxShadow: "-4px 4px 10px 0 rgba(48, 75, 147, 0.4)",
    "@media (max-width: 767px)": {
      position: "relative",
      top: 30,
      background: "transparent",
      boxShadow: "none",
      padding: 0,
      width: "100%",
    },
  },
  servHeading: {
    color: Colors.text.primary,
    fontSize: 25,
    fontWeight: 600,
    textTransform: "capitalize",
    lineHeight: 1.4,
  },
  servDesc: {
    marginTop: 20,
    color: Colors.text.accent,
    lineHeight: 1.44,
  },
  servIconCont: {
    position: "absolute",
    top: 140,
    right: 90,
    left: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: 60,
    height: 60,
    backgroundColor: Colors.text.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 1199px)": {
      right: 228,
    },
    "@media (max-width: 991px)": {
      right: 470,
    },
    "@media (max-width: 767px)": {
      position: "relative",
      top: 15,
      width: 40,
      height: 40,
      marginLeft: 0,
      marginRight: 0,
      left: 0,
    },
  },
  servIcon: {
    width: 27,
    "@media (max-width: 767px)": {
      width: 17,
    },
  },
});
