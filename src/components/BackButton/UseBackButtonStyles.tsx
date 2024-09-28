import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";

export const useBackButtonStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    cursor: "pointer",
  },
  text: {
    fontSize: theme.typography.fontSize + 2,
    fontFamily: (props) => props?.fonts?.body,
  },
  backIcon: {
    fontSize: theme.typography.fontSize + 10,
  },
}));