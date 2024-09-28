import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useMenuItemCardStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: (props) => ({
    background: props?.colors?.[500],
    borderRadius: 8,
    padding: theme.spacing(2),
    border: `1px solid ${props?.colors?.[200]}`,
    transition: "all 0.4s ease",
    "&:hover": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
    },
    display: "flex",
  }),
  imageContainer: {
    height: 250,
    width: "100%",
  },
  image: {
    display: "block",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  title: (props) => ({
    fontFamily: props?.fonts?.heading,
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 3, theme.typography.fontSize + 10),
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(2, 0, 0),
    lineHeight: "130%",
    color: props?.colors?.[400],
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "line-clamp": 2,
    "-webkit-box-orient": "vertical",
  }),
  subtitle: (props) => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize),
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[400],
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "line-clamp": 3,
    "-webkit-box-orient": "vertical",
    margin: 0,
  }),
  detailsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: theme.spacing(2, 0),
  },
  menuCategory: (props) => ({
    background: props?.colors?.[600],
    borderRadius: 4,
    padding: theme.spacing(0.8, 1.4),
    fontSize: theme.typography.fontSize,
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[100],
    "&:hover": {
      background: props?.colors?.[200],
    },
  }),
  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: (props) => ({
    fontFamily: props?.fonts?.heading,
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 20),
    color: props?.colors?.[100],
    fontWeight: theme.typography.fontWeightBold,
    margin: 0,
  }),
  cartIconContainer: {
    height: 36,
    width: 36,
    borderRadius: 12,
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    border: (props) => `1px solid ${props?.colors?.[100]}`,
  },
  cartIcon: {
    fontSize: theme.typography.fontSize + 4,
  },
  moreInfo: {
    display: "inline-flex",
    alignItems: "center",
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize + 2,
    color: (props) => props?.colors?.[100],
    gap: theme.spacing(1),
    textDecoration: "none",
    "&:hover": {
      "&>svg": {
        transform: "translateX(5%)",
      },
    },
  },
  arrowRight: {
    transition: "all 0.4s ease",
    fontSize: theme.typography.fontSize + 10,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  cardTextContainer: {
    flex: 1,
  },
}));
