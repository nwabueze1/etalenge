import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useContainer = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: theme.eleganteStyles.maxWidth,
    width: "85%",
    margin: "0 auto",
  },
}));
