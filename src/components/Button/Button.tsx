import clx from "classnames";
import { FC, ReactNode } from "react";
import { useButtonStyles } from "../../blocks/Block4/useButtonStyles";
import { useRecordLinkClick } from "../../helper";
import { CustomThemeProps } from "../../type";
import { BlockProviderProps, useBlockSelector } from "../BlockProvider";

type TButton = {
  mode?: "view" | "edit";
  href?: string;
  children: ReactNode;
  size: "lg" | "md" | "sm";
  className?: string;
  onClick?: () => void;
  variant: "contained" | "outlined" | "text";
  type?: "submit" | "button";
};
export const Button: FC<TButton> = ({ size, href, mode, children, variant, className, onClick, type }) => {
  const { buttonConfig, block_uuid } = useBlockSelector((store: BlockProviderProps) => store);
  const classes = useButtonStyles(buttonConfig as CustomThemeProps);
  const recordLinkClick = useRecordLinkClick();

  const handleClick = () => {
    mode === "view" && recordLinkClick(String(children), href ?? "", block_uuid);
    mode === "view" && onClick?.();
  };

  if ((type && (type === "button" || type === "submit")) || !href)
    return (
      <button className={clx(classes.button, variant, size, className)} onClick={onClick} type={type}>
        {children}
      </button>
    );

  return (
    <a
      onClick={handleClick}
      className={clx(classes.button, variant, size, className)}
      href={mode === "edit" ? undefined : href}
    >
      {children}
    </a>
  );
};
