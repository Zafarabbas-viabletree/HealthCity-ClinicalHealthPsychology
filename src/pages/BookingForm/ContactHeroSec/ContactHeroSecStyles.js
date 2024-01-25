// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images, Fonts } from "../../../theme";

export default StyleSheet.create({
  heroSectionInner: {
    position: "relative",
    background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Images.booking_sec_image})`,
    backgroundPosition: "10% 30",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // height: "calc(100vh - 160px)",
    height: "65vh",
    "@media (max-width: 600px)": {
      height: "50vh",
    },
  },
  heroContentCont: {
    width: 520,
    color: Colors.white,
    paddingTop: 70,
    "@media (max-width: 1100px)": {
      paddingTop: 30,
    },
    "@media (max-width: 600px)": {
      maxWidth: "100%",
      paddingTop: 20,
    },
  },
  heroContentHead: {
    fontWeight: 600,
    fontSize: 40,
    textTransform: "capitalize",
    lineHeight: 1.22,
    "@media (max-width: 600px)": {
      fontSize: 25,
    },
    "@media (max-width: 415px)": {
      fontSize: 20,
    },
  },
  heroContentDesc: {
    margin: "20px 0",
    lineHeight: 1.44,
    "@media (max-width: 445px)": {
      marginBottom: 10,
      fontSize: 13,
    },
  },
  heroContentDescTwo: {
    lineHeight: 1.44,
    "@media (max-width: 445px)": {
      fontSize: 13,
    },
  },
  cardHeading: {
    color: Colors.white,
    fontSize: 46,
    fontWeight: 600,
    textTransform: "capitalize",
    marginTop: 24,
    marginBottom: 40,
    lineHeight: 1.21,
    width: "100%",
    maxWidth: 410,
    "@media (max-width: 600px)": {
      fontSize: 30,
      maxWidth: 270,
      marginBottom: 30,
    },
    "@media (max-width: 415px)": {
      fontSize: 27,
      maxWidth: 210,
    },
  },
  cardSubHeading: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: 600,
    textTransform: "capitalize",
    "@media (max-width: 600px)": {
      fontSize: 20,
    },
    "@media (max-width: 415px)": {
      fontSize: 15,
    },
  },
  bookNowBtn: {
    width: 183,
    height: 55,
    background: Colors.white,
    borderRadius: 1,
    border: "transparent",
    color: Colors.text.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    fontWeight: 600,
    "@media (max-width: 600px)": {
      width: 150,
      fontSize: 14,
      height: 40,
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
});
