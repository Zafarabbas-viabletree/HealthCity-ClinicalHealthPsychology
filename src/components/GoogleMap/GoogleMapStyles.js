// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: "100%",
    "@media (max-width:991px)": {
      height: 569,
      marginTop: 30,
    },
  },
});
