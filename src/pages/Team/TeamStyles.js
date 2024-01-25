// @flow
import { StyleSheet } from "aphrodite";
import { Fonts, Colors } from "../../theme";

export default StyleSheet.create({
  teamContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    position: "relative",

    "@media (max-width: 991px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  cardBox: {
    maxWidth: 530,
    width: "100%",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: Colors.background.secondary,
    "@media (max-width: 480px)": {
      alignItems: "flex-start",
      height: 290,
    },
  },
  cardContent: {
    color: Colors.text.accent,
    lineHeight: 1.44,
    width: "100%",
    maxWidth: 410,
    "@media (max-width: 530px)": {
      fontSize: 15,
    },
    "@media (max-width: 480px)": {
      fontSize: 12,
      width: "100%",
      margin: "41px auto",
      textAlign: "center",
    },
    "@media (max-width: 460px)": {
      width: 290,
    },
  },
  arrowOuterCont: {
    display: "flex",
    justifyContent: "flex-start",
    position: "absolute",
    bottom: 0,
    right: "49.5%",
    "@media (max-width: 1199px)": {
      right: "56.9%",
    },
    "@media (max-width: 992px)": {
      right: "88.3%",
    },
    "@media (max-width: 600px)": {
      right: "90.1%",
    },
    "@media (max-width: 530px)": {
      right: "0px",
      left: "0px",
    },
  },
  arrowIconCont: {
    width: 60,
    height: 60,
    backgroundColor: Colors.text.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    "@media (max-width: 600px)": {
      width: 50,
      height: 50,
    },
  },
  arrowIcon: {
    width: 13,
    "@media (max-width: 600px)": {
      width: 7,
    },
  },

  teamHead: {
    fontWeight: "bold",
    fontSize: 56,
    width: 460,
    lineHeight: 1.2,
    color: Colors.background.primary,
    "@media (max-width: 530px)": {
      fontSize: 30,
      marginBottom: 20,
      textAlign: "center",
      width: "100%",
      margin: "20px auto 20px",
    },
  },
  teamSectionView: {
    marginTop: 100,
    "@media (max-width: 1199px)": {
      marginTop: 50,
    },
    "@media (max-width: 992px)": {
      margin: "50px auto 0",
    },
  },
});
