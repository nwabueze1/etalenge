import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useSectionStyles = makeStyles<Theme, { background: string }>((theme: Theme) => ({
  root: {
    background: (props) => props?.background,
    padding: theme.spacing(3, 0),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 0),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(6.5, 0),
    },
    "&.active": {
      border: `2px dashed ${theme.eleganteDesign.colors.primary}`,
    },
  },
}));
