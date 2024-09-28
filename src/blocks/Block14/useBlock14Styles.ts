import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../type";
import { getResponsiveFontSize } from "../../helper/getResponsiveFontSize";

export const useBlock14Styles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  block: {
    display: "grid",
    gap: theme.spacing(4),
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  },
  formBlock: {
    border: (props) => `1px solid ${props?.colors?.[600]}`,
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(3),
    },
  },
  formContainer: {
    gap: theme.spacing(2),
    fontFamily: (props) => props?.fonts?.body,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.up("lg")]: {
      gap: theme.spacing(4),
    },

    "& > div:has(textarea), & > div:has(.image-upload)": {
      gridColumn: "1/ span 2",
    },
  },
  image: {
    display: "block",
    width: "100%",
    height: "auto",
  },
  header: {
    marginBottom: theme.spacing(2.5),
    [theme.breakpoints.up("lg")]: {
      marginBottom: theme.spacing(5),
    },
  },
  heading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 4, theme.typography.fontSize + 30),
    fontWeight: theme.typography.fontWeightBold,
    color: (props) => props?.colors?.[200],
    fontFamily: (props) => props?.fonts?.heading,
  },
  subheading: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 6),
    fontFamily: (props) => props?.fonts?.body,
    color: (props) => props?.colors?.body,
    marginTop: theme.spacing(1),
    maxWidth: 488,
  },
  textAreaContainer: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      gridColumn: "1/span 2",
    },
  },
  textArea: {
    flex: 1,
    width: "auto",
    padding: theme.spacing(2.5, 3),
    borderRadius: theme.spacing(2),
    background: "transparent",
  },
  inputLabel: { display: "none" },
  textFieldContainer: {
    width: "auto",
    borderRadius: theme.spacing(1),
    height: 45,
    padding: theme.spacing(0, 2),
    alignItems: "center",
    "&.phone": {
      flex: 1,
    },
  },
  textInput: () => ({
    fontSize: getResponsiveFontSize(theme.typography.fontSize, theme.typography.fontSize + 2),
  }),
  phoneNumberInputContainer: {
    border: 0,
  },
  submitButton: {
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(4),
    },
  },
  imageUploadContainer: {
    width: "auto",
  },
}));
