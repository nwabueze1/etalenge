import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";

export const useArrowButtonStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    height: 45,
    width: 45,
    borderRadius: 45,
    background: (props) => props?.colors?.[200],
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      height: 60,
      width: 60,
    },
    border: 0,
    cursor: "pointer",
  },
  arrow: {
    fontSize: theme.typography.fontSize + 8,
    fill: (props) => props?.colors?.[100],
  },
}));
