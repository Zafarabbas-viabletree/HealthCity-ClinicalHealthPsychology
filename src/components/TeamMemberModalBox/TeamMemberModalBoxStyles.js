// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  itemContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "stretch",
    "@media (max-width: 992px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  profileInnerCont: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    "@media (max-width: 992px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  downloadOption: {
    color: Colors.background.primary,
    fontWeight: "bold",
    textDecoration: "underline",
    alignSelf: "center",
    "@media (max-width: 992px)": {
      marginTop: 20,
    },
  },
  itemName: {
    fontWeight: "normal",
    fontSize: 28,
    color: Colors.background.primary,
    textTransform: "uppercase",
    marginTop: 10,
    "@media (max-width: 992px)": {
      textAlign: "center",
    },
    "@media (max-width: 600px)": {
      fontSize: 20,
      marginTop: 20,
    },
  },
  itemTitle: {
    fontWeight: "normal",
    fontSize: 14,
    color: Colors.text.accent,
    textTransform: "capitalize",
    marginTop: 10,
    lineHeight: 1.47,
    maxWidth: 480,
    "@media (max-width: 992px)": {
      textAlign: "center",
    },
  },
  itemDesc: {
    fontWeight: "normal",
    opacity: 0.6,
    color: Colors.text.accent,
    marginTop: 30,
    width: "100%",
    lineHeight: 1.47,
    "@media (max-width: 992px)": {
      textAlign: "center",
    },
    "@media (max-width: 840px)": {
      width: "100%",
      textAlign: "center",
    },
  },
  itemImage: {
    width: 260,
    "@media (max-width: 420px)": {
      width: 180,
    },
  },
});
