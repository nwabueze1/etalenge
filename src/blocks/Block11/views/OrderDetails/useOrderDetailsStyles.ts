import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";

export const useOrderDetailsStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  cartItemsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
  },
  title: (props) => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 10, theme.typography.fontSize + 12),
    fontFamily: props?.fonts?.body,
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[200],
  }),
  header: {
    margin: theme.spacing(2, 0),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  backToHome: (props) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.2),
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[200],
    cursor: "pointer",
    "& > svg": {
      fill: props?.colors?.[200],
    },
  }),
  orderPlacedSuccessfullyCard: (props) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    border: `1px solid ${props?.colors?.[300]}`,
    padding: theme.spacing(1.5),
    borderRadius: 4,
    marginTop: theme.spacing(1.5),
  }),
  orderPlacedSuccessfullyText: {
    fontSize: theme.typography.fontSize,
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,
  },
  leftBlock: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
  },
  cardHeader: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
    fontFamily: (props) => props?.fonts?.body,
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(0, 0, 1.5, 0),
  },
  card: (props) => ({
    padding: theme.spacing(1.5),
    border: `1px solid ${props?.colors?.[300]}`,
    borderRadius: 4,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2.5),

    "&.guest": {
      marginTop: theme.spacing(2),
    },

    "&.payment": {
      marginTop: theme.spacing(2),
    }
  }),
  separator: (props) => ({
    height: 1,
    width: "100%",
    backgroundColor: props?.colors?.[400],
  }),
  cardItem: (props) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& > p": {
      fontSize: theme.typography.fontSize + 2,
      fontFamily: props?.fonts?.body,
      textTransform: "capitalize",
    },
    "& > p.bold": {
      fontWeight: theme.typography.fontWeightBold,
    },
    "& > p.total": {
      fontSize: theme.typography.fontSize + 4,
    },
  }),
}));
