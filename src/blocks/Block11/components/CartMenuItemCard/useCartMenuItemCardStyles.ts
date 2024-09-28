import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";

export const useCartMenuItemCardStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    display: "grid",
    gap: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    border: (props) => `1px solid ${props?.colors?.[300]}`,
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1.2fr 3.4fr",
      gap: theme.spacing(2),
      alignItems: "center",
    },
    "&:hover": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
    },
  },
  imageContainer: {
    height: 240,
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      height: 180,
      borderRadius: theme.spacing(0.5),
    },
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      gap: theme.spacing(1.5),
    },
  },
  title: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 10),
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[100],
    margin: 0,
    lineHeight: "150%",
    fontFamily: (props) => props?.fonts?.heading,
  },
  description: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
    lineHeight: "150%",
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[200],
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    overflow: "hidden",
  },
  price: (props) => ({
    color: props?.colors?.[200],
    fontFamily: props?.fonts?.body,
    fontSize: theme.typography.fontSize + 8,
    fontWeight: theme.typography.fontWeightBold,
    padding: 0,
  }),
  cardFooter: {
    display: "flex",
    gap: theme.spacing(1),
    alignItems: "center",
    justifyContent: "space-between",
  },
  actionButtonContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    border: (props) => `1px solid ${props?.colors?.[300]}`,
  },
  actionBtn: {
    background: (props) => props?.colors?.[400],
    height: 30,
    width: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: 0,
    outline: "none",
    color: (props) => props?.colors?.[100],
    cursor: "pointer",

    "&.invisible": {
      visibility: "hidden",
    },

    "&:hover": {
      background: (props) => props?.colors?.[500],
    },
  },
  counterContainer: {
    width: 140,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter: {
    fontSize: theme.typography.fontSize + 6,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[100],
    width: 100,
    textAlign: "center",
  },
  deleteButton: {
    fontSize: theme.typography.fontSize + 12,
    fill: (props) => props?.colors?.[100],
    cursor: "pointer",

    "&.invisible": {
      visibility: "hidden",
    }
  },
  menuOptionsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(4),
  },
  menuOptionHeader: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[200],
    fontWeight: theme.typography.fontWeightBold,
  },
  badge: (props) => ({
    borderRadius: theme.spacing(2),
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[200],
    fontSize: theme.typography.fontSize - 2,
    width: "max-content",
  }),
  list: {
    marginLeft: theme.spacing(2),
    padding: 0,
  },
}));
