import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../../type";

export const useTextInputStyles = makeStyles<Theme, CustomThemeProps>((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  input: (props) => ({
    display: "block",
    borderRadius: theme.spacing(1),
    border: `1px solid ${props?.colors?.[100]}`,
    padding: theme.spacing(2, 3),
    fontFamily: props?.fonts?.body,
    color: props?.colors?.[100],
    fontSize: theme.typography.fontSize + 1,
    flex: 1,
    "&.error": {
      borderColor: props?.colors?.[700],
    },
  }),
  errorMessage: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.fontSize,
    color: (props) => props?.colors?.[700],
    display: "block",
    fontFamily: (props) => props?.fonts?.body,
  },
}));
