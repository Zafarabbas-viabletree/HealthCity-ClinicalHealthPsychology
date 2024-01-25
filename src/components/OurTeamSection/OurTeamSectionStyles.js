// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  profileCont: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      flexDirection: "column",
    },
  },
  profileInfoCont: {
    ":nth-child(odd)": {
      // margin: "20px auto",
    },
    alignSelf: "baseline",
    marginBottom: 25,
    cursor: "pointer",
    "@media (max-width: 600px)": {
      marginTop: 20,
    },
  },
  imageHead: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: "100%",
    maxWidth: 225,
    "@media (max-width: 992px)": {
      maxWidth: 170,
      margin: "auto",
    },
  },
  profileContent: {
    width: "100%",
    height: 200,
    textAlign: "center",
    padding: "23px 30px",
    "@media (max-width: 992px)": {
      height: "100%",
      padding: 0,
    },
  },
  profileName: {
    margin: "18px auto 0",
    color: Colors.text.accent,
    fontSize: 20,
    fontWeight: 600,
    textTransform: "uppercase",
    lineHeight: 1.25,
    // maxWidth: 190,
    "@media (max-width: 992px)": {
      fontSize: 16,
    },
  },
  profileTitles: {
    margin: "12px auto 0",
    color: Colors.text.accent,
    fontSize: 14,
    textTransform: "capitalize",
    lineHeight: 1.43,
    "@media (max-width: 992px)": {
      fontSize: 12,
      // maxWidth: 120,
    },
  },
});
