import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";

export const useOrderSummaryStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  title: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[200],
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(0, 0, 1.5, 0),
  },
  summaryContainer: {
    border: (props) => `1px solid ${props?.colors?.[300]}`,
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    display: "grid",
    gap: theme.spacing(3),
  },
  summaryItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  summaryText: {
    fontSize: theme.typography.fontSize + 3,
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[200],
  },
  divider: {
    background: (props) => props?.colors?.[400],
    width: "100%",
    height: 1,
  },
  summaryTextBold: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 8),
  },
  checkoutButton: {
    padding: theme.spacing(1.4, 3),
    borderRadius: 16,
    border: 0,
    background: (props) => props?.colors?.[100],
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,
    cursor: "pointer",
    "&:hover": {
      background: (props) => props?.colors?.[600],
    },
  },
}));
