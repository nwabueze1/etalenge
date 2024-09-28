import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock2Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  section: {
    background: (props) => props?.colors?.[500],
    "&.active": {
      border: `2px dashed ${theme.eleganteDesign.colors.primary}`,
    },
  },
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 0),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 0),
    },
    background: (props) => props?.colors?.[100],
  },
  block: {
    display: "grid",
    gap: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 64,
    },
    [theme.breakpoints.up("lg")]: {
      gap: theme.spacing(4),
      gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
    },
    [theme.breakpoints.up("xl")]: {
      gap: theme.spacing(10),
    },
  },
  footerLinkHeader: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 14),
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  iconContainer: {
    border: (props) => `1.5px solid ${props?.colors?.[200]}`,
    color: (props) => props?.colors?.[200],
    height: 48,
    width: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.spacing(2),
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      "&>svg": {
        transform: "scale(0.8)",
      },
    },
  },
  icon: {
    fontSize: theme.typography.fontSize + 10,
    cursor: "pointer",
    transition: "transform 0.4s ease",
  },
  footerLink: {
    fontSize: theme.typography.fontSize + 2,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[200],
    display: "block",
    textDecoration: "none",
    "&:hover": {
      "&.url": {
        textDecoration: "underline",
      },
    },
  },
  footerLinkContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  footerHeader: {
    gap: theme.spacing(3),
  },
  footerLogo: {
    fontSize: theme.typography.fontSize + 22,
    fontFamily: (props) => props.fonts.heading,
    color: (props) => props?.colors?.[200],
    fontStyle: "italic",
    fontWeight: theme.typography.fontWeightBold,
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  footerCaption: {
    fontSize: theme.typography.fontSize + 2,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[200],
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  formContainer: {
    display: "flex",
    alignItems: "start",
    padding: theme.spacing(1, 2),
    borderRadius: 12,
    border: (props) => `1px solid ${props?.colors?.[600]}`,
    position: "relative",
  },
  submitBtn: {
    padding: theme.spacing(1.2, 2.4),
    background: (props) => props?.colors?.[200],
    borderRadius: 12,
    border: 0,
    cursor: "pointer",
    color: (props) => props?.colors?.[500],
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize,
  },
  socialMediaContainer: {
    display: "flex",
    gap: 15,
    flexWrap: "wrap",
  },
  footerMenu: {
    background: (props) => props?.colors?.[400],
    padding: theme.spacing(2, 0),
    margin: 0,
  },
  footerMenuContent: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
  },
  footerMenuText: {
    fontSize: theme.typography.fontSize,
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,
  },
  textFieldInput: {
    border: 0,
  },
  textFieldInputErrorMessage: {
    position: "absolute",
    bottom: -18,
    left: 0,
  },
  pluginForm: {
    flex: 1,
  },
}));
