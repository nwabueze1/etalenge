import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock9Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  menuItemsContainer: {
    display: "grid",
    gap: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: theme.spacing(2),
    },
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
  titleContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  title: (props) => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 22),
    color: props?.colors?.[400],
    fontFamily: props?.fonts?.heading,
    fontWeight: theme.typography.fontWeightBold,
  }),
  menuBtn: {
    fontSize: theme.typography.fontSize + 20,
    cursor: "pointer",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  header: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
  },
  searchContainer: {
    display: "flex",
    border: (props) => `1px solid ${props?.colors?.[400]}`,
    padding: theme.spacing(1, 2),
    borderRadius: 16,
    "&>input": {
      flex: 1,
      border: 0,
      fontFamily: (props) => props?.fonts?.body,
      fontSize: theme.typography.fontSize,
      outlineColor: "transparent",
      background: "inherit",
      outline: "none",
    },
    [theme.breakpoints.up("lg")]: {
      width: "45%",
    },
  },
  sortContainer: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    "& > span": {
      fontFamily: (props) => props?.fonts?.body,
      fontSize: theme.typography.fontSize,
    },
    position: "relative",
  },
  sortBox: {
    display: "flex",
    alignItems: "center",
    background: (props) => props?.colors?.[600],
    padding: theme.spacing(1.5),
    borderRadius: 4,
    flex: 1,
    gap: theme.spacing(1.5),
    minWidth: 140,
    "&:hover": {
      cursor: "pointer",
    },
  },
  sortText: {
    fontSize: theme.typography.fontSize,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[900],
    flex: 1,
  },
  subHeader: {
    display: "flex",
    flexDirection: "column-reverse",
    margin: theme.spacing(1.5, 0),
    gap: theme.spacing(1.5),
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  itemsCount: {
    fontSize: theme.typography.fontSize + 2,
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[900],
    flex: 1,
  },
  block: {
    display: "grid",
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "1fr 2fr",
      gap: theme.spacing(4),
      marginTop: theme.spacing(3),
    },
    [theme.breakpoints.up("xl")]: {
      gridTemplateColumns: "1fr 3fr",
      gap: theme.spacing(6),
    },
  },
  menuCategoryContainerWeb: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      height: "max-content",
      flexDirection: "column",
      gap: theme.spacing(2),
      position: "sticky",
      top: 100,
      listStyle: "none",
      padding: 0,
    },
  },
  drawerTitle: {
    fontSize: theme.typography.fontSize + 10,
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[400],
    margin: 0,
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
    listStyle: "none",
    padding: 0,
    "&:hover": {
      cursor: "pointer",
      textDecoration: "under",
    },
    "&.active": {
      textDecoration: "underline",
    },
  }),
  loadMoreBtn: {
    border: (props) => `1px solid ${props?.colors?.[100]}`,
    padding: theme.spacing(1.5, 2),
    borderRadius: 8,
    width: 250,
    display: "inline-flex",
    justifyContent: "center",
    cursor: "pointer",
  },
  buttonContainer: {
    margin: theme.spacing(5, 0),
    height: 112,
    padding: theme.spacing(1.5, 2),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: (props) => props?.colors?.[600],
    borderRadius: 8,
  },
  button: {
    cursor: "pointer",
  },
  sortOptionsModal: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: 8,
    background: (props) => props?.colors?.[600],
    position: "absolute",
    right: 0,
    top: 45,
    visibility: "hidden",
    opacity: 0,
    transition: "all 0.4s ease",
    "&.active": {
      visibility: "visible",
      opacity: 1,
    },
  },
  sortChevron: {
    transition: "transform 0.4s ease",
    "&.active": {
      transform: "rotate(-180deg)",
    },
  },
  sortOption: {
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize + 2,
    color: (props) => props?.colors?.[900],
    cursor: "pointer",
    "&:hover": {
      textDecoration: "underline",
    },
    listStyle: "none",
    padding: 0,
  },
}));
