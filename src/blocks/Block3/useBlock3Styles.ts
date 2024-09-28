import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock3Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 0),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(6.25, 0),
    },
    background: (props) => props?.colors?.[300],
    "&.active": {
      border: `2px dashed ${theme.eleganteDesign.colors.primary}`,
    },
  },
  title: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 34),
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.typography.fontWeightBold,
    margin: 0,
    color: (props) => props?.colors?.[100],
  },
  cardsContainer: {
    marginTop: theme.spacing(2.5),
  },
  testimonialContainer: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    border: (props) => `1px solid ${props?.colors?.[400]}`,
    background: (props) => props?.colors?.[300],
    transition: "background 0.5s ease",
    margin: theme.spacing(0, 3, 0, 0),
    "&:hover": {
      background: (props) => props?.colors?.[500],
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 1.5, 0, 0),
    },
  },
  testimonialTitle: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 6),
    color: (props) => props?.colors?.[100],
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "140%",
    margin: theme.spacing(1, 0),
  },
  testimonialSubtitle: {
    color: (props) => props?.colors?.[100],
    fontFamily: (props) => props?.fonts?.body,
    fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize),
    letterSpacing: "0.2px",
    lineHeight: "150%",
  },
  testimonialDivider: {
    height: 0.2,
    marginTop: theme.spacing(1),
    width: "100%",
    background: (props) => props?.colors?.[400],
  },
  userContainer: {
    display: "flex",
    gap: theme.spacing(1),
    marginTop: theme.spacing(1.5),
    alignItems: "center",
  },
  userImage: {
    height: 48,
    width: 48,
    borderRadius: 48,
  },
  userName: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[200],
  },
  userDescription: {
    fontSize: theme.typography.fontSize - 2,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[200],
  },
  header: {
    marginBottom: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    gap: theme.spacing(1.5),
  },
  button: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
    width: 50,
    height: 50,
    background: (props) => props?.colors?.[200],
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    border: 0,
    cursor: "pointer",
    "&.hidden": {
      visibility: "hidden",
    },
  },
  chevronIcon: {
    fill: (props) => props?.colors?.[300],
    fontSize: theme.typography.fontSize + 10,
  },
  ratingIcon: {
    fill: (props) => props?.colors?.[200],
  },
}));
