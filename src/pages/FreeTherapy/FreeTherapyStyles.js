// @flow
import { StyleSheet } from "aphrodite";
import { upperCase } from "lodash";
import { Colors } from "../../theme";

export default StyleSheet.create({
  partnerCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  partnerImage: {
    width: 100,
    marginTop: 20,
  },
  officeImg: {
    width: "100%",
    maxWidth: 500,
    marginTop: 20,
  },
  aboutImgCont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "self-end",
  },
  aboutImg: {
    width: "100%",
    maxWidth: 440,
  },
  bookNowBtn: {
    width: 183,
    height: 55,
    color: Colors.white,
    borderRadius: 1,
    border: "transparent",
    background: Colors.background.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 600,
    margin: "20px 0",
    textTransform: "upperCase",
    "@media (max-width: 600px)": {
      width: 150,
      fontSize: 14,
      height: 40,
    },
  },
});
