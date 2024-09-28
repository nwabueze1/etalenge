import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";

export const useBreadCrumbtyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  breadCrumbContainer: {
    display: "inline-flex",
    gap: theme.spacing(1),
    alignItems: "center",
  },
  breadCrumb: (props) => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 10),
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[200],
    fontWeight: theme.typography.fontWeightBold,
    "&.prev": {
      color: props?.colors?.[900],
    },
  }),
  breadCrumbLink: {
    textDecoration: "none",
    color: "inherit",
  },
  chevronRight: (props) => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 10),
    color: props?.colors?.[100],
    "&.prev": {
      fill: props?.colors?.[900],
    },
  }),
}));
