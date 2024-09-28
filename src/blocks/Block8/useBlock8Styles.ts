import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock8Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    background: (props) => props?.colors?.[300],
    "&.active": {
      border: `2px dashed ${theme.eleganteDesign.colors.primary}`,
    },
  },
  overlay: {
    position: "absolute",
    height: "100%",
    width: "100%",
    left: 0,
    top: 0,
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.14) 0%, rgba(0, 0, 0, 0.71) 100%)",
    zIndex: 1,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  contentCard: {
    background: (props) => props?.colors?.[300],
    padding: theme.spacing(1.5),
    position: "relative",
    zIndex: 2,
    borderRadius: 8,
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(5),
    },
  },
  header: {
    maxWidth: 290,
    [theme.breakpoints.up("md")]: {
      maxWidth: 380,
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: 520,
    },
  },
  heading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 34),
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[100],
  },
  subheading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 10),
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,
    margin: theme.spacing(1, 0, 0),
    lineHeight: "150%",
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2, 0, 0),
    },
  },
  featuredImageAttribution: {
    margin: theme.spacing(1, 0, 0, 0),
    fontSize: theme.typography.fontSize,
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,

    "& a": {
      color: (props) => props?.colors?.[200],
    },

    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.fontSize + 2,
      margin: theme.spacing(2, 0, 0, 0),
    },
  },
  block: {
    minHeight: 388,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    padding: theme.spacing(2.5, 0),
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(10, 0),
      minHeight: "60vh",
    },
  },
}));
