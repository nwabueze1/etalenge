import { FC, ReactNode } from "react";
import { BlockProviderProps, useBlockSelector } from "../BlockProvider";
import { useArrowButtonStyles } from "./useArrowButtonStyles";
import { CustomThemeProps } from "../../type";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import clx from "classnames";

type TArrowButton = {
  orientation: "left" | "right";
  onClick?: () => void;
  className?: string;
};

export const ArrowButton: FC<TArrowButton> = ({ orientation, className, onClick }) => {
  const { buttonConfig } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useArrowButtonStyles(buttonConfig as CustomThemeProps);

  const renderElement = () => {
    let element: ReactNode;

    switch (orientation) {
      case "left":
        element = <MdArrowBack className={classes.arrow} />;
        break;
      case "right":
        element = <MdArrowForward className={classes.arrow} />;
        break;
      default:
        element = null;
        break;
    }

    return (
      <button className={clx(classes.root, className)} onClick={onClick}>
        {element}
      </button>
    );
  };

  return renderElement();
};
