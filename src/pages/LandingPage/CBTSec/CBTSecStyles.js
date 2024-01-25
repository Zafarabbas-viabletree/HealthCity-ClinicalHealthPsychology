// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Fonts, Images } from "../../../theme";

export default StyleSheet.create({
  CBTSect: {
    width: "100%",
    height: "100%",
    padding: "50px 0 100px",
    background: Colors.background.secondary,
    "@media (max-width: 1199px)": {
      marginTop: "50px",
      padding: "50px 0",
    },
    "@media (max-width: 991px)": {
      marginTop: "50px",
      padding: "30px 0",
    },
  },
  CBTCont: {
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
  cardContent: {
    color: Colors.text.primary,
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

  CBTHead: {
    fontWeight: "bold",
    fontSize: 56,
    textAlign: "center",
    color: Colors.text.primary,
    lineHeight: 1.5,
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
  CBTBtnCont: {
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
  },
  CBTBtn: {
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
