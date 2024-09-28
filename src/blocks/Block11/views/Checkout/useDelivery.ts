import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";

export const useDeliveryStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {},
  block: {
    [theme.breakpoints.up("lg")]: {
      gap: theme.spacing(5),
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  loader: {
    marginLeft: theme.spacing(1),
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: (props) => `1px solid ${props?.colors?.[300]}`,
    padding: theme.spacing(1.4),
    gap: theme.spacing(1.4),
    transition: "all 0.4s ease",
    borderRadius: 8,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "&:hover": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
    },
  },
  cardImageContainer: {
    overflow: "hidden",
    borderRadius: 4,
    height: 150,
    [theme.breakpoints.up("md")]: {
      width: 150,
      height: 100,
    },
  },
  cardImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  cardDescription: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 8),
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[100],
    lineHeight: "140%",
    [theme.breakpoints.up("md")]: {
      flex: 1,
    },
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    overflow: "hidden",
  },
  priceContainer: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      flexDirection: "column",
      gap: theme.spacing(1.5),
    },
  },
  cardPrice: {
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize + 4,
    color: (props) => props?.colors?.[200],
    "&.title": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    padding: theme.spacing(2),
    border: (props) => `1px solid ${props?.colors?.[300]}`, 
  },
  paymentCardImage: {
    width: 70,
    height: 30,
  },
  paymentCard: {
    padding: theme.spacing(1, 1.6),
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    justifyContent: "space-between",
    border: (props) => `1px solid ${props?.colors?.[100]}`,
    borderRadius: 8,
  },
  paymentLabel: {
    flex: 1,
    fontFamily: (props) => props?.fonts.body,
    fontSize: theme.typography.fontSize + 2,
    textTransform: "capitalize",
    cursor: "pointer",
  },
  paymentRadio: {
    height: 16,
    width: 16,
    accentColor: (props) => props?.colors?.[100],
    cursor: "pointer",
  },
  paymentCardContainer: {
    display: "grid",
    gap: theme.spacing(2),
  },
  makePaymentTitle: {
    fontSize: theme.typography.fontSize + 6,
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[100],
    margin: theme.spacing(2, 0, 0.5),
    textTransform: "capitalize",
  },
  makePaymentSubtitle: {
    fontSize: theme.typography.fontSize,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[500],
    marginBottom: theme.spacing(3),
  },
  errorMessage: {
    color: (props) => props?.colors?.[700],
    fontSize: theme.typography.fontSize,
    fontFamily: (props) => props?.fonts?.body,
  },
  pickUpButton: (props) => ({
    fontFamily: props?.fonts?.body,
    fontSize: theme.typography.fontSize + 2,
    cursor: "pointer",
    borderRadius: 4,
    padding: theme.spacing(1.4, 2),
    border: `1px solid ${props?.colors?.[100]}`,
    backgroundColor: props?.colors?.[200],
    color: props?.colors?.[100],
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: props?.colors?.[400],
      "&.active": {
        backgroundColor: props?.colors?.[300],
      },
    },
    "&.active": {
      backgroundColor: props?.colors?.[100],
      color: props?.colors?.[200],
    },
  }),
  pickupButtonContainer: {
    display: "inline-flex",
    gap: theme.spacing(1.5),
  },
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  divider: {
    margin: theme.spacing(2, 0),
    height: 1,
    background: (props) => props?.colors?.[500],
  },
  total: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 10),
    fontFamily: (props) => props?.fonts?.body,
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[200],
    marginTop: theme.spacing(2),
    "&.light": {
      fontSize: getResponsiveFontSize(theme.typography.fontSize + 3, theme.typography.fontSize + 6),
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  submitButton: {
    fontSize: theme.typography.fontSize,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[200],
    textTransform: "capitalize",
    padding: theme.spacing(1.5, 2),
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    outline: "none",
    border: "none",
    marginTop: theme.spacing(1),
    backgroundColor: (props) => props?.colors?.[100],
    "&:hover": {
      backgroundColor: (props) => props?.colors?.[300],
    },
    "&.loading": {
      cursor: "not-allowed",
    },
  },
  heading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
    fontFamily: (props) => props?.fonts?.body,
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[200],
  },
  header: {
    margin: theme.spacing(0, 0, 1.5, 0),
  },
}));
