import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock16Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  block: {
    display: "flex",
    flexDirection: "column-reverse",
    gap: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      gap: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: theme.spacing(5),
    },
  },
  content: {
    [theme.breakpoints.up("lg")]: {
      width: "48%",
    },
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
  },
  heading: (props) => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 30),
    fontWeight: theme.typography.fontWeightBold,
    color: props?.colors?.[200],
    fontFamily: props?.fonts?.heading,
  }),
  subheading: (props) => ({
    marginTop: theme.spacing(0.5),
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 6),
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[200],
    lineHeight: "150%",
  }),
  cardContainer: {
    display: "grid",
    gap: theme.spacing(2.5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      gap: theme.spacing(3.5),
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(4),
      gap: theme.spacing(4.5),
    },
  },
  cardTitle: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 10),
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[200],
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: "140%",
    margin: "0px !important",
  },
  cardSubtitle: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 6),
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[300],
    lineHeight: "150%",
    letterSpacing: 0.2,
    marginTop: theme.spacing(1),
  },
}));
