import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";

export const useBlock18Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  container: {
    width: "85%",
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      width: "90%",
    },
  },
  box: {
    width: "40%",
    margin: "auto",
    padding: theme.spacing(18.5, 0),
    [theme.breakpoints.down("xl")]: {
      width: "80%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "80%",
      padding: theme.spacing(15, 0, 12.5, 0),
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    "& img": {
      position: "absolute",
      top: 0,
      objectFit: "cover",
      width: "100%",
    },
    "& p": {
      fontSize: theme.typography.fontSize + 12,
      textAlign: "center",
      fontFamily: (props) => props?.fonts?.body,
      padding: theme.spacing(2, 0),
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSize + 4,
      },
    },
  },
  heading: {
    fontSize: theme.typography.fontSize + 24,
    textAlign: "center",
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: (props) => props?.fonts?.heading,
    [theme.breakpoints.down("lg")]: {
      fontSize: theme.typography.fontSize + 16,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSize + 12,
    },
  },
  imgContainer: {
    position: "relative",
    marginTop: theme.spacing(8),
    height: 426,
    [theme.breakpoints.down("lg")]: {
      height: 333,
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      height: 183,
      marginTop: theme.spacing(3),
    },
  },
}));
