import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";

export const useButtonStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  button: {
    background: (props) => props?.colors?.[100],
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize - 2,
    padding: theme.spacing(1, 1.2),
    borderRadius: 8,
    display: "inline-flex",
    textDecoration: "none",
    gap: 8,
    cursor: "pointer",
    alignItems: "center",
    border: 0,
    "&.contained": {
      border: 0,
    },
    "&.outlined": {
      border: (props) => `1px solid ${props?.colors?.[400]}`,
    },
    "&.md": {
      padding: theme.spacing(1.2, 2.2),
      fontSize: theme.typography.fontSize + 2,
    },
    "&.lg": {
      padding: theme.spacing(1.4, 3),
      fontSize: theme.typography.fontSize + 10,
    },
    "&:hover": {
      background: (props) => props?.colors?.[300],
    },
  },
}));
