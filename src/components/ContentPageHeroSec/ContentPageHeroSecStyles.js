// @flow
import { StyleSheet } from "aphrodite";
import { Colors, Images, Fonts } from "../../theme";

export default StyleSheet.create({
  heroSectionInner: {
    position: "relative",
    background: Colors.background.shadyStuff,
    // backgroundPosition: "10% 10%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    // height: "calc(100vh - 160px)",
    height: "100%",
  },
  heroContentCont: {
    color: Colors.white,
    padding: "100px 0",
    "@media (max-width: 600px)": {
      maxWidth: "100%",
      padding: "30px 0",
    },
  },
  heroContentHead: {
    fontWeight: 600,
    fontSize: 50,
    textTransform: "capitalize",
    lineHeight: 1.22,
    "@media (max-width: 600px)": {
      fontSize: 40,
    },
    "@media (max-width: 415px)": {
      fontSize: 30,
    },
  },
});
