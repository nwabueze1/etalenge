import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock4Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(6.5),
    },
    background: (props) => props?.colors?.[100],
    "&.active": {
      border: `2px dashed ${theme.eleganteDesign.colors.primary}`,
    },
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    [theme.breakpoints.up("md")]: {
      marginBottom: 34,
    },
  },
  heading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 24),
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[400],
    fontFamily: (props) => props?.fonts?.heading,
  },
  cardContainer: {
    display: "grid",
    gap: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
}));
