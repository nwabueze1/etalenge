import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";

export const useSuccessModalStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    position: "fixed",
    minHeight: "100dvh",
    width: "100vw",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    zIndex: 999,
  },
  modal: {
    background: (props) => props?.colors?.[700],
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    position: "relative",
    zIndex: 2,
    maxWidth: "85%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&.error": {
      justifyContent: "space-between",
      flexDirection: "row",
      padding: theme.spacing(1.5),
      gap: theme.spacing(1.5),
      "& > p": {
        marginLeft: 0,
      },
      [theme.breakpoints.up("md")]: {
        width: "65%",
      },
      [theme.breakpoints.up("lg")]: {
        padding: theme.spacing(2, 3),
      },
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(10),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(10, 39),
    },
  },
  heading: (props) => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 30),
    fontFamily: props?.fonts?.heading,
    textAlign: "center",
    margin: theme.spacing(1.5, 0),
  }),
  subtitle: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 6),
    fontFamily: (props) => props?.fonts?.body,
    textAlign: "center",
    margin: theme.spacing(1.5, "auto"),
    maxWidth: 492,
  },
  image: {
    height: 221,
    width: 331,
    display: "block",
  },
  closeIcon: {
    position: "absolute",
    cursor: "pointer",
    height: 25,
    width: 25,
    top: 20,
    right: 20,
    "&.error": {
      position: "static",
      height: 20,
      width: 20,
    },
  },
}));
