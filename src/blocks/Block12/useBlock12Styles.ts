import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock12Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    "&.active": {
      border: `2px dashed ${theme.eleganteDesign.colors.primary}`,
    },
  },
  block: {
    display: "grid",
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: theme.spacing(5),
    },
  },
  content: {
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[400],
    lineHeight: "25px",

    "& > p": {
      margin: theme.spacing(1, 0),
    },

    "& > h2": {
      margin: theme.spacing(1.5, 0),
    },
    [theme.breakpoints.up("lg")]: {
      gridColumn: "1/span 2",
    },
    "& img, & > img, & > p img, & > p > img": {
      display: "block",
      width: "100%",
      height: "auto",
    },
  },
  relatedHeading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 16),
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.heading,
    margin: 0,
  },
  related: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      gap: theme.spacing(3),
    },
  },
  card: (props) => ({
    border: `1px solid ${props?.colors?.[500]}`,
    borderRadius: 8,
    display: "grid",
    gridTemplateColumns: "1fr 5fr",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(1),
  }),
  imageContainer: {
    overflow: "hidden",
    height: 100,
    width: 150,
    [theme.breakpoints.up("lg")]: {
      height: 142,
      width: 177,
    },
  },
  image: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  postCategory: {
    padding: theme.spacing(1),
    background: (props) => props?.colors?.[600],
    borderRadius: 4,
    fontSize: getResponsiveFontSize(theme.typography.fontSize - 2, theme.typography.fontSize + 2),
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.[200],
    display: "inline-block",
  },
  postTitle: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 8),
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.heading,
    margin: theme.spacing(1.2, 0, 0),
    "& > a": { color: "inherit", textDecoration: "none" },
    "&:hover": {
      cursor: "pointer",
      textDecoration: "underline",
    },
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    overflow: "hidden",
  },
  authorBlock: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1.5),
    "& > p": {
      fontFamily: (props) => props?.fonts?.body,
      color: (props) => props?.colors?.[200],
      fontSize: theme.typography.fontSize,
    },
    "& > h6": {
      fontFamily: (props) => props?.fonts?.heading,
      fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 8),
      fontWeight: theme.typography.fontWeightBold,
      margin: 0,
      color: (props) => props?.colors?.[200],
    },
  },
  headerBlock: {
    margin: theme.spacing(2, 0),
    display: "flex",
    gap: theme.spacing(2.5),
    flexWrap: "wrap",
    [theme.breakpoints.up("lg")]: {
      gap: theme.spacing(5),
      flexWrap: "nowrap",
    },
  },
  socialContainer: {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    gap: theme.spacing(2),
    alignItems: "center",
    [theme.breakpoints.up("lg")]: {
      justifyContent: "end",
    },
  },
  copyLinkButton: (props) => ({
    border: `1px solid ${props?.colors?.[200]}`,
    padding: theme.spacing(1.5),
    borderRadius: 16,
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(1.5),
    fontSize: theme.typography.fontSize + 2,
    fontFamily: props?.fonts?.body,
    background: "transparent",
    cursor: "pointer",
    "&:hover": {
      background: (props) => props?.colors?.[700],
    },
  }),
  icon: {
    fontSize: theme.typography.fontSize + 4,
    fill: (props) => props?.colors?.[400],
    cursor: "pointer",
  },
  postLink: (props) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${props?.colors?.[200]}`,
    borderRadius: 16,
    height: 45,
    width: 45,
    "&:hover": {
      background: (props) => props?.colors?.[700],
    },
  }),
}));
