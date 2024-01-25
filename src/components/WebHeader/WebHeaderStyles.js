// @flow

import { StyleSheet } from "aphrodite";
import { camelCase, repeat } from "lodash";
import { node } from "prop-types";
import { Colors, Fonts, Images } from "../../theme";
// import { colors } from 'react-select/src/theme';

export default StyleSheet.create({
  headerCont: {
    height: 70,
    "@media (max-width: 992px)": {
      height: 70,
    },
  },
  siteHeader: {
    backgroundColor: Colors.background.primary,
    // borderBottom: "1px solid #ffffff",
    display: "flex",
    alignItems: "center",
    padding: "0 30px",
    position: "fixed",
    width: "100%",
    left: 0,
    top: 0,
    zIndex: 10,
  },

  headerSide: {
    display: "none",

    "@media (min-width: 1400px)": {
      width: "calc((100vw - 1380px) / 2)",
      display: "flex",
    },
  },

  headerSideInner: {
    display: "none",

    "@media (max-width: 1399px)": {
      display: "flex",
    },
    "@media (max-width: 992px)": {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  },

  hederContainer: {
    width: "100%",
    "@media (max-width: 1399px)": {
      display: "flex",
      alignItems: "center",
      justifyContent: "stretch",
    },
    "@media (max-width: 992px)": {
      height: 70,
    },
  },

  logoImage: {
    display: "block",
    maxWidth: 250,
    height: 55,
    "@media(max-width: 580px)": {
      maxWidth: 200,
    },
  },

  navBar: {
    paddingTop: 0,
    paddingBottom: 0,
    "@media (max-width: 992px)": {
      position: "absolute",
      width: "96%",
      height: "50px",
      padding: "0",
      top: "10px",
      justifyContent: "flex-end",
      left: 0,
    },
    "@media (max-width: 1399px)": {
      flex: 1,
    },
  },

  hamburgerMenu: {
    display: "none",
    "@media (max-width: 992px)": {
      position: "absolute",
      left: "20px",
      display: "block",
      cursor: "pointer",
    },
  },

  hamburgerIcon: {
    height: "2px",
    backgroundColor: `${Colors.white}`,
    display: "block",
    marginBottom: "5px",
    ":nth-child(1) ": {
      width: "24px",
    },
    ":nth-child(2) ": {
      width: "20px",
    },
    ":nth-child(3) ": {
      width: "16px",
    },
  },

  showMenu: {
    left: "0",
    zIndex: "999999",
    overflowY: "scroll",
  },

  collabeMenuWrap: {
    position: "fixed",
    zIndex: "1000",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.3)",
    opacity: "1",
    transition: "all .4s ease-in ",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },

  collabeMenu: {
    width: "100%",
    "@media (min-width: 992px)": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "@media (max-width: 992px)": {
      alignItems: "center",
      justifyContent: "center",
      position: "fixed",
      left: "-700px",
      top: "0",
      bottom: "0",
      backgroundColor: `${Colors.background.primary}`,
      width: "300px",
      padding: "0  30px 15px",
      boxShadow: "10px 0px 16px 0 #00000014",
      transition: ".3s linear all",
    },
  },

  closeMenu: {
    display: "none",
    "@media (max-width: 992px)": {
      display: "block",
      position: "absolute",
      right: "15px",
      top: "15px",
      cursor: "pointer",
    },
  },

  CloseBtn: {
    width: "20px",
    cursor: "pointer",
    marginTop: "13px",
    marginRight: "10px",
  },

  NavbarUl: {
    margin: "0 auto",
    "@media (min-width: 992px)": {
      alignItems: "center",
    },
    "@media (max-width: 992px)": {
      width: "100%",
      marginTop: "18px",
      lineHeight: "25px",
    },
  },

  NavItem: {
    marginRight: 30,
    textTransform: "capitalize",
    "@media (max-width: 991px)": {
      padding: "5px 0",
      marginRight: 0,
      width: "100%",
      maxWidth: 190,
    },
  },

  // borderBottom: {
  //   '@media (max-width: 991px)': {
  //     borderBottom: '1px solid rgba(0, 0, 0, 0.13)'
  //   }
  // },

  houseIconStyle: {
    display: "flex",
    alignItems: "center",
    opacity: "1",
    ":after": {
      content: '""',
      height: 22,
      width: 24,
      display: "block",
      backgroundImage: `url(${Images.house})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    ":hover": {
      ":after": {
        backgroundImage: `url(${Images.house_sprite})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
    },
  },

  houseIconStyleActive: {
    ":after": {
      backgroundImage: `url(${Images.house_sprite})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
  },

  navAnchorTagIcon: {
    color: Colors.text.primary,
    fontSize: "14px",
    opacity: "0.6",
    display: "block",
    padding: "0 5px",
    height: "70px",
    lineHeight: "66px",
    borderBottom: `5px solid ${Colors.white}`,
    "@media (max-width: 991px)": {
      borderBottom: "transparent",
      height: 60,
    },
    ":hover": {
      textDecoration: "none",
      color: Colors.background.primary,
    },
  },

  navAnchorTag: {
    color: Colors.white,
    fontSize: "14px",
    fontWeight: "bold",
    display: "block",
    padding: "0 5px",
    height: "70px",
    lineHeight: "66px",
    borderBottom: `4px solid ${Colors.background.primary}`,
    "@media (max-width: 991px)": {
      borderBottom: `1px solid ${Colors.white}`,
      height: 60,
    },
    ":hover": {
      textDecoration: "none",
      color: Colors.white,
      borderBottom: `5px solid ${Colors.white}`,
    },
  },

  navAnchorTagActiveIcon: {
    "@media (min-width: 992px)": {
      fontWeight: "bold",
      borderBottom: `4px solid ${Colors.background.primary}`,
      opacity: "1 !important",
    },
  },

  navAnchorTagActive: {
    fontWeight: "bold",
    borderBottom: `5px solid ${Colors.white}`,
    opacity: "1 !important",
  },

  counsellingBtn: {
    background: Colors.white,
    border: Colors.white,
    color: Colors.background.primary,
    borderRadius: 4,
    outline: 0,
    height: 34,
    width: 174,
    fontSize: 12,
    lineHeight: 1.75,
    textTransform: "uppercase",
    "@media (max-width: 991px)": {
      margin: "24px auto",
    },
  },

  headerRightSide: {
    justifyContent: "flex-end",
    padding: 0,
  },

  headerNotification: {
    display: "flex",
    alignItems: "center",
  },

  notificationIcon: {
    height: 20,
    width: 16,
    display: "block",
  },

  notificationItem: {
    color: Colors.text.primary,
    display: "block",
    borderBottom: `solid 1px ${Colors.blackTint}`,
    padding: 16,
    width: 250,
    lineHeight: "1.4em",
    ":last-child": {
      borderBottom: "none",
    },
  },

  userProfileMenuItem: {
    color: Colors.text.primary,
    display: "block",
    borderBottom: `solid 1px ${Colors.blackTint}`,
    padding: 16,
    width: 250,
    ":last-child": {
      borderBottom: "none",
    },
  },

  profilePicture: {
    height: "44px",
    width: "44px",
    borderRadius: "100%",
    background: Colors.blackTint,
  },

  userProfileDropDownList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "stretch",
  },

  userListIcons: {
    marginRight: 10,
  },

  appversion: {
    position: "absolute",
    right: 0,
    bottom: 0,
    opacity: "0.25",
    padding: 5,
    fontSize: "10px",
  },
});
