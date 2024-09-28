import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock17Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  cardContainer: {
    display: "grid",
    gap: theme.spacing(3),
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(2.5, 0),
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(3, 0),
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  },
  loadMoreBtnParent: {
    background: (props) => props?.colors?.[600],
    padding: theme.spacing(3, 1.2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  paginationText: {
    fontFamily: (props) => props?.fonts?.body,
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 4),
    color: (props) => props?.colors?.[400],
    textAlign: "center",
    margin: 0,
    marginBottom: theme.spacing(2),
  },
  loadMoreBtn: {
    padding: theme.spacing(1.5, 4),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: theme.spacing(0.5),
    background: "transparent",
    borderRadius: theme.spacing(2),
    border: (props) => `1px solid ${props?.colors?.[100]} `,
    cursor: "pointer",
  },
  heading: {
    margin: 0,
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 30),
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[100],
    textAlign: "center",
  },
  description: {
    margin: 0,
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 10),
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[100],
    textAlign: "center",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
  },
  block: {
    marginTop: theme.spacing(4),
  },
  searchContainer: (props) => ({
    display: "flex",
    background: props?.colors?.[500],
    border: `1px solid ${props?.colors?.[100]}`,
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(1, 2),
    bottom: -110,
    width: "85%",
    left: "10%",
    right: "10%",
    zIndex: 5,
    margin: "0 auto 24px",
    [theme.breakpoints.up("md")]: {
      width: "60%",
      left: "20%",
      right: "20%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      left: "25%",
      right: "25%",
    },
  }),
  searchInput: {
    flex: 1,
    fontSize: theme.typography.fontSize + 2,
    background: "inherit",
    border: "none",
    outline: "transparent",
    color: (props) => props?.colors?.[100],
    fontFamily: (props) => props?.fonts?.body,
  },
}));
