import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useBlock11Styles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column-reverse",

    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      gap: theme.spacing(5),
    }
  },
  cartBackButton: {
    marginBottom: theme.spacing(3),
  },
  cartItems: {
    width: "100%",

    [theme.breakpoints.up("lg")]: {
      width: "57%",
    }
  },
  cartSidebar: {
    width: "100%",
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up("lg")]: {
      width: "41%",
      marginBottom: 0,
    }
  },
  cartLoaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(5),
  }
}));
