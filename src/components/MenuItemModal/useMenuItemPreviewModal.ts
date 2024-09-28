import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useMenuItemPreviewModal = makeStyles<Theme, CustomThemeProps>((theme) => ({
  overlay: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    background: "rgba(0,0,0,0.3)",
  },
  modal: {
    position: "fixed",
    height: "100dvh",
    width: "100vw",
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  modalContainer: {
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    maxHeight: "85vh",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(3),
      width: "70vw",
      maxWidth: 952,
      overflow: "hidden",
    },
    background: (props) => props?.colors?.[500],
    zIndex: 1,
    borderRadius: theme.spacing(1),
    position: "relative",
  },
  imageContainer: {
    maxHeight: 300,
    [theme.breakpoints.up("md")]: {
      maxHeight: "85vh",
    },
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    display: "block",
  },
  modalHeading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 10),
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[100],
    textTransform: "capitalize",
  },
  closeButton: {
    cursor: "pointer",
    right: 5,
    top: 5,
    position: "absolute",
    fontSize: theme.typography.fontSize + 6,
    fill: (props) => props?.colors?.[100],
    [theme.breakpoints.up("md")]: {
      right: 20,
      top: 20,
    },
  },
  configTitle: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 2),
    fontFamily: (props) => props?.fonts?.body,
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(2, 0, 1),
  },
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
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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
  },
  addToCartBtn: {
    flex: 1,
    display: "flex",
    margin: theme.spacing(1, 0),
    justifyContent: "center",
    cursor: "pointer",
  },
  block: {
    overflowY: "scroll",
    paddingRight: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "&::-webkit-scrollbar": {
      width: 4,
    },
    "&::-webkit-scrollbar-thumb": {
      background: "grey",
      borderRadius: 8,
      cursor: "pointer",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      cursor: "pointer",
    },
  },
  blockContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
