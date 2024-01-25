// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Fonts, Images } from "../../../theme";

export default StyleSheet.create({
  TeamSec: {
    width: "100%",
    height: "100%",
    padding: "50px 0 100px",
    // backgroundColor: Colors.background.secondary,
    // backgroundImage: `url(${Images.team_bg_image})`,
    // backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    "@media (max-width: 1199px)": {
      marginTop: "50px",
      padding: "50px 0",
    },
    "@media (max-width: 991px)": {
      marginTop: "50px",
      padding: "30px 0",
    },
  },
  teamContainer: {
    display: "flex",
    flexDirection: "column",
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
    background: Colors.background.primary,
    "@media (max-width: 480px)": {
      alignItems: "flex-start",
      height: 290,
    },
  },
  cardContent: {
    color: Colors.background.primary,
    lineHeight: 1.44,
    marginTop: 20,
    width: "100%",
    textAlign: "center",
    "@media (max-width: 530px)": {
      fontSize: 15,
    },
    "@media (max-width: 480px)": {
      fontSize: 12,
      width: "100%",
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
    textAlign: "center",
    color: Colors.background.primary,
    "@media (max-width: 991px)": {
      marginBottom: 30,
    },
    "@media (max-width: 530px)": {
      fontSize: 30,
      textAlign: "center",
      width: "100%",
      margin: "10px auto 10px",
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
  teamBtnCont: {
    display: "flex",
    justifyContent: "center",
  },
  teamBtn: {
    width: 183,
    height: 55,
    background: Colors.background.green,
    borderRadius: 1,
    border: "transparent",
    color: Colors.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: 600,
    textTransform: "uppercase",
    "@media (max-width: 991px)": {
      margin: "20px 0 0",
    },
    "@media (max-width: 600px)": {
      width: 150,
      fontSize: 14,
      height: 40,
    },
  },
});
