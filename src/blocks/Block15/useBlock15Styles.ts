import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock15Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  block: {
    display: "flex",
    flexDirection: "column",
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
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: theme.spacing(3),
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      margin: theme.spacing(4, 0),
    },
  },
  card: {
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    border: (props) => `1px solid ${props?.colors?.[600]}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(1),
  },
  cardHeader: (props) => ({
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: props?.fonts?.heading,
    color: props?.colors?.[200],
    fontSize: theme.typography.fontSize + 20,
    margin: 0,
  }),
  cardDescription: (props) => ({
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[200],
    fontSize: theme.typography.fontSize + 2,
    textAlign: "center",
  }),
  buttonContainer: {
    display: "flex",
    gap: theme.spacing(1.5),
  },
  buttonOutlined: (props) => ({
    border: `1px solid ${props?.colors?.[100]}`,
    background: props?.colors?.[200],
    color: props?.colors?.[100],
    "&:hover": {
      background: props?.colors?.[500],
    },
  }),
  buttonIcon: {
    fontSize: theme.typography.fontSize + 8,
    fill: (props) => props?.colors?.[100],
  },
}));
