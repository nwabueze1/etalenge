import { FC, useEffect, useRef } from "react";
import { BlockProviderProps, useBlockSelector } from "../../../../components";
import { CustomThemeProps } from "../../../../type";
import { usePaymentStyles } from "./usePaymentStyles";
import { PaymentUI } from "@wazobia-tech/wazcom/dist/core";
import { PaymentProps } from "./types";

export const Payment: FC<PaymentProps> = ({ onSuccess }) => {
  const { mainConfig, buttonConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = usePaymentStyles(mainConfig as CustomThemeProps);
  const buttonClasses = usePaymentStyles(buttonConfig as CustomThemeProps);
  const paymentRef = useRef<any>();

  useEffect(() => {
    paymentRef?.current?.scrollIntoView();
  }, [])

  return (
    <div ref={paymentRef} className={classes.root}>
      <h4 className={classes.title}>Payment Options</h4>
      <PaymentUI
        displayButton={true}
        onSuccess={onSuccess}
        classNames={{
          root: classes.paymentRoot,
          paymentHeading: classes.paymentComponentHeading,
          paymentSubheading: classes.paymentComponentSubheading,
          paymentOption: classes.paymentComponentOption,
          button: buttonClasses.paymentComponentButton,
        }}
      />
    </div>
  );
};
