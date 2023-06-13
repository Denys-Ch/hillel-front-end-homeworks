import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    width: "100%",
    margin: "0 auto",
    maxWidth: "75%",
  },
  form: {
    background: "#fff",
    padding: "10px",
    margin: {
      top: "25px",
      bottom: "25px",
    },
    display: "flex",
    justifyContent: "center",
  },
  input: {
    minHeight: "25px",
    padding: "10px",
    width: "100%",
    border: "1px solid",
  },
  inputBtn: {
    background: "#0be69d",
    border: "none",
    cursor: "pointer",
    width: "100px",
  },
  item: {
    display: "flex",
    padding: "10px",
    background: "#fff",
    borderRadius: "10px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  itemDesc: {
    flexGrow: 1,
    paddingLeft: "10px",
  },
  itemBtn: {
    background: "#0be69d",
    border: "1px solid black",
    cursor: "pointer",
    width: "95px",
    padding: "10px",
    marginRight: "5px",
  },
  header: {
    marginBottom: "30px",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "space-around",
    "& a": {
      textDecoration: "none",
      fontSize: "30px",
      color: "black",
      "&:hover": {
        color: "white",
      },
    },
  },
  contactList: {
    listStyle: "none",
    fontSize: "25px",
    "& a": {
      textDecoration: "none",
      color: "black",
      "&:hover": {
        color: "white",
      },
    },
  },
});
