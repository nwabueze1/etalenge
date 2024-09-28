import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useModalStyles = makeStyles((theme: Theme) => ({
  root: {
    position: "fixed",
    height: "100dvh",
    width: "100vw",
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  modalContent: {
    padding: theme.spacing(2),
    maxHeight: "85vh",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(3),
      width: "70vw",
      maxWidth: 952,
      overflow: "hidden",
    },
    background: theme.eleganteDesign.colors.white,
    zIndex: 1,
    borderRadius: theme.spacing(1),
    position: "relative",
  },
  overlay: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    background: "rgba(0,0,0,0.3)",
  },
  closeButton: {
    cursor: "pointer",
    right: 5,
    top: 5,
    position: "absolute",
    fontSize: theme.typography.fontSize + 6,
    fill: theme.eleganteDesign.colors.dark,
    [theme.breakpoints.up("md")]: {
      right: 20,
      top: 20,
    },
  },
}));
