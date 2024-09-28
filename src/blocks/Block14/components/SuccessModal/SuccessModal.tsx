import { FC, ReactNode } from "react";
import { useSuccessModalStyles } from "./useSuccessModalStyles";
import { CustomThemeProps } from "../../../../type";
import { MdClose } from "react-icons/md";
import clx from "classnames";

export const SuccessModal: FC<{
  open: boolean;
  mainConfig: CustomThemeProps;
  onClose?: () => void;
  type: "success" | "error" | null;
}> = ({ type, open, mainConfig, onClose }) => {
  const classes = useSuccessModalStyles(mainConfig);

  if (typeof window !== "undefined") {
    window.document.body.style.overflow = open ? "hidden" : "auto";
  }

  const renderContent = () => {
    let element: ReactNode = null;

    switch (type) {
      case "success":
        element = (
          <>
            <img
              src={"https://sytbuildr.s3.eu-west-2.amazonaws.com/templates/elegante/success_notification.svg"}
              className={classes.image}
              alt={"success-icon"}
            />
            <h6 className={classes.heading}>Thank you</h6>
            <p className={classes.subtitle}>
              Your response has been received successfully, we will get back to you shortly!!
            </p>
          </>
        );
        break;
      case "error":
        element = (
          <>
            <p className={classes?.subtitle}>Oops we couldn’t send your response, kindly retry!!</p>
          </>
        );
        break;
      default:
        break;
    }

    return (
      <div className={clx(classes.modal, type)}>
        {element}
        <MdClose className={clx(classes.closeIcon, type)} onClick={() => onClose?.()} />
      </div>
    );
  };

  return <div className={classes.root}>{renderContent()}</div>;
};
