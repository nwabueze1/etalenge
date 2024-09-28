import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock1Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    position: "sticky",
    width: "100%",
    zIndex: 100,
    top: 0,
    left: 0,
    background: (props) => props?.colors?.[100],
    padding: theme.spacing(2, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 0),
    },
    borderBottom: (props) => `1px solid ${props?.colors?.[300]}`,
    "&.active": {
      border: `2px dashed ${theme.eleganteDesign.colors.primary}`,
    },
  },
  rootBackground: (props) => ({
    background: props?.colors?.[100],
  }),
  nav: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "center",
    gap: theme.spacing(2),
    position: "relative",
  },
  navLogo: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 22),
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.typography.fontWeightBold,
    fontStyle: "italic",
    transition: "transform 0.4s ease",
    outline: "none",
    margin: 0,
    "&:hover": {
      transform: "scale(1.1)",
    },
    flex: 1,
    color: (props) => props?.colors?.[200],
    "&> a": {
      textDecoration: "none",
      color: "inherit",
      fontFamily: "inherit",
    },
    [theme.breakpoints.up("lg")]: {
      flex: "unset",
    },
  },
  navLinkContainer: {
    listStyle: "none",
    gap: theme.spacing(5),
    alignItems: "center",
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "inline-flex",
    },
  },
  navLink: {
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize + 4,
    width: "fit-content",
    "&.active": {
      borderBottom: (props) => `2px solid ${props?.colors?.[200]}`,
    },
    "& > a": {
      textDecoration: "none",
      color: "inherit",
      cursor: "pointer",
      position: "relative",
    },
    "& > a::after": {
      content: "''",
      position: "absolute",
      background: (props) => props?.colors?.[200],
      width: 0,
      left: 0,
      height: 2,
      bottom: -3,
      transition: "width 0.4s ease",
    },
    "&:hover": {
      "&.active > a::after": {
        width: "0 !important",
      },

      [theme.breakpoints.up("lg")]: {
        "& > a::after": {
          width: "100%",
        },
      },
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 4),
    },
  },
  iconBlockContainer: {
    display: "flex",
    gap: 29,
  },
  iconBlock: {
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(1),
    cursor: "pointer",
    textDecoration: "none",
  },
  iconBlockText: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 4),
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,
  },
  icon: {
    fontSize: theme.typography.fontSize + 10,
    fill: (props) => props?.colors?.[200],
  },
  cartCounterContainer: {
    border: (props) => `1.5px solid ${props?.colors?.[200]}`,
    borderRadius: 25,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    width: 25,
  },
  cartCounterText: {
    fontSize: theme.typography.fontSize,
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,
  },
  navDrawerContainer: {
    background: (props) => props?.colors?.[100],
    zIndex: 99,
    position: "fixed",
    minWidth: "30%",
    height: "100vh",
    right: "-150vw",
    transition: "all 0.5s ease",
    "&.active": {
      right: 0,
    },
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(5),
    padding: theme.spacing(14, 3, 3, 3),
    top: 0,
    listStyle: "none",
    width: "60vw",
    boxSizing: "border-box",

    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(15, 3, 3, 5),
    },
  },
  overlay: {
    background: "rgba(0,0,0,0.3)",
    position: "fixed",
    left: 0,
    top: 0,
    zIndex: 4,
    height: "100vh",
    width: "100vw",
  },
  hamburger: {
    cursor: "pointer",
    fontSize: theme.spacing(3),
    fill: (props) => props?.colors?.[200],
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  searchIcon: {
    cursor: "pointer",
    fontSize: theme.spacing(3),
    fill: (props) => props?.colors?.[200],
  },
  navList: {
    listStyle: "none",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
  },
  searchOverlay: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100dvh",
    width: "100vw",
    background: "rgba(0,0,0,0.3)",
  },
  searchContainer: (props) => ({
    display: "flex",
    background: props?.colors?.[100],
    border: `1px solid ${props?.colors?.[200]}`,
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(1, 2),
    position: "absolute",
    bottom: -110,
    width: "85%",
    left: "10%",
    right: "10%",
    zIndex: 5,
    animationName: "slideDown",
    animationDuration: "5s",
    animationTimingFunction: "ease",
    transform: "scale(1)",
    opacity: 1,
    transition: "all 0.2s ease",
    [theme.breakpoints.up("md")]: {
      width: "60%",
      left: "20%",
      right: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      left: "25%",
      right: "25%",
    },
    "&.hidden": {
      visibility: "hidden",
      transform: "scaleX(0.5)",
      opacity: 0,
    },
  }),
  searchInput: {
    flex: 1,
    fontSize: theme.typography.fontSize + 2,
    background: "inherit",
    border: "none",
    outline: "transparent",
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,
  },
  searchButton: {
    background: (props) => props?.colors?.[200],
    color: (props) => props?.colors?.[100],
    fontFamily: (props) => props?.fonts?.body,
    borderRadius: 8,
    display: "inline-flex",
    textDecoration: "none",
    gap: 8,
    cursor: "pointer",
    outline: "none",
    alignItems: "center",
    padding: theme.spacing(1.2, 2.2),
    fontSize: theme.typography.fontSize + 2,
    "&:hover": {
      opacity: 0.9,
    },
  },
}));
