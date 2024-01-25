// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  termsAndConditionsImage: {
    position: "relative",
    background: "rgba(14, 158, 148, 0.8)",
    width: "100%",
    height: "100%",
    padding: "100px 0",
  },
  secTitle: {
    width: 550,
    fontSize: 50,
    color: Colors.white,
    fontWeight: 700,
    "@media (max-width: 767px)": {
      width: "100%",
      fontSize: 30,
    },
    "@media (max-width: 415px)": {
      fontSize: 30,
    },
  },
});
