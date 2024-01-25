// @flow
import { StyleSheet } from "aphrodite";
import { Colors } from "../../theme";

export default StyleSheet.create({
  wrapper: {
    border: `1px dashed #ccc`,
    padding: "40px 10px",
    marginTop: "10px",
    borderRadius: "5px",
    textAlign: "center",
    cursor: "pointer",
    ":hover": {
      borderColor: "#424242",
    },
  },
  label: {
    fontWeight: "bold",
  },
  fileItem: {
    backgroundColor: "#ccc",
    borderRadius: "5px",
    padding: "5px 10px",
    marginBottom: "10px",
    marginRight: "10px",
  },
  fileItemsWrapper: {
    marginTop: "10px",
    flexWrap: "wrap",
    display: "flex",
  },
  crossButton: {
    // width: "20px",
    height: "20px",
    border: "none",
    outline: "none",
    color: "red",
    borderRadius: "10px",
    fontWeight: "bold",
    marginLeft: "10px",
    textAlign: "center",
    fontSize: "12px",
  },
  dragOver: {
    backgroundColor: "rgba(225, 225, 225, 0.4) ",
  },
});
