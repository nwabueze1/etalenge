import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";

export const useEmptyCartStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    position: "relative",
    top: "-2.5vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyCartIcon: {
    height: "auto",
    width: "85%",
    display: "block",
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: 400,
      height: 400,
    },
  },
  textContainer: (props) => ({
    margin: "0 auto",
    "& > h5": {
      fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 20),
      fontFamily: props?.fonts?.heading,
      fontWeight: theme.typography.fontWeightBold,
      color: props?.colors?.[200],
      textAlign: "center",
      margin: 0,
    },
    "& > p": {
      textAlign: "center",
      fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 6),
      fontFamily: props?.fonts?.body,
      fontWeight: theme.typography.fontWeightRegular,
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "50%",
    },
  }),
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  fadeIn: {
    animation: "$fadeIn 2s ease-in-out",
  },
}));
