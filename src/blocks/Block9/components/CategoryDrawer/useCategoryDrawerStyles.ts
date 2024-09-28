import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";

export const useCategoryDrawerStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  categoryDrawer: {
    position: "absolute",
    top: 35,
    padding: theme.spacing(3),
    borderRadius: 8,
    background: (props) => props?.colors?.[600],
    minWidth: "50%",
    transition: "all 0.4s ease",
    visibility: "hidden",
    opacity: 0,
    right: 0,
    "&.active": {
      visibility: "visible",
      opacity: 1,
    },
    [theme.breakpoints.down("lg")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    zIndex: 1,
  },
  drawerBlock: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
    position: "relative",
  },
  drawerTitle: {
    fontSize: theme.typography.fontSize + 10,
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[400],
  },
  closeDrawerBtn: {
    position: "absolute",
    top: -10,
    right: -10,
    fontSize: theme.typography.fontSize + 10,
  },
  rangerSelector: {
    color: (props) => props?.colors?.[100],
    accentColor: (props) => props?.colors?.[100],
  },
  filterContainer: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  filterBtn: {
    justifyContent: "center",
  },
  menuCategory: (props) => ({
    fontSize: theme.typography.fontSize + 2,
    colors: props?.colors?.[100],
    fontFamily: props?.fonts?.body,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "under",
    },
    "&.active": {
      textDecoration: "underline",
    },
  }),
}));
