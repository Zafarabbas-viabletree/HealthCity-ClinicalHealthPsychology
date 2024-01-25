// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Fonts, Images } from "../../../theme";

export default StyleSheet.create({
  CTABannerSec: {
    width: "100%",
    height: "100%",
    // marginTop: "100px",
    padding: "70px 0",
    backgroundColor: Colors.background.primary,
    backgroundImage: `url(${Images.cta_bg_image})`,
    backgroundSize: "130%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 767px)": {
      padding: 30,
    },
  },
  // WhyKiffgoRow: {
  //   paddingTop: "0",
  //   marginTop: "70px",
  //   "@media (max-width: 560px)": {
  //     marginTop: "0px",
  //   },
  // },
  ctaContent: {
    color: Colors.white,
    lineHeight: 1.47,
    fontSize: 50,
    fontWeight: 600,
    textTransform: "capitalize",
    textAlign: "center",
    "@media (max-width: 1199px)": {
      fontSize: 40,
    },
    "@media (max-width: 992px)": {
      fontSize: 30,
    },
    "@media (max-width: 767px)": {
      fontSize: 20,
    },
  },
  ctaBtn: {
    width: 183,
    height: 55,
    background: Colors.white,
    borderRadius: 1,
    border: "transparent",
    color: Colors.background.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    fontWeight: 600,
    margin: "20px 0",
    "@media (max-width: 600px)": {
      width: 150,
      fontSize: 14,
      height: 40,
    },
  },
});
