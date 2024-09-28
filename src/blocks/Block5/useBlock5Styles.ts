import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock5Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  baseRoot: {
    position: "relative",
    background: (props) => props?.colors?.[200],
    minHeight: "40vh",
    [theme.breakpoints.up("lg")]: {
      height: "90vh",
    },
    "&.active": {
      border: `2px dashed ${theme.eleganteDesign.colors.primary}`,
    },
  },
  root: {
    position: "relative",
    width: "100%",
    minHeight: "40vh",
    "&.content": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      [theme.breakpoints.up("md")]: {
        alignItems: "start",
        justifyContent: "end",
      },
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "90vh",
    },
  },
  blockRoot: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginBottom: 100,
    },
  },
  base: {
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      height: "90vh",
    },
  },
  imageContainer: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 2,
  },
  image: {
    display: "block",
    position: "absolute",
    height: "100%",
    objectFit: "cover",
    width: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
    visibility: "hidden",
    opacity: 0,
    transition: "all 0.3s ease",
    "&.active": {
      visibility: "visible",
      opacity: 1,
    },
  },
  overlay: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(180deg, rgba(0, 0, 0, 0.4) -23.35%, rgba(0, 0, 0, 1) 100%)",
    zIndex: 1,
  },
  blockTextContainer: {
    position: "relative",
    zIndex: 3,
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "start",
      textAlign: "start",
      width: "45%",
    },
  },
  header: {
    position: "relative",
    zIndex: 3,
    display: "none",
    "&.active": {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      [theme.breakpoints.up("md")]: {
        alignItems: "start",
        textAlign: "start",
        width: "80%",
      },
    },
    animationName: "fadeIn",
    animationDuration: "4s",
    animationTimingFunction: "ease",
  },
  heading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 22),
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[100],
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1.4),
    lineHeight: "140%",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: "65%",
      margin: 0,
    },
  },
  trackBtn: {
    width: 30,
    height: 2,
    background: (props) => props?.colors?.[300],
    border: 0,
    cursor: "pointer",
    "&.active": {
      background: (props) => props?.colors?.[100],
    },
    [theme.breakpoints.up("lg")]: {
      width: 60,
    },
  },
  trackContainer: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    gap: theme.spacing(1),
  },
  nextPrevBtn: (props) => ({
    cursor: "pointer",
    border: 0,
    height: 26,
    width: 26,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: props?.colors?.[100],
    borderRadius: 26,
    zIndex: 5,
    position: "relative",
    "& .icon": {
      fill: props?.colors?.[200],
      fontSize: theme.typography.fontSize + 2,
    },

    [theme.breakpoints.up("lg")]: {
      borderRadius: 60,
      height: 60,
      width: 60,
      "& .icon": {
        fontSize: theme.typography.fontSize * 2,
      },
    },
  }),
  nextPrevBtnContainer: {
    display: "flex",
    marginTop: theme.spacing(3),
    gap: theme.spacing(2),

    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      gap: theme.spacing(2),
    },
    [theme.breakpoints.up("lg")]: {
      gap: theme.spacing(8),
      bottom: 64,
    },
    [theme.breakpoints.up("xl")]: {
      bottom: 100,
    },
  },
  actionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",    
    marginTop: theme.spacing(2.5),
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
    },
  },
  msc: {
    position: "relative",
    width: "85%",
    margin: "0 auto",
    maxWidth: theme.eleganteStyles.maxWidth,
  },
  "@keyframes fadeIn": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 0.5,
    },
  },
}));
