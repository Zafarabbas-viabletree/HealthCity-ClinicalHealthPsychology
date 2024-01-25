// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Fonts } from "../../theme";

export default StyleSheet.create({
  container: {
    maxWidth: "1100px !important",
    margin: "0 auto",
  },
  footerLogoImg: {
    maxWidth: "277px",
  },
  footerBottom: {
    backgroundColor: `${Colors.bgGreen}`,
  },
  siteFooter: {
    backgroundColor: Colors.background.primary,
    "@media (max-width: 767px)": {
      paddingTop: 0,
    },
  },
  bold: {
    fontWeight: "800",
    color: Colors.white,
  },
  footerWrap: {
    paddingTop: "20px",
    paddingBottom: "62px",
    "@media (max-width: 991px)": {
      paddingTop: "0px",
      paddingBottom: "30px",
    },
  },
  footerItem: {
    "@media (max-width: 992px)": {
      marginTop: "40px",
    },
    "@media (max-width: 767px)": {
      flex: "0 0 50%",
    },
  },
  dNone: {
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
  socialWrap: {
    marginTop: "50px",
    // display: "none",
    "@media (max-width: 767px)": {
      display: "flex",
    },
  },
  emailhide: {
    display: "none",
    "@media (max-width: 767px)": {
      display: "block",
    },
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
    "@media(max-width: 580px)": {
      flexDirection: "column",
    },
  },
  copyright: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logoCaption: {
    color: Colors.white,
    marginTop: 80,
    lineHeight: 1.19,
    fontSize: "16px",
    marginBottom: 0,
    "@media(max-width: 1199px)": {
      marginTop: 70,
    },
    "@media(max-width: 580px)": {
      marginTop: 30,
    },
  },
  footerLink: {
    color: Colors.white,
  },
  cardOptionsCont: {
    marginTop: 80,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "@media(max-width: 580px)": {
      justifyContent: "flex-start",
      marginTop: 30,
    },
  },
  cardCss: {
    width: 43,
  },
  iconCss: {
    width: 22,
  },
  footerItemOne: {
    flex: "0 0 30%",
    "@media(max-width: 1199px)": {
      flex: "0 0 50%",
      marginTop: 50,
    },
  },
  footerItemTwo: {
    flex: "0 0 15%",
    "@media(max-width: 1199px)": {
      flex: "0 0 50%",
      marginTop: 50,
      order: 3,
      "@media(max-width: 580px)": {
        order: 2,
      },
    },
  },
  footerItemThree: {
    flex: "0 0 25%",
    "@media(max-width: 1199px)": {
      flex: "0 0 50%",
      marginTop: 50,
      order: 4,

      justifyContent: "flex-end",
      "@media(max-width: 580px)": {
        order: 3,
        justifyContent: "flex-start",
      },
    },
  },
  footerItemFour: {
    flex: "0 0 18%",
    "@media(max-width: 1199px)": {
      flex: "0 0 50%",
      marginTop: 50,
      order: 2,
      "@media(max-width: 580px)": {
        order: 4,
      },
    },
  },
  socialIconsCont: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    "@media(max-width: 580px)": {
      justifyContent: "flex-start",
    },
  },
  socialIconsSpace: {
    marginRight: 22,
  },
  cardsSpace: {
    marginRight: 8,
  },
});
