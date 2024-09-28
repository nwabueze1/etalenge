import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock10Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  modalHeading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 10),
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[100],
    textTransform: "capitalize",
    margin: 0,
  },
  configTitle: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 2),
    fontFamily: (props) => props?.fonts?.body,
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(2, 0, 1),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  requiredContainer: (props) => ({
    background: props?.colors?.[800],
    padding: theme.spacing(0.6, 1.2),
    borderRadius: theme.spacing(0.4),
    fontSize: theme.typography.fontSize - 2,
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[100],
  }),
  selectionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: theme.spacing(1, 0),
  },
  selectionText: {
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize,
    margin: 0,
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    textTransform: "capitalize",
    gap: theme.spacing(1),
  },
  input: {
    accentColor: (props) => props?.colors?.[100],
  },
  selectionAmount: {
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize,
  },
  categoryTitle: {
    fontSize: theme.typography.fontSize - 1,
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[100],
    fontWeight: theme.typography.fontWeightBold,
  },
  categorySub: {
    fontSize: theme.typography.fontSize - 1,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[400],
    "&.description": {
      marginTop: theme.spacing(1.5),
    },
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: theme.spacing(1.5),
  },
  incrementButtonContainer: {
    border: (props) => `1px solid ${props?.colors?.[100]}`,
    display: "flex",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden",
  },
  qtyContainer: {
    display: "flex",
  },
  checkBoxInput: {
    accentColor: (props) => props?.colors?.[100],
  },
  addBtn: {
    padding: theme.spacing(1.5, 2),
    background: (props) => props?.colors?.[600],
    border: 0,
    cursor: "pointer",
    "&:hover": {
      background: (props) => props?.colors?.[800],
    },
  },
  counterText: {
    fontSize: theme.typography.fontSize + 2,
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[700],
    textAlign: "center",
    fontFamily: (props) => props?.fonts?.body,
  },
  counterContainer: {
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  menuItemPrice: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 20),
    color: (props) => props?.colors?.[100],
    fontFamily: (props) => props?.fonts?.heading,
    margin: 0,
  },
  addToCartBtn: {
    flex: 1,
    display: "flex",
    margin: theme.spacing(1, 0),
    justifyContent: "center",
    cursor: "pointer",
    width: "100%",
  },
  blockContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  block: {
    display: "grid",
    gap: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gap: theme.spacing(5),
    },
  },
  imageContainer: {
    height: 500,

    [theme.breakpoints.down("sm")]: {
      height: 350,
    }
  },
  menuContentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  back: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    fontSize: theme.typography.fontSize + 2,
    fontFamily: (props) => props?.fonts?.heading,
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[100],
    "&:hover": {
      color: (props) => props?.colors?.[700],
    },
    marginBottom: theme.spacing(2),
  },
  backIcon: {
    fontSize: theme.typography.fontSize + 10,
  },
  relatedItems: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 14),
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[100],
    fontFamily: (props) => props?.fonts?.heading,
  },
  arrowButtonContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  arrowButtonContainerMobile: {
    display: "flex",
    gap: theme.spacing(1),
  },
  arrowButton: {
    background: (props) => props?.colors?.[600],
  },
  footerHeader: {
    margin: theme.spacing(1.8, 0),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  errorMessage: {
    display: "block",
    color: theme.eleganteDesign.colors.error,
    fontSize: theme.typography.fontSize,
    fontFamily: (props) => props?.fonts?.body,
  },
  relatedMenuItemsParent: {
    marginTop: theme.spacing(7),
  },
  relatedMenuItemsContainer: {
    display: "grid",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(2.5),
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: theme.spacing(3),
    },
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: theme.spacing(4),
    },
  },
}));
