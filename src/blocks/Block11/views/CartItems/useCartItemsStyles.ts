import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";

export const useCartItemsStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  block: {
    gap: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      gap: theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "1.6fr 1.2fr",
      gap: theme.spacing(5),
    },
  },
  cartItems: {
    display: "grid",
    gap: theme.spacing(1.5),
  },
  title: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[200],
    fontWeight: theme.typography.fontWeightBold,
    margin: 0,
  },
}));
