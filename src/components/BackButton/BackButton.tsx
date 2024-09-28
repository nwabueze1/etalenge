import { CustomThemeProps } from "../../type";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FC } from "react";
import { BlockProviderProps, useBlockSelector } from "../BlockProvider";
import { useBackButtonStyles } from "./UseBackButtonStyles";
import clx from "classnames";

export const BackButton: FC<{ onClick?: () => void, className?: string }> = ({ onClick, className }) => {
  const { mainConfig } = useBlockSelector((state: BlockProviderProps) => state);
  const classes = useBackButtonStyles(mainConfig as CustomThemeProps);

  return (
    <div className={clx(classes.root, className)} onClick={onClick}>
      <IoIosArrowRoundBack className={classes.backIcon} />
      <p className={classes.text}>Back</p>
    </div>
  );
};
