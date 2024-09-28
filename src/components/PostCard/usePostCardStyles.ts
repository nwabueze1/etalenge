import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const usePostCardStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderRadius: 8,
    background: (props) => props?.colors?.[100],
    border: (props) => `1px solid ${props?.colors?.[200]}`,
    transition: "all 0.5s ease",
    "&:hover": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
    },
  },
  imageContainer: {
    height: 230,
    overflowY: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardBody: {
    marginTop: theme.spacing(2),
  },
  tag: {
    padding: theme.spacing(0.6, 1.4),
    borderRadius: 6,
    background: (props) => props?.colors?.[500],
    fontFamily: (props) => props?.fonts?.body,
    fontSize: theme.typography.fontSize - 2,
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1),
  },
  separator: {
    background: (props) => props?.colors?.[300],
    height: 0.5,
    width: "100%",
    margin: theme.spacing(1, 0),
  },
  postTitle: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 2, theme.typography.fontSize + 6),
    fontFamily: (props) => props?.fonts?.body,
    lineHeight: "140%",
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    "-webkit-line-clamp": 2,
    overflow: "hidden",
  },
  postLink: {
    padding: theme.spacing(1.2, 2.2),
    borderRadius: 12,
    border: (props) => `1px solid ${props?.colors?.[400]}`,
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
    fontFamily: (props) => props?.fonts?.body,
    textDecoration: "none",
    "&:hover": {
      background: (props) => props?.colors?.[500],
    },
    marginTop: theme.spacing(2.3),
    display: "block",
    cursor: "pointer",
    maxWidth: "max-content",
    color: (props) => props?.colors?.[400],
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
