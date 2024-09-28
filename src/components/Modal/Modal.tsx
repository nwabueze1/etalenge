import { TModal } from "./type";
import { FC } from "react";
import { useModalStyles } from "./useModalStyles";
import { MdClose } from "react-icons/md";

export const Modal: FC<TModal> = ({ open, onClose, children }) => {
  const classes = useModalStyles();

  if (typeof window !== "undefined") {
    document.body.style.overflowY = open ? "hidden" : "visible";
  }

  if (!open) return null;

  return (
    <div className={classes.root}>
      <div className={classes.modalContent}>
        <MdClose className={classes.closeButton} onClick={onClose} />
        {children}
      </div>
      <div className={classes.overlay} />
    </div>
  );
};
