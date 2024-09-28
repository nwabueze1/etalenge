import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";
import { CustomThemeProps } from "../../../../type";
import { getResponsiveFontSize } from "../../../../helper/getResponsiveFontSize";

export const usePaymentStyles = makeStyles<Theme, CustomThemeProps>((theme) => ({
  root: {
  },
  title: {
    fontSize: getResponsiveFontSize(theme.typography.fontSize + 6, theme.typography.fontSize + 12),
    fontFamily: (props) => props?.fonts?.heading,
    color: (props) => props?.colors?.[200],
    fontWeight: theme.typography.fontWeightBold,
    margin: theme.spacing(0, 0, 1.5, 0),
  },
  paymentRoot: (props) => ({
    border: `1px solid ${props?.colors?.[300]}`,
    padding: theme.spacing(3),
    borderRadius: 8,
    color: `${props?.colors?.[200]} !important`,
  }),
  paymentComponentHeading: (props) => ({
    fontFamily: props?.fonts?.body,
    marginBottom: `${theme.spacing(2)} !important`,

    "& p": {
      fontSize: theme.typography.fontSize + 6,
    }
  }),
  paymentComponentSubheading: (props) => ({
    fontFamily: props?.fonts?.body,
    marginBottom: `${theme.spacing(3)} !important`,
  }),
  paymentComponentOption: (props) => ({
    border: `1px solid ${props?.colors?.[300]}`,
    padding: `${theme.spacing(1.5)} !important`,
    marginBottom: "16px !important",
    borderRadius: 16,
    fontFamily: props?.fonts?.body,

    "& .custom__radio": {
      position: "relative",
      left: -4,
      width: "9px !important",
      height: "9px !important",
      opacity: "1 !important",
    },

    "& input:checked ~ .custom__radio": {
      backgroundColor: props?.colors?.[100],
      outline: `2px solid ${props?.colors?.[100]}`,
    },
  }),
  paymentComponentButton: (props) => ({
    borderRadius: "16px !important",
    marginTop: `${theme.spacing(3)} !important`,
    background: `${props?.colors?.[100]} !important`,
    color: `${props?.colors?.[200]} !important`,
    fontFamily: props?.fonts?.body,
    padding: `${theme.spacing(1.5, 2)} !important`,
    fontWeight: `${theme.typography.fontWeightRegular} !important`,

    "&:hover": {
      backgroundColor: (props) => props?.colors?.[300],
    },
  })
}));
